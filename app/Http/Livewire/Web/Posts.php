<?php

namespace App\Http\Livewire\Web;

use App\Models\Web\Post;
use JetBrains\PhpStorm\ArrayShape;
use Livewire\Component;

class Posts extends Component
{
    public $post;

    public function mount()
    {
        $raw = Post::select(['id','name', 'slug', 'image', 'created_at'])->where('status', 'PUBLISHED')->orderBy('created_at', 'DESC')->orderBy('updated_at', 'DESC')->limit(4)->get();
        $collection = [];
        foreach($raw as $key) {
            $collection[] = $this->buildArticle($key);
        }
        $this->post = json_encode([
            'articles' =>
                $collection
        ], true);
    }


    private function buildArticle($raw): array
    {
        return array(
            'id' => $raw->id,
            'title' => $raw->getTranslation('name', app()->getLocale()),
            'published' => $raw->created_at,
            'image' => [
                'width' => 1200,
                'height' => 675,
                'url' => config('app.url') . '/' . str_replace('\\', '\\\\', $raw->image)
            ],
            'type' => 'BLOG',
            'url' => route('post.show', ['post' => $raw->id, 'slug' => $raw->slug]),
            'analytics' => [
                'name' => 'home-masthead-news',
                'placement' => 'slot:0 - type:blog - id:'.$raw->id.' || ' . $raw->title
            ]
        );
    }

    public function render()
    {
        return view('livewire.web.posts');
    }
}
