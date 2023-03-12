<?php

namespace App\Http\Livewire\Profile\Overview\Games;

use App\Models\Game\Account;
use App\Models\Game\BnetAccount;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Attach extends Component
{

    public $password;

    public $email;

    protected $listeners = ['attachAccount' => '$refresh'];

    protected $rules = [
        'email' => [
            'required',
            'string',
            'email'
        ],
        'password' => [
            'required',
            'max:16'
        ]
    ];

    protected $messages = [
        'password.required' => 'Введите пароль.',
        'password.max' => 'Максимальная длина: :max символов.',
    ];

    /**
     * @throws ValidationException
     */
    public function attachAccount() {

        $this->validate();

        $accounts = BnetAccount::where('email', $this->email)->first();

        if (!$accounts) {
            throw ValidationException::withMessages([
                'email' => [__('auth.failed')],
            ]);

        }

        $password = strtoupper(bin2hex(strrev(hex2bin(strtoupper(hash("sha256",strtoupper(hash("sha256", strtoupper
            ($this->email)).":".strtoupper($this->password))))))));

        if ($password != $accounts->sha_pass_hash ) {
            throw ValidationException::withMessages([
                'password' => [__('Пароль не верный.')],
            ]);
        }

        $game = Account::where('email', $this->email)->first();

        $user = User::where('email', $game->email)->first();

        $user->update([
            'account_id' => $game->id
        ]);

        $this->emit('gameWasUpdated', 'Account was added');

        $this->emit('saved');
    }

    public function render()
    {
        return view('livewire.profile.overview.games.attach');
    }
}
