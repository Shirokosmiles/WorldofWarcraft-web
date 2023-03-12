<?php

namespace App\Http\Livewire\Profile\Transaction;

use Illuminate\Http\RedirectResponse;
use Livewire\Component;
use Livewire\Redirector;

class Gifts extends Component
{
    public $user;

    public function select(): RedirectResponse|Redirector
    {
        return redirect()->route('profile.characters');
    }

    public function render()
    {
        $gifts = $this->user->gifts()->orderBy('created_at', 'desc')->paginate(10);
        return view('livewire.profile.transaction.gifts', compact('gifts'));
    }
}
