<?php

namespace Modules\AdminAction\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\AdminAction\Entities\Action;

class AdminActionDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        Action::create(['name' => 'read']);
        Action::create(['name' => 'create']);
        Action::create(['name' => 'update']);
        Action::create(['name' => 'delete']);
    }
}
