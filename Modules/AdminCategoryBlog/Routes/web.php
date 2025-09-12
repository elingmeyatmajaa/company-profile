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
use Modules\AdminCategoryBlog\Http\Controllers\AdminCategoryBlogController;

Route::prefix('admin/category-blog')->name('admin.category-blog.')->group(function () {
    Route::get('/', [AdminCategoryBlogController::class, 'index'])
    ->middleware('can:read-category-blog')
    ->name('index');
    Route::get('/create', [AdminCategoryBlogController::class, 'create'])
    ->middleware('can:create-category-blog')
    ->name('create');
    Route::post('/create', [AdminCategoryBlogController::class, 'store'])
    ->middleware('can:create-category-blog')
    ->name('store');
    Route::get('/{categoryBlogs}', [AdminCategoryBlogController::class, 'show'])
    ->middleware('can:read-category-blog')
    ->name('show');
    Route::get('/{categoryBlogs}/edit', [AdminCategoryBlogController::class, 'edit'])
    ->middleware('can:update-category-blog')
    ->name('edit');
    Route::put('/{categoryBlogs}/edit', [AdminCategoryBlogController::class, 'update'])
    ->middleware('can:update-category-blog')
    ->name('update');
    Route::delete('/{categoryBlogs}', [AdminCategoryBlogController::class, 'destroy'])
    ->middleware('can:delete-category-blog')
    ->name('destroy');
});
