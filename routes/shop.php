<?php

use Illuminate\Support\Facades\Route;

Route::prefix('shop')->group(function () {

    Route::get('/', function () {
        return view('shop.index');
    })->name('shop.index');

});

