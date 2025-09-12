<?php

namespace Modules\AdminService\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Modules\AdminService\Entities\Service;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminService\Transformers\AdminServiceResource;

class AdminServiceController extends Controller
{
    public $componentPath = 'AdminService/Resources/assets/js';


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
        $services = Service::where('title','LIKE', "%$request->search%" )
            ->paginate($request->take ?? 10);
        return inertia("$this->componentPath/Index", [
            'services' => $services,
            'filters' => $filters
        ]);
    }


    public function create()
    {
        return inertia("$this->componentPath/Create",
        [
            'referer' => $this->getReferer('admin.service.index'),
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
            $service = new Service();
            $service->title = $request->title;
            $service->body = $request->body;
            $service->slug = str()->slug($request->title);
            $service->image = MStorage::store('public', $request->image);

    
            $service->save();
    
            DB::commit();
            return redirect()->route('admin.service.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

   
    public function show($id)
    {
        return view('adminservice::show');
    }

   
    public function edit(Service $service)
    {
        return inertia("$this->componentPath/Edit", [
            'service' => new AdminServiceResource($service),
            'referer' => $this->getReferer('admin.service.index'),
        ]);
    }

   
    public function update(Request $request, Service $service)
    {
        $request->validate($this->rules());
        if ($request->file('image')) {
           $request->validate([
               'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
           ]);
       }
       DB::beginTransaction();
       try {
           $service->update([
               'title' => $request->title,
               'body' => $request->body,
           ]);
          
           if ($request->hasFile('image')) {
               $imagePath = MStorage::store('public', $request->file('image'));
               $service->image = $imagePath;
               $service->save();
           }
           DB::commit();
           return redirect($request->referer);
       } catch (\Exception $e) {
           return back()->withErrors(['message' => $e->getMessage()]);
       }
    }

   
    public function destroy(Service $service)
    {
        DB::beginTransaction();
        try {
            $service->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
