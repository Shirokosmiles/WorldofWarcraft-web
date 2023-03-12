<?php

namespace App\Http\Livewire\Profile\Vote;

use App\Models\Web\Votes;
use Livewire\Component;

class Create extends Component
{
    public int $voteCountDone = 0;

    public function mount()
    {
        $this->voteCountDone = Votes::where('name', auth()->user()->name)->whereComplete(1)->get()->count();
    }

    public function render()
    {
        return view('livewire.profile.vote.create', [
            'votes' => Votes::where('name', auth()->user()->name)
                ->orderBy('created_at', 'DESC')
                ->paginate(10)
        ]);
    }
}
