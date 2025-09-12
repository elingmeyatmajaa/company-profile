<?php

namespace Modules\AdminIntroduction\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminIntroduction\Entities\Introduction;
use Modules\AdminIntroduction\Transformers\AdminIntroductionResource;

class AdminIntroductionController extends Controller
{
    public $componentPath = 'AdminIntroduction/Resources/assets/js';

    public function rules()
    {
        return [
            'image' => ['nullable'],
            'title' => ['nullable'],
            'body' => ['nullable'],
        ];    
    }

    public function index()
    {
        $introduction = Introduction::first() ?? new Introduction();
        return inertia("$this->componentPath/Index", [
            'introduction' => new AdminIntroductionResource($introduction)
        ]);
    }

    public function update(Request $request)
    {
        $request->validate($this->rules());
        if ($request->file('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        }
        DB::beginTransaction();
        try {
            $introduction = Introduction::first() ?? new Introduction();
            $introduction->image = MStorage::store('public', $request->image);
            $introduction->title = $request->title;
            $introduction->body = $request->body;
            $introduction->save();
            DB::commit();
            return back();
        } catch (\Throwable $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('adminintroduction::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('adminintroduction::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('adminintroduction::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
   

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
