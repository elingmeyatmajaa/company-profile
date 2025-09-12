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
use Modules\AdminAction\Http\Controllers\AdminActionController;

Route::prefix('admin/action')->name('admin.action.')->middleware('auth')->group(function () {
    Route::get('/', [AdminActionController::class, 'index'])
        ->middleware('can:read-action')
        ->name('index');
    Route::get('/create', [AdminActionController::class, 'create'])
        ->middleware('can:create-action')
        ->name('create');
    Route::post('/create', [AdminActionController::class, 'store'])
        ->middleware('can:create-action')
        ->name('store');
    Route::get('/{action}', [AdminActionController::class, 'show'])
        ->middleware('can:read-action')
        ->name('show');
    Route::get('/{action}/edit', [AdminActionController::class, 'edit'])
        ->middleware('can:update-action')
        ->name('edit');
    Route::put('/{action}/edit', [AdminActionController::class, 'update'])
        ->middleware('can:update-action')
        ->name('update');
    Route::delete('/{action}', [AdminActionController::class, 'destroy'])
        ->middleware('can:delete-action')
        ->name('destroy');
});
