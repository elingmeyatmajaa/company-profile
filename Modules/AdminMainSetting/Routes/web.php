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
use Modules\AdminMainSetting\Http\Controllers\AdminMainSettingController;

Route::prefix('admin/main-setting')->name('admin.main-setting.')->middleware('auth')->group(function () {
    Route::get('/', [AdminMainSettingController::class, 'index'])
        ->middleware('can:read-setting')
        ->name('index');
    Route::put('/', [AdminMainSettingController::class, 'update'])
        ->middleware('can:update-setting')
        ->name('update');
});
