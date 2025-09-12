<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Modules\AdminAction\Entities\Action;

class ActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        //

        Action::create(['name' => 'read']);
        Action::create(['name' => 'create']);
        Action::create(['name' => 'update']);
        Action::create(['name' => 'delete']);
      
    }
}
