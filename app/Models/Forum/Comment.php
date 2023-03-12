<?php

namespace App\Models\Forum;

use App\Exceptions\DuplicateVoteException;
use App\Exceptions\VoteNotFoundException;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $perPage = 10;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function idea()
    {
        return $this->belongsTo(Idea::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function isVotedByUser(?User $user)
    {
        if (!$user) {
            return false;
        }

        return Vote::where('user_id', $user->id)
            ->where('comment_id', $this->id)
            ->exists();
    }

    /**
     * @throws DuplicateVoteException
     */
    public function vote(User $user)
    {
        if ($this->isVotedByUser($user)) {
            throw new DuplicateVoteException;
        }

        Vote::create([
            'comment_id' => $this->id,
            'user_id' => $user->id,
        ]);
    }

    /**
     * @throws VoteNotFoundException
     */
    public function removeVote(User $user)
    {
        $voteToDelete = Vote::where('comment_id', $this->id)
            ->where('user_id', $user->id)
            ->first();

        if ($voteToDelete) {
            $voteToDelete->delete();
        } else {
            throw new VoteNotFoundException;
        }
    }

    public function votes()
    {
        return $this->belongsToMany(User::class, 'votes');
    }
}
