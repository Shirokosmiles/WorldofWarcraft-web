<?php

namespace App\Http\Livewire\Profile\Transaction;

use Livewire\Component;

class Show extends Component
{
    public $user;

    public $activeTab = 'trans';

    public $validTabs = ['trans', 'gifts', 'output'];

    public function setTab($tab)
    {
        if (! in_array($tab, $this->validTabs)) {
            return;
        }
        $this->activeTab = $tab;
        $this->emit('refresh');
    }

    public function render()
    {
        return view('livewire.profile.transaction.show');
    }
}
