<?php

namespace Modules\AdminBlog\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Modules\AdminBlog\Entities\Blog;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminBlog\Entities\BlogTitle;
use Modules\AdminBlog\Transformers\AdminBlogResource;
use Modules\AdminCategoryBlog\Entities\CategoryBlog;

class AdminBlogController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */



     public $componentPath = 'AdminBlog/Resources/assets/js';

    public function index(Request $request)
    {
        $filters = $request->all(['search', 'take', 'page']);
        $blogs= Blog::where('title','LIKE', "%$request->search%" )
            ->paginate($request->take ?? 10);

        return inertia("$this->componentPath/Index", [
            'blogs' => $blogs,
            'filters' => $filters
        ]);
    }

    public function create()
    {
        $category_blog = CategoryBlog::all();
        return inertia("$this->componentPath/Create",
        [
            'blog' => new AdminBlogResource(new Blog()),
            'category_blog' => $category_blog,
            'referer' => $this->getReferer('admin.blog.index'),
       ]);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'image' => 'required',
            'category' => 'required',
            'is_published' => 'required|boolean',
        ]);

        if ($request->file('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        }

        DB::beginTransaction();
        try {
            $blog = new Blog();
            $blog->category_blogs = $request->category;
            $blog->title = $request->title;
            
            $blog->slug = str()->slug(date('Y-m-') . $request->title);
            $blog->body = $request->body;
            $blog->image = MStorage::store('public', $request->image);
            $blog->is_published = $request->is_published;
            $blog->save();
            DB::commit();
            return redirect()->route('admin.blog.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }

    }

    public function show($id)
    {
        return view('adminblog::show');
    }

    public function edit(Blog $blog)
    {
        $category_blog = CategoryBlog::all();
        return inertia("$this->componentPath/Edit", [
            'blog' => new AdminBlogResource($blog),
            'category_blog' => $category_blog,
            'referer' => $this->getReferer('admin.blog.index'),
        ]);
    }

    public function update(Request $request, Blog $blog)
    {
        
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'image' => 'required',
            'category' => 'required',
            'is_published' => 'required|boolean',
        ]);
        // if ($request->file('image')) {
        //     $request->validate([
        //         'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //     ]);
        // }

        

        DB::beginTransaction();
        try {
            $blog->title = $request->title;
            $blog->body = $request->body;

            if ($request->hasFile('image')) {
                $imagePath = MStorage::store('public', $request->file('image'));
                $blog->image = $imagePath;
            }
            $blog->slug = str()->slug(date('Y-m-') . $request->title);
            // $blog->image = MStorage::store('public/landing-page', $request->image);
            $blog->category_blogs = $request->category;
            $blog->is_published = $request->is_published;
            $blog->save();
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }


    public function destroy(Blog $blog)
    {
        DB::beginTransaction();
        try {
            $blog->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

}
