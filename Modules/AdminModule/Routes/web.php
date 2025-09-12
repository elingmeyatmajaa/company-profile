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
use Modules\AdminModule\Http\Controllers\AdminModuleController;

Route::prefix('admin/module')->name('admin.module.')->middleware('auth')->group(function () {
    Route::get('/', [AdminModuleController::class, 'index'])
        ->middleware('can:read-module')
        ->name('index');
    Route::get('/create', [AdminModuleController::class, 'create'])
        ->middleware('can:create-module')
        ->name('create');
    Route::post('/create', [AdminModuleController::class, 'store'])
        ->middleware('can:create-module')
        ->name('store');
    Route::get('/{module}', [AdminModuleController::class, 'show'])
        ->middleware('can:read-module')
        ->name('show');
    Route::get('/{module}/edit', [AdminModuleController::class, 'edit'])
        ->middleware('can:update-module')
        ->name('edit');
    Route::put('/{module}/edit', [AdminModuleController::class, 'update'])
        ->middleware('can:update-module')
        ->name('update');
    Route::delete('/{module}', [AdminModuleController::class, 'destroy'])
        ->middleware('can:delete-module')
        ->name('destroy');
});
