<?php

namespace App\Http\Livewire\Profile\Characters;

use App\Models\User;
use Livewire\Component;

class Index extends Component
{
    public $characters;

    public function update($guid) {
        $user = auth()->user();
        $user->activeCharacters = $guid;
        $user->save();
        $this->emitTo('index', 'refreshComponent');
    }

    public function mount()
    {
        $this->characters = \App\Models\Game\Characters::whereAccount(auth()->user()->account_id)->get();
    }

    public function render()
    {
        return view('livewire.profile.characters.index');
    }
}
