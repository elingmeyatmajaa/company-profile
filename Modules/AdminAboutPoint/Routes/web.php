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
use Modules\AdminAboutPoint\Http\Controllers\AdminAboutPointController;

Route::prefix('admin/about-point')->name('admin.about-point.')->group(function () {
    Route::get('/', [AdminAboutPointController::class, 'index'])
        ->middleware('can:read-about-point')
        ->name('index');
    Route::get('/create', [AdminAboutPointController::class, 'create'])
        ->middleware('can:create-about-point')
        ->name('create');
    Route::post('/create', [AdminAboutPointController::class, 'store'])
        ->middleware('can:create-about-point')
        ->name('store');
    Route::get('/{aboutPoints}', [AdminAboutPointController::class, 'show'])
        ->middleware('can:read-about-point')
        ->name('show');
    Route::get('/{aboutPoints}/edit', [AdminAboutPointController::class, 'edit'])
        ->middleware('can:update-about-point')
        ->name('edit');
    Route::put('/{aboutPoints}/edit', [AdminAboutPointController::class, 'update'])
        ->middleware('can:update-about-point')
        ->name('update');
    Route::delete('/{aboutPoints}', [AdminAboutPointController::class, 'destroy'])
        ->middleware('can:delete-action')
        ->name('destroy');
});
