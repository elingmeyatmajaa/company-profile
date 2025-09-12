<?php

namespace Modules\AdminAction\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Modules\AdminAction\Entities\Action;
use Modules\AdminAction\Transformers\AdminActionResource;
use App\Http\Controllers\Controller;

class AdminActionController extends Controller
{
    public $componentPath = 'AdminAction/Resources/assets/js';

    public function rules($id = null, $insert = true)
    {
        return [
            'name' => ['required', 'string',  'max:255', Rule::unique('actions')->ignore($id)],
        ];
    }
    public function index(Request $request)
    {
        $request->validate(['take' => 'nullable|integer|min:1|max:100']);
        $actions = Action::where('name', 'LIKE', "%$request->search%")
            ->paginate($request->take ?? 10);
        $filters = $request->all(['search', 'take', 'page']);
        return inertia("$this->componentPath/Index", 
        [
            'actions' => new AdminActionResource($actions),
            'filters' => $filters
        ]
    );
    }

    public function create()
    {
        return inertia(
            "$this->componentPath/Create",
            [
                'referer' => $this->getReferer('admin.action.index')
            ]
        );
    }
    public function store(Request $request)
    {
        $request->validate($this->rules());
        DB::beginTransaction();
        try {
            $action = Action::create([
                'name' => $request->name,
            ]);
            DB::commit();
            return redirect()->route('admin.action.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
    public function edit(Action $action)
    {
        return inertia(
            "$this->componentPath/Edit",
            [
                'action' => new AdminActionResource($action),
                'referer' => $this->getReferer('admin.action.index'),
            ]
        );
    }

    public function update(Request $request, Action $action)
    {
        $request->validate($this->rules($action->id, false));
        DB::beginTransaction();
        try {
            $action->update([
                'name' => $request->name,
            ]);
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function destroy(Action $action)
    {
        DB::beginTransaction();
        try {
            $action->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
