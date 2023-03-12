<?php

namespace App\Http\Livewire\Forum;

use App\Models\Forum\Category;
use Livewire\Component;

class IdeaIndex extends Component
{
    public $cat;

    public function mount(Category $cat)
    {
        $this->cat = $cat;
    }

    public function render()
    {
        return view('livewire.forum.idea-index');
    }
}
