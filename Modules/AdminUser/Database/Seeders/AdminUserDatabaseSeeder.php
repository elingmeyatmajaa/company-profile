<?php

namespace Modules\AdminUser\Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class AdminUserDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $developer = User::create([
            'name' => 'Developer',
            'email' => 'developer@developer.com',
            'password' => bcrypt('12345678'), 
            'email_verified_at' => '2023-07-03 02:06:55'
        ]);
        $developer->assignRole('developer');

    }
}
