<?php

namespace Modules\AdminServiceTitle\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminService\Transformers\AdminServiceResource;
use Modules\AdminServiceTitle\Entities\ServiceTitle;

class AdminServiceTitleController extends Controller
{
    public $componentPath = 'AdminServiceTitle/Resources/assets/js';

    public function rules()
    {
        return [
            'title' => ['nullable'],
            'body' => ['nullable'],
        ];
    }
    public function index()
    {
        $serviceTitle = ServiceTitle::first() ?? new ServiceTitle();
        return inertia("$this->componentPath/Index", [
            'serviceTitle' => new AdminServiceResource($serviceTitle)
        ]);
    }

   
    public function create()
    {
        return view('adminservicetitle::create');
    }

   
    public function store(Request $request)
    {
        //
    }

   
    public function show($id)
    {
        return view('adminservicetitle::show');
    }

   
    public function edit($id)
    {
        return view('adminservicetitle::edit');
    }

    
    public function update(Request $request)
    {
        $request->validate($this->rules());
       
        DB::beginTransaction();
        try {
            $serviceTitle = ServiceTitle::first() ?? new ServiceTitle();
            $serviceTitle->title = $request->title;
            $serviceTitle->body = $request->body;
            $serviceTitle->save();
            DB::commit();
            return back();
        } catch (\Throwable $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }


    
    public function destroy($id)
    {
        //
    }
}
