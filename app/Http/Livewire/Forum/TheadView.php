<?php

namespace App\Http\Livewire\Forum;

use App\Http\Livewire\Traits\WithAuthRedirects;
use App\Models\Forum\Category;
use App\Models\Forum\Idea;
use App\Models\Forum\Status;
use App\Models\Forum\Vote;
use Livewire\Component;
use Livewire\WithPagination;

class TheadView extends Component
{
    use WithPagination, WithAuthRedirects;

    public $category;
    public $search;

    public function mount(Category $category)
    {
        $this->category = $category;
    }

    protected $queryString = [
        'search',
    ];

    protected $listeners = ['queryStringUpdatedStatus'];


    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {

        return view('livewire.forum.thead-view', [
            'topic' => Idea::wherePinned(0)->with('user')->whereCategoryId($this->category->id)->when(strlen($this->search) >= 3,
                function ($query) {
                    return $query->where('title', 'like', '%'.$this->search.'%');
                })
                ->withCount('comments')
                ->orderBy('created_at', 'desc')
                ->simplePaginate(),
            'pinned' => Idea::wherePinned(1)->with('user')->whereCategoryId($this->category->id)->when(strlen($this->search) >= 3,
                function ($query) {
                    return $query->where('title', 'like', '%'.$this->search.'%');
                })
                ->withCount('comments')
                ->orderBy('created_at', 'desc')
                ->simplePaginate()
        ]);
    }
}
