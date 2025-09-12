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
use Modules\AdminService\Http\Controllers\AdminServiceController;

Route::prefix('admin/service')->name('admin.service.')->group(function () {
    Route::get('/', [AdminServiceController::class, 'index'])
    ->middleware('can:read-service')   
    ->name('index');
    Route::get('/create', [AdminServiceController::class, 'create'])
    ->middleware('can:create-service')    
    ->name('create');
    Route::post('/create', [AdminServiceController::class, 'store'])
    ->middleware('can:create-service')    
    ->name('store');
    Route::get('/{service}', [AdminServiceController::class, 'show'])
    ->middleware('can:read-service')    
    ->name('show');
    Route::get('/{service}/edit', [AdminServiceController::class, 'edit'])
    ->middleware('can:update-service')
    ->name('edit');
    Route::put('/{service}/edit', [AdminServiceController::class, 'update'])
    ->middleware('can:update-service')
    ->name('update');
    Route::delete('/{service}', [AdminServiceController::class, 'destroy'])
    ->middleware('can:delete-service')
    ->name('destroy');
});
