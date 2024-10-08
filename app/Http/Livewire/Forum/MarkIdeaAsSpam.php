<?php

namespace App\Http\Livewire\Forum;

use App\Models\Forum\Idea;
use Illuminate\Http\Response;
use Livewire\Component;

class MarkIdeaAsSpam extends Component
{
    public $idea;

    public function mount(Idea $idea)
    {
        $this->idea = $idea;
    }

    public function markAsSpam()
    {
        if (auth()->guest()) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $this->idea->spam_reports++;
        $this->idea->save();

        $this->emit('ideaWasMarkedAsSpam', 'Idea was marked as spam!');
    }

    public function render()
    {
        return view('livewire.forum.mark-idea-as-spam');
    }
}
