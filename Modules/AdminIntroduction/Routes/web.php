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
use Modules\AdminIntroduction\Http\Controllers\AdminIntroductionController;

Route::prefix('admin/introduction')->name('admin.introduction.')->group(function() {
    Route::get('/', [AdminIntroductionController::class, 'index'])
    ->middleware('can:read-introduction')
    ->name('index');
    Route::put('/', [AdminIntroductionController::class, 'update'])
    ->middleware('can:update-introduction')
    ->name('update');
});
