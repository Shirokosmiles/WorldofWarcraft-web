<?php

namespace App\Http\Livewire\Profile\Overview;

use App\Models\User;
use App\Models\Web\Gifts;
use App\Models\Web\Key;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class ReedemCode extends Component
{

    public string $key = "";

    protected array $rules = [
        'key' => 'required|alpha_dash'
    ];

    protected array $messages = [
        'key.required' => 'Введите код.',
        'key.alpha_dash' => 'Неверный формат',
    ];

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function protectionValidate() {
        $validatedData = $this->validate();
    }

    /**
     * @throws ValidationException
     */
    public function update() {
        $validatedData = $this->validate();

        $key = Key::where('Key', $this->key)->first();
        if (!$key) {
            throw ValidationException::withMessages([
                'key' => [__('В данный момент вы не можете использовать этот код. Проверьте код и повторите попытку.')],
            ]);
        }
        /*
        if ($key->status == 1) {
            throw ValidationException::withMessages([
                'key' => [__('Данный код, уже был использован.')],
            ]);
        }
        */
        switch ($key->type) {

            case 0:
                Gifts::create([
                    'user_id' => auth()->id(),
                    'item' => $key->item,
                    'countItem' => $key->countItem,
                    'title' => $key->title,
                    'status' => 0,
                ]);
                $this->reset('key');
                break;

            case 1:
                $user = User::whereId(auth()->id())->first();
                $user->update([
                    'votes' => DB::raw('votes + ' . $key->votes)
                ]);
                $this->emit('balanceWasUpdate', 'Голоса успешно добавлены.');
                $this->reset('key');
                break;

            case 2:
                $user = User::whereId(auth()->id())->first();
                $user->update([
                    'balances' => DB::raw('balances + ' . $key->money)
                ]);
                $this->emit('balanceWasUpdate', 'Баланс успешно пополнен.');
                $this->reset('key');
                break;

            default:
                throw ValidationException::withMessages([
                    'key' => [__('Системная ошибка')],
                ]);
        }

        $key->update([
            'status' => 1
        ]);
    }

    public function render()
    {
        return view('livewire.profile.overview.reedem-code');
    }
}
