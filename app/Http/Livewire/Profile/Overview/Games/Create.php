<?php

namespace App\Http\Livewire\Profile\Overview\Games;

use App\Models\Game\Account;
use App\Models\Game\BnetAccount;
use App\Models\User;
use App\Services\Srp6;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Create extends Component
{
    public $password;

    public $email;

    protected $rules = [
        'email' => [
            'required',
            'string',
            'email',
            'ends_with:gmail.com,mail.ru,inbox.ru,list.ru,yandex.ru,bk.ru,yahoo.com,outlook.com,rambler.ru,icloud.com'
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
    public function createAccount() {

        $this->validate();

        $accounts = BnetAccount::create([
            'email' => $this->email,
            'sha_pass_hash' => strtoupper(bin2hex(strrev(hex2bin(strtoupper(hash("sha256",strtoupper(hash("sha256", strtoupper($this->email)).":".strtoupper($this->password))))))))
        ]);

        list($salt, $verifier) = Srp6::getRegistrationData($accounts->email, $this->password);

        $game = Account::create([
            'username' => $accounts->id.'#1',
            'salt' => $salt,
            'verifier' => $verifier,
            'email' => $accounts->email,
            'reg_mail' => $accounts->email,
            'battlenet_account' => $accounts->id,
            'battlenet_index' => 1
        ]);

        $user = User::where('email', $game->email)->first();

        $user->update([
            'account_id' => $game->id
        ]);

        $this->emit('gameWasUpdated', 'Account was created!');

        $this->emit('saved');

    }

    public function render()
    {
        return view('livewire.profile.overview.games.create');
    }
}
