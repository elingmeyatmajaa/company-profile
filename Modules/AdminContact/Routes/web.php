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

Route::prefix('admin/contact')->name('admin.contact.')->group(function () {
    Route::get('/', [AdminContactController::class, 'index'])
        ->middleware('can:read-contact')
        ->name('index');
        });
