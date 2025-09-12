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
use Modules\AdminAbout\Http\Controllers\AdminAboutController;

Route::prefix('admin/about')->name('admin.about.')->group(function() {
    Route::get('/', [AdminAboutController::class, 'index'])
    ->middleware('can:read-about')

    ->name('index');
    Route::put('/', [AdminAboutController::class, 'update'])
    ->middleware('can:update-about')

    ->name('update');

    Route::get('/point', [AdminAboutController::class, 'aboutPoint'])
    ->name('point');
});
