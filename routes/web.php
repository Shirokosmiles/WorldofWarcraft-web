<?php

use App\Http\Controllers\TopicController;
use App\Models\Web\Post;
use App\Services\Server;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home.index');

Route::get('news/{post}/{slug}', function (Post $post) {
    return view('post.view' , compact('post'));
})->name('post.show');

Route::get('news', function () {
    return view('post.index');
})->name('web.post.index');

Route::get('search', [
    \App\Http\Livewire\Web\Search::class, '__invoke'
])->name('search');


Route::get('news.frag', [
    \App\Http\Livewire\Web\Post\Frag::class, '__invoke'
    ])->name('post.frag');

Route::prefix('game')->group(function () {

    Route::get('status/{server}/', function (Server $server) {
        return view('game.status' , compact('server'));
    })->name('status');

    Route::get('pvp/leaderboards/{type}', [
        \App\Http\Livewire\Web\Pvp\Leaderboards::class, '__invoke'
    ])->name('pvp.leaderboards');

});

Route::prefix('forums')->group(function () {

    Route::get('/', [TopicController::class, 'index'])->name('idea.index');

    Route::get('/c/{category:id}', [TopicController::class, 'thead'])->name('forums.categories');

    Route::get('/t/{idea:id}', [TopicController::class, 'show'])->name('idea.show');

    Route::get('/u/{user:name}', [TopicController::class, 'profile'])->name('forums.profile');

    Route::get('/g/cs-mvp', [TopicController::class, 'mvp'])->name('forums.mvp');

    Route::get('/top', [TopicController::class, 'top'])->name('forums.top');

    Route::get('/latest', [TopicController::class, 'latest'])->name('forums.latest');

    Route::get('/new', [TopicController::class, 'new'])->name('forums.new');

    Route::get('/g/developer/activity/posts', [TopicController::class, 'postsDev'])->name('forums.postsDev');
    Route::get('/g/developer/activity/topics', [TopicController::class, 'topicsDev'])->name('forums.topicsDev');
});
