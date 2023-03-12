<?php

namespace App\Http\Livewire\Web\Post;

use App\Models\Web\Post;
use Livewire\Component;

class Frag extends Component
{
    public function render()
    {
        $dataToEliminate = Post::orderBy('created_at','desc')->where('status','PUBLISHED')->take(6)->select('id')->pluck('id');
        $news = Post::whereNotIn('id', $dataToEliminate)->orderBy('created_at','desc')->skip(6)->simplePaginate(10);
        return view('livewire.web.post.frag', [
            'news' => $news
        ]);
    }
}
