<?php

namespace App\Http\Livewire\Profile\Transaction;

use Livewire\Component;

class View extends Component
{
    public $item;

    public function mount($order)
    {
        $this->item = $order;
    }

    public function render()
    {
        return view('livewire.profile.transaction.view');
    }
}
