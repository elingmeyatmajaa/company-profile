<?php

namespace Modules\AdminUser\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Modules\AdminUser\Transformers\AdminUserResource;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class AdminUserController extends Controller
{
    
    public $componentPath = 'AdminUser/Resources/assets/js';
    public function rules($id = null, $insert = true)
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', Rule::unique('users')->ignore($id)],
            'password' => [$insert ? 'required' : 'nullable', 'string', 'min:8'],
            'roles' => ['required', 'array'],
            'roles.*' => ['required', 'integer', Rule::exists(Role::class, 'id')],
        ];
    }

    public function roles($id = null, $insert = true)
    {
        return Role::all();
    }

    public function index(Request $request)
    {
        $request->validate(['take' => 'nullable|integer|min:1|max:100']);
        $users = User::where('name', 'LIKE', "%$request->search%")
            ->orWhere('email', 'LIKE', "%$request->search%")
            ->with(['roles'])
            ->paginate($request->take ?? 10);
        $filters = $request->all(['search', 'take', 'page']);
        return inertia("$this->componentPath/Index", [
            'users' => new AdminUserResource($users),
            'filters' => $filters
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return inertia(
            "$this->componentPath/Create",
            [
                'referer' => $this->getReferer('admin.user.index'),
                'roles' => $this->roles(),
            ]
        );
    }

    
    public function store(Request $request)
    {
        $request->validate($this->rules());
        DB::beginTransaction();
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);
            foreach($request->roles as $role) {
                $user->assignRole($role);
            }
            DB::commit();
            return redirect()->route('admin.user.index');
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
        return view('adminuser::show');
    }

    
    public function edit(User $user)
    {
        return inertia(
            "$this->componentPath/Edit",
            [
                'user' => new AdminUserResource($user->load(['roles'])),
                'referer' => $this->getReferer('admin.user.index'),
                'roles' => $this->roles(),
            ]
        );
    }

   
    public function update(Request $request, User $user)
    {
        $request->validate($this->rules($user->id, false));
        DB::beginTransaction();
        try {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password ? bcrypt($request->password) : $user->password,
            ]);
            $user->syncRoles($request->roles);
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function destroy(User $user)
    {
        DB::beginTransaction();
        try {
            $user->syncRoles([]);
            $user->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
