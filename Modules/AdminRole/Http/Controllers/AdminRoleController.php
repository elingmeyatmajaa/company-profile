<?php

namespace Modules\AdminRole\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Modules\AdminModule\Entities\Module;
use Modules\AdminRole\Transformers\AdminRoleResource;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class AdminRoleController extends Controller
{
    public $componentPath = 'AdminRole/Resources/assets/js';

    public function rules($id = null, $insert = true)
    {
        return [
            'name' => ['required', 'string',  'max:255', Rule::unique('roles')->ignore($id)],
            'permissions' => ['nullable', 'array'],
        ];
    }

    public function modules()
    {
        return Module::with(['actions'])->get();
    }

    public function index(Request $request)
    {
        $request->validate(['take' => 'nullable|integer|min:1|max:100']);
        $roles = Role::where('name', 'LIKE', "%$request->search%")
            ->paginate($request->take ?? 10);
        $filters = $request->all(['search', 'take', 'page']);
        return inertia("$this->componentPath/Index", [
            'roles' => new AdminRoleResource($roles),
            'filters' => $filters
        ]);
    }


    public function create()
    {
        return inertia(
            "$this->componentPath/Create",
            [
                'referer' => $this->getReferer('admin.role.index'),
                'modules' => $this->modules(),
            ]
        );
    }

  
    public function store(Request $request)
    {
        $request->validate($this->rules());
        DB::beginTransaction();
        try {
            $role = Role::create([
                'name' => $request->name,
            ]);
            foreach($request->permissions as $item) {
                $permission = Permission::where('name',$item)->first();
                if(!$permission){
                    $permission = Permission::create(['name' => $item]);
                }
                $role->givePermissionTo($permission);
            }
            DB::commit();
            return redirect()->route('admin.role.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('adminrole::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit(Role $role)
    {
        return inertia(
            "$this->componentPath/Edit",
            [
                'role' => new AdminRoleResource($role->load(['permissions'])),
                'referer' => $this->getReferer('admin.role.index'),
                'modules' => $this->modules(),
            ]
        );
    }

  
    public function update(Request $request, Role $role)
    {
        $request->validate($this->rules($role->id, false));
        DB::beginTransaction();
        try {
            $role->update([
                'name' => $request->name,
            ]);
            $role->permissions()->detach();
            foreach($request->permissions as $item) {
                $permission = Permission::where('name',$item)->first();
                if(!$permission){
                    $permission = Permission::create(['name' => $item]);
                }
                $role->givePermissionTo($permission);
            }
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

   
    public function destroy(Role $role)
    {
        DB::beginTransaction();
        try {
            $role->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
