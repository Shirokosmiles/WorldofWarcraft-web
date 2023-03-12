<?php

use App\Models\Payment\History;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'verified'])->get('/overview', function () {
    return view('profile.show');
})->name('overview');

Route::middleware(['auth:sanctum', 'verified'])->get('/details', function () {
    return view('profile.details');
})->name('details');

Route::middleware(['auth:sanctum', 'verified'])->get('/games', function () {
    return view('profile.games');
})->name('games');

Route::middleware(['auth:sanctum', 'verified'])->get('/vote', function () {
    return view('profile.vote');
})->name('vote');

Route::middleware(['auth:sanctum', 'verified'])->get('/security', function () {
    return view('profile.security');
})->name('security');

Route::middleware(['auth:sanctum', 'verified'])->get('/payment', function () {
    return view('profile.payment');
})->name('payment');

Route::middleware(['auth:sanctum', 'verified'])->get('/payment/create', function () {
    return view('profile.payment.create');
})->name('payment.create');

Route::middleware(['auth:sanctum', 'verified'])->get('/transactions', function () {
    return view('profile.transactions');
})->name('transactions');

Route::middleware(['auth:sanctum', 'verified'])->get('/characters', [
    \App\Http\Livewire\Profile\Characters\Index::class, '__invoke'
])->name('profile.characters');

Route::middleware(['auth:sanctum', 'verified'])->get('/transactions/UE{order_id}/{id}', function (History $order_id) {
    return view('profile.transactions_view', compact('order_id'));
})->name('transactions.view');
