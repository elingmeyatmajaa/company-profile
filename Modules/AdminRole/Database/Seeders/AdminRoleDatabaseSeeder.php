<?php

namespace Modules\AdminRole\Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;

class AdminRoleDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = 
        Role::create(['name' => 'developer', 'guard_name' => 'web']);
        $users = User::all();
        $role->users()->attach($users);
    }
}
