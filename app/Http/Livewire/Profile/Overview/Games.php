<?php

namespace App\Http\Livewire\Profile\Overview;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Games extends Component
{
    public $game;

    protected $listeners = [
        'gameWasUpdated'
    ];

    public function gameWasUpdated()
    {
        $this->game = Auth::user()->game;
    }

    public function mount() {
        $this->game = Auth::user()->game;
    }

    public function render()
    {
        return view('livewire.profile.overview.games');
    }
}
