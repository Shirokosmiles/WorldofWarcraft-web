<?php

namespace App\Http\Livewire\Profile\Transaction;

use Livewire\Component;

class Output extends Component
{
    public $user;

    public function render()
    {
        $output = $this->user->output()->orderBy('created_at', 'desc')->paginate(10);
        return view('livewire.profile.transaction.output', compact('output'));
    }
}
