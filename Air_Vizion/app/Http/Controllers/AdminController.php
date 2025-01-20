<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\User;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard(){

      /*  $users = User::all();
        dd($users); // Check if data is fetched correctly
        return Inertia::render('admin/dashboard',['data' =>$users]);*/

        $users = User::all(); // Fetch all users
    return Inertia::render('admin/dashboard', [
        'data' => $users->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ];
        }),
    ]);
    }
    public function deleteUser($id)
    {
        $user = User::findOrFail($id); // Fetch the user by ID
        $user->delete(); // Delete the user
        return redirect()->back()->with('success', 'User deleted successfully!');
    }

}
