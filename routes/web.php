<?php

use App\Models\Language;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Installer routes
Route::get('/install/{step?}', [App\Http\Controllers\InstallerController::class, 'index'])->name('install');
Route::post('/install/configure-database', [App\Http\Controllers\InstallerController::class, 'configureDatabase']);
Route::post('/install/configure-company', [App\Http\Controllers\InstallerController::class, 'configureCompany']);
Route::post('/install/migrate', [App\Http\Controllers\InstallerController::class, 'runMigrations']);

Route::get('/current-locale', function () {
    return response()->json(['locale' => app()->getLocale()]);
});

Route::get('/locales', function () {
    $locales = Language::all()->pluck('code');
    return response()->json($locales);
});

Route::get('/translations/{locale}', function ($locale) {
    $path = base_path("lang/{$locale}.json");
    if (File::exists($path)) {
        $translations = File::get($path);
        return response()->json(json_decode($translations, true));
    } else {
        return response()->json(['error' => 'Locale not found'], 404);
    }
});