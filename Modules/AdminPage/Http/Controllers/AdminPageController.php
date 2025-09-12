<?php

namespace Modules\AdminPage\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminPage\Entities\Page;
use Modules\AdminPage\Transformers\AdminPageResource;
use Illuminate\Support\Str;

class AdminPageController extends Controller
{

    public $componentPath = 'AdminPage/Resources/assets/js';
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
        $pages = Page::where('title', 'LIKE', "%$request->search%")
            ->paginate($request->take ?? 10);
        return inertia(
            "$this->componentPath/Index",
            [
                'pages' => new AdminPageResource($pages),
                'filters' => $filters
            ]
        );
    }

    public function create()
    {
        return inertia(
            "$this->componentPath/Create",
            [
                'page' => new AdminPageResource(new Page()),

                'referer' => $this->getReferer('admin.page.index')
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'body' => 'required|string',
            'is_published' => 'required|boolean',
        ]);
        DB::beginTransaction();
        try {
            $page = new Page();
            $page->title = $request->title;
            $page->description = $request->description;
            $page->body = $request->body;
            $page->slug = str()->slug($request->title);
            $page->is_published = $request->is_published;
            $page->save();
            DB::commit();
            return redirect()->route('admin.page.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }


    public function show($id)
    {
        return view('adminpage::show');
    }

    public function slug($slug)
    {
        $page =  Page::where('slug', $slug)
                ->first();
       
        return inertia("$this->componentPath/Slug",[
            'page' => new AdminPageResource($page),
        ]);
    }


    public function edit(Page $page)
    {
        return inertia(
            "$this->componentPath/Edit",
            [
                'page' => new AdminPageResource($page),
                'referer' => $this->getReferer('admin.page.index'),
            ]
        );
    }

    public function update(Request $request, Page $page)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'body' => 'required|string',
            'is_published' => 'required|boolean',
        ]);
        DB::beginTransaction();
        try {
            // $page->update([
            //     'title' => $request->title,
            //     'description' => $request->description,
            //     'body' => $request->body,
            //     'slug' => str()->slug($request->title),
            //     'is_published' => $request->is_published,
            // ]);
            $page->title = $request->title;
            $page->body = $request->body;
            $page->slug = str()->slug($request->title);
            $page->description = $request->description;
            $page->is_published = $request->is_published;
            $page->save();
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }


    public function destroy(Page $page)
    {
        DB::beginTransaction();
        try {
            $page->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
