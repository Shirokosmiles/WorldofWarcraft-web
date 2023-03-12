<?php

namespace App\Actions\Fortify;

use App\Helpers\Version;
use App\Models\Game\Account;
use App\Models\Game\AccountUser;
use App\Models\Game\BnetAccount;
use App\Models\User;
use App\Services\Srp6;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users', 'ends_with:gmail.com,mail.ru,inbox.ru,list.ru,yandex.ru,bk.ru,yahoo.com,outlook.com,rambler.ru,icloud.com'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();

        return DB::transaction(function () use ($input) {
            return tap(User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
            ]), function (User $user) use ($input) {
                $this->createGameAccount($user, $input);
            });
        });
    }

    /**
     * @throws \Exception
     */
    protected function createGameAccount(User $user, $input)
    {
        $accounts = BnetAccount::create([
            'email' => $input['email'],
            'sha_pass_hash' => Version::passwordHash(config('server.version'), $input['email'], $input['password']),
            'last_login' => date('Y-m-d h:m:s')
        ]);

        if(config('server.srp6')) {
            list($salt, $verifier) = Srp6::getRegistrationData($input['email'], $input['password']);

            $game = Account::create([
                'username' => $accounts->id.'#1',
                'salt' => $salt,
                'verifier' => $verifier,
                'email' => $accounts->email,
                'battlenet_account' => $accounts->id,
                'battlenet_index' => 1
            ]);
        } else {

            $game = Account::create([
                'username' => $accounts->id.'#1',
                'sha_pass_hash' => Version::passwordHash(config('server.version'), $input['email'], $input['password']),
                'email' => $accounts->email,
                'battlenet_account' => $accounts->id,
                'battlenet_index' => 1
            ]);
        }


        $user->update([
            'account_id' => $game->id
        ]);
    }

}
