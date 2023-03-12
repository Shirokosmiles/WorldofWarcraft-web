<?php

namespace App\Http\Controllers;

use App\Models\Forum\Category;
use App\Models\Forum\Idea;
use Illuminate\Support\Facades\DB;

class TopicController extends Controller
{
    public function index(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.index');
    }

    public function new(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.new');
    }

    public function latest(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.latest');
    }

    public function top(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.top', [
            'topic' => Idea::with('user')
                ->with('category')
                ->withCount('comments')
                ->whereMonth('created_at', date('m'))
                ->where('views', '>', 10)
                ->orderBy('comments_count', 'desc')
                ->orderBy('views', 'desc')
                ->limit(30)
                ->get()
        ]);
    }

    public function mvp(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.mvp');
    }

    public function postsDev(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.postsDev');
    }

    public function topicsDev(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.topicsDev', [
            'topic' => Idea::with('userDev')
                ->with('category')
                ->withCount('comments')
                ->orderBy('comments_count', 'desc')
                ->orderBy('views', 'desc')
                ->limit(30)
                ->get()
        ]);
    }

    public function thead(Category $category): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.thead_view', [
            'category' => $category,
            'categories' => Category::whereParentId($category->id)->orderBy('sort')->get(),
            'backUrl' => url()->previous() !== url()->full() && url()->previous() !== route('login')
                ? url()->previous()
                : route('idea.index'),
        ]);
    }

    public function show(Idea $idea): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('forums.topic_view', [
            'idea' => $idea,
            'votesCount' => $idea->votes()->count(),
            'backUrl' => url()->previous() !== url()->full() && url()->previous() !== route('login')
                ? url()->previous()
                : route('idea.index'),
        ]);
    }
}
