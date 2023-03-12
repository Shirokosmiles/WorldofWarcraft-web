<?php

namespace App\Http\Livewire\Web\Post;

use App\Models\Web\Post;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        $firstnews = Post::all()->where('status','PUBLISHED')->reverse()->take(1);
        $lastnews = Post::all()->where('status','PUBLISHED')->reverse()->skip(1)->take(5);
        $dataToEliminate = Post::orderBy('created_at','desc')->take(6)->select('id')->pluck('id');
        $news = Post::whereNotIn('id', $dataToEliminate)->orderBy('created_at','desc')->skip(6)->simplePaginate(10);
        $num = 0;
        return view('livewire.web.post.index', compact('firstnews','lastnews','news','num'));
    }
}
