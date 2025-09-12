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
use Modules\AdminProductTitle\Http\Controllers\AdminProductTitleController;

Route::prefix('admin/product-title')->name('admin.product-title.')->group(function() {
    Route::get('/', [AdminProductTitleController::class, 'index'])
    ->middleware('can:read-product-title')
    ->name('index');
    Route::put('/', [AdminProductTitleController::class, 'update'])
    ->middleware('can:update-product-title')
    ->name('update');
});
