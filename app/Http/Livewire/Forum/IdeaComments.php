<?php

namespace App\Http\Livewire\Forum;

use App\Models\Forum\Comment;
use App\Models\Forum\Idea;
use Livewire\Component;
use Livewire\WithPagination;

class IdeaComments extends Component
{

    use WithPagination;

    public $idea;

    protected $listeners = ['commentWasAdded', 'commentWasDeleted', 'statusWasUpdated'];

    public function commentWasAdded()
    {
        $this->idea->refresh();
        $this->goToPage($this->idea->comments()->paginate()->lastPage());
    }

    public function statusWasUpdated()
    {
        $this->idea->refresh();
        $this->goToPage($this->idea->comments()->paginate()->lastPage());
    }

    public function commentWasDeleted()
    {
        $this->idea->refresh();
        $this->goToPage(1);
    }

    public function mount(Idea $idea)
    {
        $this->idea = $idea;
    }

    public function render()
    {
        return view('livewire.forum.idea-comments', [
            'comments' => Comment::with(['user', 'status'])->where('idea_id', $this->idea->id)->paginate()->withQueryString()
        ]);
    }
}
