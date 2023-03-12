<?php

namespace App\Http\Livewire\Profile\Overview;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Payment extends Component
{
    public int $balance = 0;

    public mixed $vote = 0;

    protected $listeners = [
        'balanceWasUpdate',
    ];

    public function balanceWasUpdate()
    {
        $this->balance = Auth::user()->balances;
        $this->vote = Auth::user()->votes . ' ' . trans_choice('overview.votes', Auth::user()->votes);
    }

    public function mount() {
        $this->balance = Auth::user()->balances;
        $this->vote = Auth::user()->votes . ' ' . trans_choice('overview.votes', Auth::user()->votes);
    }

    public function render()
    {
        return view('livewire.profile.overview.payment');
    }
}
