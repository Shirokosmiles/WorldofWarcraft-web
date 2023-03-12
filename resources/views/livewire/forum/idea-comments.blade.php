<div>
    @if ($comments->isNotEmpty())
        @foreach ($comments as $comment)
            <livewire:forum.idea-comment
                :key="$comment->id"
                :comment="$comment"
                :ideaUserId="$idea->user->id"
                :idea="$idea"
            />
        @endforeach
    @endif
</div>
