<?php

namespace App\Http\Livewire\Profile\Overview;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Security extends Component
{
    public $user;

    public int $progress = 0;

    public int $email_verified = 0;

    public int $phone_verified = 0;

    public int $authenticator_verified = 0;

    public function mount() {
        $this->user = Auth::user()->withoutRelations()->toArray();

        if ($this->user['email_verified_at']) {
            $this->email_verified = 33;
        }

        if ($this->user['phone_number']) {
            $this->phone_verified = 33;
        }

        if ($this->user['two_factor_secret']) {
            $this->authenticator_verified = 34;
        }

        $this->progress = $this->email_verified + $this->phone_verified + $this->authenticator_verified;
    }

    public function render()
    {
        return view('livewire.profile.overview.security');
    }
}
