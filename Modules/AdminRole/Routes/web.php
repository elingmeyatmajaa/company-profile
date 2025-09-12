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
use Modules\AdminRole\Http\Controllers\AdminRoleController;

Route::prefix('admin/role')->name('admin.role.')->middleware('auth')->group(function () {
    Route::get('/', [AdminRoleController::class, 'index'])
        ->middleware('can:read-role')
        ->name('index');
    Route::get('/create', [AdminRoleController::class, 'create'])
        ->middleware('can:create-role')
        ->name('create');
    Route::post('/create', [AdminRoleController::class, 'store'])
        ->middleware('can:create-role')
        ->name('store');
    Route::get('/{role}', [AdminRoleController::class, 'show'])
        ->middleware('can:read-role')
        ->name('show');
    Route::get('/{role}/edit', [AdminRoleController::class, 'edit'])
        ->middleware('can:update-role')
        ->name('edit');
    Route::put('/{role}/edit', [AdminRoleController::class, 'update'])
        ->middleware('can:update-role')
        ->name('update');
    Route::delete('/{role}', [AdminRoleController::class, 'destroy'])
        ->middleware('can:delete-role')
        ->name('destroy');
});
