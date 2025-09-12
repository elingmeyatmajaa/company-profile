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
use Modules\AdminBlog\Http\Controllers\AdminBlogController;

Route::prefix('admin/blog')->name('admin.blog.')->group(function () {
    Route::get('/', [AdminBlogController::class, 'index'])
        ->middleware('can:read-blog')
        ->name('index');
    Route::get('/create', [AdminBlogController::class, 'create'])
        ->middleware('can:create-blog')
        ->name('create');
    Route::post('/create', [AdminBlogController::class, 'store'])
        ->middleware('can:create-blog')
        ->name('store');
    Route::get('/{blog}', [AdminBlogController::class, 'show'])
        ->middleware('can:read-blog')
        ->name('show');
    Route::get('/{blog}/edit', [AdminBlogController::class, 'edit'])
        ->middleware('can:update-blog')
        ->name('edit');
    Route::put('/{blog}/edit', [AdminBlogController::class, 'update'])
        ->middleware('can:update-blog')
        ->name('update');
    Route::delete('/{blog}', [AdminBlogController::class, 'destroy'])
        ->middleware('can:delete-blog')
        ->name('destroy');
});
