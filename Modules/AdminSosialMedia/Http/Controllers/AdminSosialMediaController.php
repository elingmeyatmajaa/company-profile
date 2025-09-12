<?php

namespace Modules\AdminSosialMedia\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\AdminSosialMedia\Entities\SosialMedia;
use Modules\AdminSosialMedia\Transformers\AdminSosialMediaResource;
use App\Http\Controllers\Controller;

class AdminSosialMediaController extends Controller
{
    public $componentPath = 'AdminSosialMedia/Resources/assets/js';


    public function rules()
    {
        return [
            'name' => ['nullable'],
            'link' => ['nullable'],
            'image' => ['nullable'],
        ];    
    }
    public function index(Request $request)
    {
        $filters = $request->all(['search', 'take', 'page']);
        $sosialMedias = SosialMedia::where('name','LIKE', "%$request->search%" )
            ->paginate($request->take ?? 10);
        return inertia("$this->componentPath/Index", [
            'sosialMedias' => $sosialMedias,
            'filters' => $filters
        ]);
    }

   
    public function create()
    {
       return inertia("$this->componentPath/Create",
        [
            'referer' => $this->getReferer('admin.sosial-media.index'),
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
            $sosialMedia = new SosialMedia();
            $sosialMedia->name = $request->name;
            $sosialMedia->link = $request->link;
            $sosialMedia->image = MStorage::store('public', $request->image);
            $sosialMedia->save();
    
            DB::commit();
            return redirect()->route('admin.sosial-media.index');
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
    public function edit(SosialMedia $sosialMedias)
    {

        return inertia("$this->componentPath/Edit", [
            'sosialMedias' => new AdminSosialMediaResource($sosialMedias),
            'referer' => $this->getReferer('admin.sosial-media.index'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, SosialMedia $sosialMedias)
    {
        $request->validate($this->rules());
         if ($request->file('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        }
        DB::beginTransaction();
        try {
            $sosialMedias->update([
                'name' => $request->name,
                'link' => $request->link,
            ]);
           
            if ($request->hasFile('image')) {
                $imagePath = MStorage::store('public', $request->file('image'));
                $sosialMedias->image = $imagePath;
                $sosialMedias->save();
            }
            DB::commit();
            return redirect()->route('admin.sosial-media.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy(SosialMedia $sosialMedias)
    {
        DB::beginTransaction();
        try {
            $sosialMedias->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
