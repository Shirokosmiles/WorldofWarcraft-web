<?php

use App\Services\Server;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LanguageController;

Route::get('{locale?}', [LanguageController::class, 'switch'])->name('lang.switch');
Route::post('graphql', [Server::class, 'graphql'])->name('graphql');
