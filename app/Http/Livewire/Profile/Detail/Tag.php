<?php

namespace App\Http\Livewire\Profile\Detail;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Tag extends Component
{

    public array $state = [];

    protected array $rules = [
        'state.name' => 'required|min:3|max:10'
    ];

    protected array $messages = [
        'state.name.required' => 'Введите Tag.'
    ];

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function protectionValidate() {
        $validatedData = $this->validate();
    }


    public function protection() {
        $validatedData = $this->validate();

        $this->resetErrorBag();

        $user = User::whereId(auth()->id())->first();

        if ($user->game[0]->balans >= config('payment.bonus_change_tag')) {

            $user->update([
                'name' => $validatedData['state']['name']
            ]);

            $this->emit('saved');
            $this->emit('refresh-navigation-menu');

        }
        session()->flash('message', 'У вас недостаточное бонусов');
    }

    public function mount()
    {
        $this->state = Auth::user()->withoutRelations()->toArray();
    }

    public function render()
    {
        return view('livewire.profile.detail.tag');
    }
}
