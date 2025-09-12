<?php

namespace Modules\AdminModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Modules\AdminAction\Entities\Action;
use Modules\AdminModule\Entities\Module;
use Modules\AdminModule\Transformers\AdminModuleResource;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;

class AdminModuleController extends Controller
{
    public $componentPath = 'AdminModule/Resources/assets/js';

    public function rules($id = null, $insert = true)
    {
        return [
            'name' => ['required', 'string',  'max:255', Rule::unique('modules')->ignore($id)],
            'actions' => ['required', 'array'],
            'actions.*' => ['required', Rule::exists(Action::class,'id')],
        ];
    }

    public function actions()
    {
        return Action::all();
    }
    public function index(Request $request)
    {
        $request->validate(['take' => 'nullable|integer|min:1|max:100']);
        $modules = Module::where('name', 'LIKE', "%$request->search%")
            ->with(['actions'])
            ->paginate($request->take ?? 10);
        $filters = $request->all(['search', 'take', 'page']);
        return inertia("$this->componentPath/Index", [
            'modules' => new AdminModuleResource($modules),
            'filters' => $filters
        ]);
    }

    public function create()
    {
        return inertia(
            "$this->componentPath/Create",
            [
                'referer' => $this->getReferer('admin.module.index'),
                'actions' => $this->actions(),
            ]
        );
    }
    public function store(Request $request)
    {
        $request->validate($this->rules());
        DB::beginTransaction();
        try {
            $module = Module::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
            ]);
            foreach($request->actions as $action) {
                $module->actions()->attach($action);
            }
            DB::commit();
            return redirect()->route('admin.module.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
    public function edit(Module $module)
    {
        return inertia(
            "$this->componentPath/Edit",
            [
                'module' => new AdminModuleResource($module->load(['actions'])),
                'referer' => $this->getReferer('admin.module.index'),
                'actions' => $this->actions(),
            ]
        );
    }

    public function update(Request $request, Module $module)
    {
        $request->validate($this->rules($module->id, false));
        DB::beginTransaction();
        try {
            $module->update([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
            ]);
            $module->actions()->sync($request->actions);
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function destroy(Module $module)
    {
        DB::beginTransaction();
        try {
            $module->actions()->detach();
            $module->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
