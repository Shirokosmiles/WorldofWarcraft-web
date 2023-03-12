@can('update', $idea)
    <livewire:forum.edit-idea :idea="$idea" />
@endcan

@can('delete', $idea)
    <livewire:forum.delete-idea :idea="$idea" />
@endcan

@auth
    <livewire:forum.mark-idea-as-spam :idea="$idea" />
@endauth

@admin
<livewire:forum.mark-idea-as-not-spam :idea="$idea" />
@endadmin

@auth
    <livewire:forum.edit-comment />
@endauth

@auth
    <livewire:forum.delete-comment />
@endauth

@auth
    <livewire:forum.mark-comment-as-spam />
@endauth

@admin
<livewire:forum.mark-comment-as-not-spam />
@endadmin
