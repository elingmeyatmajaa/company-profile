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
use Modules\AdminUser\Http\Controllers\AdminUserController;

Route::prefix('admin/user')->name('admin.user.')->middleware('auth')->group(function() {
    Route::get('/', [AdminUserController::class, 'index'])
        ->name('index');
    Route::get('/create', [AdminUserController::class, 'create'])
        ->name('create');
    Route::post('/create', [AdminUserController::class, 'store'])
        ->name('store');
    Route::get('/{user}', [AdminUserController::class, 'show'])
        ->name('show');
    Route::get('/{user}/edit', [AdminUserController::class, 'edit'])
        ->name('edit');
    Route::put('/{user}/edit', [AdminUserController::class, 'update'])
        ->name('update');
    Route::delete('/{user}', [AdminUserController::class, 'destroy'])
        ->name('destroy');
});
