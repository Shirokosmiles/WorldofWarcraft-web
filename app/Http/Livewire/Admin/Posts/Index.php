<?php

namespace App\Http\Livewire\Admin\Posts;

use App\Models\Web\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Livewire\Component;
use Livewire\WithFileUploads;


class Index extends Component
{
    use WithFileUploads;

    public $posts, $name, $body, $post_id, $image, $excerpt;
    public $isOpen = 0;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function create()
    {
        $this->resetInputFields();
        $this->openModal();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function openModal()
    {
        $this->isOpen = true;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function closeModal()
    {
        $this->isOpen = false;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    private function resetInputFields(){
        $this->name = '';
        $this->body = '';
        $this->excerpt = '';
        $this->body = '';
        $this->image = '';
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function store()
    {
        $this->validate([
            'name' => 'required|string|min:6',
            'excerpt' => 'required|string|min:6',
            'body' => 'required|string',
            'image'=>'required|image|mimes:jpeg,jpg,png,bmp,gif,svg',
        ]);

        $img = $this->image->storePublicly('post');

        Post::updateOrCreate(['id' => $this->post_id], [
            'author_id' => Auth::id(),
            'name' => $this->name,
            'excerpt' => $this->excerpt,
            'meta_keywords' => $this->name,
            'meta_description' => $this->name,
            'body' => $this->body,
            'slug' => Str::slug($this->name, '-'),
            'image' => $img,
        ]);

        session()->flash('message',
            $this->post_id ? 'Post Updated Successfully.' : 'Post Created Successfully.');

        $this->closeModal();
        $this->resetInputFields();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        $this->post_id = $id;
        $this->name = $post->name;
        $this->body = $post->body;

        $this->openModal();
    }

    public function render()
    {
        $this->posts = Post::all();
        return view('livewire.admin.posts.index')->layout('layouts.admin');
    }
}
