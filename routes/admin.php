<?php

use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {

    Route::get('/', function () {
        return view('admin.index' );
    })->name('dashboard');

    Route::middleware('user-access:webdev')->get('/post', \App\Http\Livewire\Admin\Posts\Index::class)->name('post.index');

    Route::middleware('user-access:webdev')->get('/users', \App\Http\Livewire\Admin\Users\Index::class)->name('users.index');

    Route::middleware('user-access:webdev')->get('/video', \App\Http\Livewire\Admin\Webhome::class)->name('video.pane');
});
