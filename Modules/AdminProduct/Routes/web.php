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
use Modules\AdminProduct\Http\Controllers\AdminProductController;

Route::prefix('admin/product')->name('admin.product.')->group(function () {
    Route::get('/', [AdminProductController::class, 'index'])
    ->middleware('can:read-product')
    ->name('index');
    Route::get('/create', [AdminProductController::class, 'create'])
    ->middleware('can:create-product')
    ->name('create');
    Route::post('/create', [AdminProductController::class, 'store'])
    ->middleware('can:create-product')
    ->name('store');
    Route::get('/{product}', [AdminProductController::class, 'show'])
    ->middleware('can:read-product')    
    ->name('show');
    Route::get('/{product}/edit', [AdminProductController::class, 'edit'])
    ->middleware('can:update-product')   
    ->name('edit');
    Route::put('/{product}/edit', [AdminProductController::class, 'update'])
    ->middleware('can:update-product')    
    ->name('update');
    Route::delete('/{product}', [AdminProductController::class, 'destroy'])
    ->middleware('can:delete-product')   
    ->name('destroy');
});
