<?php

namespace App\Http\Livewire\Forum;

use App\Exceptions\DuplicateVoteException;
use App\Exceptions\VoteNotFoundException;
use App\Models\Forum\Comment;
use Livewire\Component;

class IdeaComment extends Component
{

    public $comment;
    public $ideaUserId;
    public $votesCount;
    public $hasVoted;
    public $status;

    protected $listeners = [
        'commentWasUpdated',
        'commentWasMarkedAsSpam',
        'commentWasMarkedAsNotSpam',
    ];

    public function commentWasUpdated()
    {
        $this->comment->refresh();
    }

    public function commentWasMarkedAsSpam()
    {
        $this->comment->refresh();
    }

    public function commentWasMarkedAsNotSpam()
    {
        $this->comment->refresh();
    }

    public function mount(Comment $comment, $ideaUserId, $idea)
    {
        $this->comment = $comment;
        $this->ideaUserId = $ideaUserId;
        $this->status = $idea->status_id;
        $this->votesCount = $this->comment->votes()->count();
        $this->hasVoted = $comment->isVotedByUser(auth()->user());
    }

    public function vote()
    {
        if (auth()->guest()) {
            return $this->redirectToLogin();
        }

        if ($this->hasVoted) {
            try {
                $this->comment->removeVote(auth()->user());
            } catch (VoteNotFoundException $e) {
                // do nothing
            }
            $this->votesCount--;
            $this->hasVoted = false;
        } else {
            try {
                $this->comment->vote(auth()->user());
            } catch (DuplicateVoteException $e) {
                // do nothing
            }
            $this->votesCount++;
            $this->hasVoted = true;
        }
    }

    public function render()
    {
        return view('livewire.forum.idea-comment');
    }
}
