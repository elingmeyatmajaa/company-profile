<?php

namespace Modules\AdminLandingPage\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminLandingPage\Entities\Introduction;
use Modules\AdminLandingPage\Transformers\AdminLandingPageResource;

class AdminLandingPageController extends Controller
{
    public $componentPath = 'AdminLandingPage/Resources/assets/js';

   
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
        return view('adminlandingpage::index');
    }

    public function showIntroduction() 
    {
        
    }

    public function updateIntroduction(Request $request) {
    
    }


    public function create()
    {
        return view('adminlandingpage::create');
    }

   
    public function store(Request $request)
    {
        //
    }

    
    public function show($id)
    {
        return view('adminlandingpage::show');
    }

    
    public function edit($id)
    {
        return view('adminlandingpage::edit');
    }

    
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }
}
