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
use Modules\Auth\Http\Controllers\AuthController;

Route::prefix('login')->name('admin.auth.')->middleware('guest')->group(function() {
    Route::get('/', [AuthController::class, 'showLogin'])->name('show-login');
    Route::post('/', [AuthController::class, 'login'])->name('login');

    Route::get('/register', [AuthController::class, 'create'])->name('register');
    Route::post('/register', [AuthController::class, 'store'])->name('store');
});


Route::delete('/logout', [AuthController::class, 'logout'])->name('admin.auth.logout');
