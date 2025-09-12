<?php

namespace Modules\AdminBlogTitle\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminBlogTitle\Entities\BlogTitle;
use Modules\AdminBlogTitle\Transformers\AdminBlogTitleResource;

class AdminBlogTitleController extends Controller
{
    public $componentPath = 'AdminBlogTitle/Resources/assets/js';

    public function rules()
    {
        return [
            'title' => ['nullable'],
            'body' => ['nullable'],
        ];
    }
    public function index()
    {
        $blogTitle = BlogTitle::first() ?? new BlogTitle();
        return inertia("$this->componentPath/Index", [
            'blogTitle' => new AdminBlogTitleResource($blogTitle)
        ]);
    }

   
    public function create()
    {
        return view('adminblogtitle::create');
    }

    
    public function store(Request $request)
    {
        //
    }

   
    public function show($id)
    {
        return view('adminblogtitle::show');
    }

   
    public function edit($id)
    {
        return view('adminblogtitle::edit');
    }

   
    public function update(Request $request)
    {
        $request->validate($this->rules());
       
        DB::beginTransaction();
        try {
            $blogTitle = BlogTitle::first() ?? new BlogTitle();
            $blogTitle->title = $request->title;
            $blogTitle->body = $request->body;
            $blogTitle->save();
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
