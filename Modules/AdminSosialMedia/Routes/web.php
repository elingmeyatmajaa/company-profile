<?php

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

use Illuminate\Support\Facades\Route;
use Modules\AdminSosialMedia\Http\Controllers\AdminSosialMediaController;

Route::prefix('admin/sosial-media')->name('admin.sosial-media.')->group(function () {
    Route::get('/', [AdminSosialMediaController::class, 'index'])
    ->middleware('can:read-sosial-media')
    ->name('index');
    Route::get('/create', [AdminSosialMediaController::class, 'create'])
    ->middleware('can:create-sosial-media')
    ->name('create');
    Route::post('/create', [AdminSosialMediaController::class, 'store'])
    ->middleware('can:create-sosial-media')
    ->name('store');
    Route::get('/{sosialMedias}', [AdminSosialMediaController::class, 'show'])
    ->middleware('can:read-sosial-media')
    ->name('show');
    Route::get('/{sosialMedias}/edit', [AdminSosialMediaController::class, 'edit'])
    ->middleware('can:update-sosial-media')
    ->name('edit');
    Route::put('/{sosialMedias}/edit', [AdminSosialMediaController::class, 'update'])
    ->middleware('can:update-sosial-media')
    ->name('update');
    Route::delete('/{sosialMedias}', [AdminSosialMediaController::class, 'destroy'])
    ->middleware('can:delete-sosial-media')
    ->name('destroy');
});
