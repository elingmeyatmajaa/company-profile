<?php

namespace Modules\AdminAboutPoint\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Modules\AdminAboutPoint\Entities\AboutPoint;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminAboutPoint\Transformers\AdminAboutPointResource;

class AdminAboutPointController extends Controller
{
    public $componentPath = 'AdminAboutPoint/Resources/assets/js';


    public function rules()
    {
        return [
            'image' => ['nullable'],
            'title' => ['nullable'],
            'body' => ['nullable'],
        ];    
    }
    public function index(Request $request)
    {
        $filters = $request->all(['search', 'take', 'page']);
        $aboutPoints = AboutPoint::where('title','LIKE', "%$request->search%" )
            ->paginate($request->take ?? 10);
        return inertia("$this->componentPath/Index", [
            'aboutPoints' => $aboutPoints,
            'filters' => $filters
        ]);
    }

   
    public function create()
    {
       return inertia("$this->componentPath/Create",
        [
            'referer' => $this->getReferer('admin.about-point.index'),
       ]);
    }

    
    public function store(Request $request)
    {
        $request->validate($this->rules());
        if ($request->file('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        }
        DB::beginTransaction();
        try {
            $aboutPoint = new AboutPoint();
            $aboutPoint->title = $request->title;
            $aboutPoint->body = $request->body;
            $aboutPoint->image = MStorage::store('public', $request->image);
            $aboutPoint->save();
    
            DB::commit();
            return redirect()->route('admin.about-point.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

  
    public function show($id)
    {
        return view('adminaboutpoint::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit(AboutPoint $aboutPoints)
    {

        return inertia("$this->componentPath/Edit", [
            'aboutPoints' => new AdminAboutPointResource($aboutPoints),
            'referer' => $this->getReferer('admin.about-point.index'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, AboutPoint $aboutPoints)
    {
        $request->validate($this->rules());
         if ($request->file('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        }
        DB::beginTransaction();
        try {
            $aboutPoints->update([
                'title' => $request->title,
                'body' => $request->body,
            ]);
           
            if ($request->hasFile('image')) {
                $imagePath = MStorage::store('public', $request->file('image'));
                $aboutPoints->image = $imagePath;
                $aboutPoints->save();
            }
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy(AboutPoint $aboutPoints)
    {
        DB::beginTransaction();
        try {
            $aboutPoints->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
