<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;



Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/feedback', function () {
    return Inertia::render('Feedback');
});

Route::get('/system', function () {
    return Inertia::render('System');
});

Route::get('/solution', function () {
    return Inertia::render('Solution');
});

Route::get('/implementation', function () {
    return Inertia::render('Implementation');
});

Route::get('/sensors', function () {
    return Inertia::render('Sensors');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth','role:admin'])->group(function(){ //admin login dashboard
    Route::get('/admin/dashboard',[AdminController::class,'dashboard']);
});

Route::delete('/admin/users/{id}', [AdminController::class, 'deleteUser'])->name('admin.users.delete');

require __DIR__.'/auth.php';



