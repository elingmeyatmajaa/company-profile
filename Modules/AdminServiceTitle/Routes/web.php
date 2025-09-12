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
use Modules\AdminServiceTitle\Http\Controllers\AdminServiceTitleController;

Route::prefix('admin/service-title')->name('admin.service-title.')->group(function() {
    Route::get('/', [AdminServiceTitleController::class, 'index'])
    ->middleware('can:read-service-title')
    ->name('index');
    Route::put('/', [AdminServiceTitleController::class, 'update'])
    ->middleware('can:update-service-title')
    ->name('update');
});
