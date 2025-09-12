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
use Modules\AdminPage\Http\Controllers\AdminPageController;

Route::prefix('admin/page')->name('admin.page.')->group(function () {
    Route::get('/', [AdminPageController::class, 'index'])
        ->middleware('can:read-page')
        ->name('index');
    Route::get('/create', [AdminPageController::class, 'create'])
        ->middleware('can:create-page')
        ->name('create');
    Route::post('/create', [AdminPageController::class, 'store'])
        ->middleware('can:create-page')
        ->name('store');
    Route::get('/{page}', [AdminPageController::class, 'show'])
        ->middleware('can:read-page')
        ->name('show');
    Route::get('/{page}/edit', [AdminPageController::class, 'edit'])
        ->middleware('can:update-page')
        ->name('edit');
    Route::put('/{page}/edit', [AdminPageController::class, 'update'])
        ->middleware('can:update-page')
        ->name('update');
    Route::delete('/{page}', [AdminPageController::class, 'destroy'])
        ->middleware('can:delete-page')
        ->name('destroy');
});
