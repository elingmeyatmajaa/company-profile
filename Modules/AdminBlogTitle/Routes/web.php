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
use Modules\AdminBlogTitle\Http\Controllers\AdminBlogTitleController;

Route::prefix('admin/blog-title')->name('admin.blog-title.')->group(function() {
    Route::get('/', [AdminBlogTitleController::class, 'index'])
    ->middleware('can:read-blog-title')
    ->name('index');
    Route::put('/', [AdminBlogTitleController::class, 'update'])
    ->middleware('can:update-blog-title')
    ->name('update');
});
