<?php

namespace App\Http\Livewire\Web\Pvp;

use Livewire\Component;

class Leaderboards extends Component
{
    public function render()
    {
        return view('livewire.web.pvp.leaderboards')->layout('layouts.guest');
    }
}
