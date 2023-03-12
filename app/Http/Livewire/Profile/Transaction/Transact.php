<?php

namespace App\Http\Livewire\Profile\Transaction;

use Livewire\Component;

class Transact extends Component
{
    public $user;

    public function render()
    {
        $transact = $this->user->transactions()->orderBy('created_at', 'desc')->paginate(10);
        return view('livewire.profile.transaction.transact', compact('transact'));
    }
}
