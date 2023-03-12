<?php

namespace App\Http\Livewire\Forum;

use App\Http\Livewire\Traits\WithAuthRedirects;
use App\Models\Forum\Category;
use App\Models\Forum\Idea;
use Livewire\Component;
use Livewire\WithPagination;

class IdeasIndex extends Component
{
    use WithPagination, WithAuthRedirects;

    public function render()
    {
        $categories = Category::whereNotNull('parent_id')->get();

        return view('livewire.forum.ideas-index', [
            'category' => Category::whereNull('parent_id')->with('forums')->orderBy('sort')->get(),
            'categories' => $categories,
            'topic' => Idea::with('user')
                ->with('category')
                ->withCount('comments')
                ->orderBy('created_at', 'desc')
                ->limit(10)
                ->get()
        ]);
    }
}
