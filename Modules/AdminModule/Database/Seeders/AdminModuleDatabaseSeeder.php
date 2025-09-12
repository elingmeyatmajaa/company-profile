<?php

namespace Modules\AdminModule\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\AdminModule\Entities\Module;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;
use Modules\AdminAction\Entities\Action;
use Spatie\Permission\Models\Permission;

class AdminModuleDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modules = [
            ['Dashboard', ['read']],
            ['Setting', ['read', 'create', 'update', 'delete']],
            ['Introduction', ['read', 'create', 'update', 'delete']],
            ['About', ['read', 'create', 'update', 'delete']],
            ['About Point', ['read', 'create', 'update', 'delete']],
            ['Category Blog', ['read', 'create', 'update', 'delete']],
            ['Blog Title', ['read', 'create', 'update', 'delete']],
            ['Blog', ['read', 'create', 'update', 'delete']],
            ['Service Title', ['read', 'create', 'update', 'delete']],
            ['Service', ['read', 'create', 'update', 'delete']],
            ['Product Title', ['read',  'create', 'update', 'delete']],
            ['Product', ['read','create', 'update', 'delete']],
            ['Sosial Media', ['read', 'create', 'update', 'delete']],
            ['Action', ['read', 'create', 'update', 'delete']],
            ['Role', ['read', 'create', 'update', 'delete']],
            ['User', ['read', 'create', 'update', 'delete']],
            ['Module', ['read', 'create', 'update', 'delete']],
            ['Page', ['read', 'create', 'update', 'delete']],
            ['Contact', ['read']],

        ];
        $role = Role::first();
        foreach ($modules as $item) {
            $module = Module::create([
                'name' => $item[0],
                'slug' => Str::slug($item[0]),
            ]);
            foreach ($item[1] as $action) {
                $action = Action::where('name', $action)->first();
                $module->actions()->attach($action);
                $permission = Permission::create([
                    'name' => $action->name . '-' . $module->slug
                ]);
                $role->givePermissionTo($permission);
            }
        }
    }
}
