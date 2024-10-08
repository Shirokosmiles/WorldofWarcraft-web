<?php

namespace App\Http\Livewire\Forum;

use App\Http\Livewire\Traits\WithAuthRedirects;
use App\Models\Forum\Comment;
use App\Models\Forum\Idea;
use App\Notifications\CommentAdded;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Livewire\Component;

class AddComment extends Component
{
    use WithAuthRedirects;

    public $idea;
    public $comment;
    protected $rules = [
        'comment' => 'required|min:4',
    ];

    public function mount(Idea $idea)
    {
        $this->idea = $idea;
    }

    public function addComment()
    {
        if (auth()->guest()) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $this->validate();

        $newComment = Comment::create([
            'user_id' => auth()->id(),
            'idea_id' => $this->idea->id,
            'status_id' => 1,
            'body' => $this->comment,
        ]);

        $this->reset('comment');

        $this->idea->user->notify(new CommentAdded($newComment));
        $this->idea->updated_at = Carbon::now();
        $this->idea->save();

        $this->emit('commentWasAdded', 'Comment was posted!');
    }

    public function render()
    {
        return view('livewire.forum.add-comment');
    }
}
