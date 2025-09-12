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
use Modules\AdminContact\Http\Controllers\AdminContactController;
use Modules\LandingPage\Http\Controllers\LandingPageController;

Route::prefix('/')->name('landing.page.')->group(function() {
    Route::get('/', [LandingPageController::class, 'index'])
        ->name('index');

    Route::get('/blog/{slug}', [LandingPageController::class, 'blogDetail'])
        ->name('blog.detail');
    Route::get('/blog', [LandingPageController::class, 'blog'])->name('blog');
    Route::get('/product', [LandingPageController::class, 'product'])->name('product');
    Route::get('/product/{slug}', [LandingPageController::class, 'productDetail'])->name('product.detail');
    Route::get('/service/{slug}', [LandingPageController::class, 'serviceDetail'])->name('service.detail');
    Route::get('/service', [LandingPageController::class, 'service'])->name('service');
    Route::post('/', [LandingPageController::class, 'store'])->name('contact.store');
    Route::get('/contact', [LandingPageController::class, 'contact'])->name('contact');

});

Route::prefix('contact')->name('landing.page.contact.')->group(function () {
    Route::post('/', [LandingPageController::class, 'store'])->name('store');
});

Route::prefix('/page')->group(function () {
   
  
    Route::get('/{slug}', [LandingPageController::class, 'slug'])
        ->name('information.slug');
    });
