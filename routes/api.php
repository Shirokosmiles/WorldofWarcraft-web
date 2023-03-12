<?php

use App\Http\Controllers\Api\LocalesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UpdateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/update/check', [UpdateController::class, 'getVersion']);
Route::get('/update/get/{version}', [UpdateController::class, 'update']);

Route::get('/locales', [LocalesController::class, 'locales']);
Route::get('/localized-strings', [LocalesController::class, 'strings']);
//Route::get('/client/full/list/{id}', [ClientController::class, 'fullList']);
