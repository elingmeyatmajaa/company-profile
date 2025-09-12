<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Modules\AdminAction\Database\Seeders\AdminActionDatabaseSeeder;
use Modules\AdminModule\Database\Seeders\AdminModuleDatabaseSeeder;
use Modules\AdminRole\Database\Seeders\AdminRoleDatabaseSeeder;
use Modules\AdminUser\Database\Seeders\AdminUserDatabaseSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            AdminActionDatabaseSeeder::class,
            AdminRoleDatabaseSeeder::class,
            AdminUserDatabaseSeeder::class,
            AdminModuleDatabaseSeeder::class,

        ]);
    }
}
