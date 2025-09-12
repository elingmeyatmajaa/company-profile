<?php

namespace Modules\AdminCategoryBlog\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Modules\AdminCategoryBlog\Entities\CategoryBlog;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminCategoryBlog\Transformers\AdminCategoryBlogResource;

class AdminCategoryBlogController extends Controller
{
   
    public $componentPath = 'AdminCategoryBlog/Resources/assets/js';

    public function rules()
    {
        return [
            'name' => ['nullable'],
            
        ];    
    }

    public function index(Request $request)
    {
        $filters = $request->all(['search', 'take', 'page']);
        $categoryBlogs = CategoryBlog::where('name','LIKE', "%$request->search%" )
            ->paginate($request->take ?? 10);
        return inertia("$this->componentPath/Index", [
            'categoryBlogs' => $categoryBlogs,
            'filters' => $filters
        ]);
    }


    public function create()
    {
        return inertia("$this->componentPath/Create",
         [
             'referer' => $this->getReferer('admin.category-blog.index'),
        ]);
    }

    
    public function store(Request $request)
    {
        $request->validate($this->rules());
        DB::beginTransaction();
        try {
            $categoryBlog = new CategoryBlog();
            $categoryBlog->name = $request->name;
            $categoryBlog->save();
            DB::commit();
            return redirect()->route('admin.category-blog.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    
    public function show($id)
    {
        return view('admincategoryblog::show');
    }

   
    public function edit(CategoryBlog $categoryBlogs)
    {
        return inertia("$this->componentPath/Edit", [
            'categoryBlogs' => new AdminCategoryBlogResource($categoryBlogs),
            'referer' => $this->getReferer('admin.category-blog.index'),
        ]);
    }

   
    public function update(Request $request, CategoryBlog $categoryBlogs)
    {
        $request->validate($this->rules());
        DB::beginTransaction();
        try {
            $categoryBlogs->update([
                'name' => $request->name,
            ]);
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    
    public function destroy(CategoryBlog $categoryBlogs)
    {
        DB::beginTransaction();
        try {
            $categoryBlogs->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
