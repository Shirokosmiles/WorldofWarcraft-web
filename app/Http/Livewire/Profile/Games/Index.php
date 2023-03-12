<?php

namespace App\Http\Livewire\Profile\Games;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $game;

    public function mount() {
        $this->game = Auth::user()->game;
    }

    public function render()
    {
        return view('livewire.profile.games.index');
    }
}
