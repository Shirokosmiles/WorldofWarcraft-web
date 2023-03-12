<?php

namespace App\Http\Livewire\Web;

use App\Models\Web\Characters;
use App\Models\Web\Post;
use Livewire\Component;

class Search extends Component
{
    public $term;

    public function render()
    {
        sleep(1);
        if ($this->term == "") {
            $post = '';
            $characters = '';
        } else {
            $post = Post::search($this->term)->paginate(10);
            $characters = Characters::search($this->term)->get();
        }

        $data = [
            'post' => $post,
            'characters' => $characters,
        ];

        return view('livewire.web.search', $data)->layout('layouts.guest');
    }
}
