<?php

namespace Modules\AdminProduct\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\AdminProduct\Entities\Product;
use Modules\AdminProduct\Transformers\AdminProductResource;
use App\Http\Controllers\Controller;

class AdminProductController extends Controller
{

    public $componentPath = 'AdminProduct/Resources/assets/js';


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
        $products = Product::where('title', 'LIKE', "%$request->search%")
            ->paginate($request->take ?? 10);
        return inertia("$this->componentPath/Index", [
            'products' => $products,
            'filters' => $filters
        ]);
    }


    public function create()
    {
        return inertia(
            "$this->componentPath/Create",
            [
                'referer' => $this->getReferer('admin.product.index'),
            ]
        );
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
            $product = new Product();
            $product->title = $request->title;
            $product->body = $request->body;
            $product->slug = str()->slug($request->title);
            $product->image = MStorage::store('public', $request->image);

            // if ($request->hasFile('image')) {
            //     $imagePath = $request->file('image')->store('assets', 'public');
            //     $product->image = $imagePath;
            // }

            $product->save();

            DB::commit();
            return redirect()->route('admin.product.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }


    public function show($id)
    {
        return view('adminproduct::show');
    }


    public function edit(Product $product)
    {
        return inertia("$this->componentPath/Edit", [
            'product' => new AdminProductResource($product),
            'referer' => $this->getReferer('admin.product.index'),
        ]);
    }


    public function update(Request $request, Product $product)
    {
        $request->validate($this->rules());
         if ($request->file('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        }
        DB::beginTransaction();
        try {
            $product->update([
                'title' => $request->title,
                'body' => $request->body,
            ]);
           
            if ($request->hasFile('image')) {
                $imagePath = MStorage::store('public', $request->file('image'));
                $product->image = $imagePath;
                $product->save();
            }
            DB::commit();
            return redirect($request->referer);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }


    public function destroy(Product $product)
    {
        DB::beginTransaction();
        try {
            $product->delete();
            DB::commit();
            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }
}
