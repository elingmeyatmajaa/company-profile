<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $developer = User::create([
            'name' => 'Developer',
            'email' => 'developer@developer.com',
            'password' => bcrypt('12345678'), 
            'email_verified_at' => '2023-07-03 02:06:55'
        ]);
        $developer->assignRole('developer');

    }
}
