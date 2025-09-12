<?php

namespace Modules\AdminAbout\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminAbout\Entities\About;
use Modules\AdminAbout\Transformers\AdminAboutResource;

class AdminAboutController extends Controller
{
   
    public $componentPath = 'AdminAbout/Resources/assets/js';

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
        $about = About::first() ?? new About();
       return inertia("$this->componentPath/Index", [
            'about' => new AdminAboutResource($about)
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
            $about = About::first() ?? new About();
            $about->image = MStorage::store('public', $request->image);
            $about->title = $request->title;
            $about->body = $request->body;
            $about->save();
            DB::commit();
            return back();
        } catch (\Throwable $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }


   

    public function create()
    {
        return view('adminabout::create');
    }

    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        return view('adminabout::show');
    }

 
    public function edit($id)
    {
        return view('adminabout::edit');
    }


   


    public function destroy($id)
    {
        //
    }
}
