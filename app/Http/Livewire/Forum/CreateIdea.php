<?php

namespace App\Http\Livewire\Forum;

use App\Http\Livewire\Traits\WithAuthRedirects;
use App\Models\Forum\Category;
use App\Models\Forum\Idea;
use Illuminate\Http\Response;
use Livewire\Component;

class CreateIdea extends Component
{

    use WithAuthRedirects;

    public $title;
    public $category;
    public $description;

    protected $rules = [
        'title' => 'required|min:4',
        'category' => 'required|integer',
        'description' => 'required|min:4',
    ];

    public function createIdea()
    {
        if (auth()->guest()) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $this->validate();

        $idea = Idea::create([
            'user_id' => auth()->id(),
            'category_id' => $this->category,
            'status_id' => 1,
            'title' => $this->title,
            'description' => $this->description,
        ]);

        $this->reset();

        return redirect()->route('idea.show', $idea);
    }

    public function render()
    {
        return view('livewire.forum.create-idea', [
            'categories' => Category::whereNotNull('parent_id')->get(),
        ]);
    }
}
