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
use Modules\AdminLandingPage\Http\Controllers\AdminLandingPageController;

Route::prefix('admin/landing-page')->name('admin.landing-page.')->group(function() {
    // Route::get('/', [AdminLandingPageController::class, 'index'])
    // ->name('index');

    Route::get('/introduction', [AdminLandingPageController::class, 'showIntroduction'])
    ->name('show-introduction');

    Route::put('/introduction',[AdminLandingPageController::class, 'updateIntroduction'])
    ->name('update-introduction');
});
