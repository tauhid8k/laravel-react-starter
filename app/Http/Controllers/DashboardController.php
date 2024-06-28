<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class DashboardController extends Controller
{
    public function index()
    {
        $userCount = User::count();
        $rolesCount = Role::whereNot('name', 'admin')->count();

        return inertia('Dashboard/Overview', ['data' => [
            'users' => $userCount,
            'roles' => $rolesCount
        ]]);
    }
}
