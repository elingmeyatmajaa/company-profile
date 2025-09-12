<?php

namespace Modules\AdminProductTitle\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminProductTitle\Entities\ProductTitle;
use Modules\AdminProductTitle\Transformers\AdminProductTitleResource;

class AdminProductTitleController extends Controller
{
    public $componentPath = 'AdminProductTitle/Resources/assets/js';

    public function rules()
    {
        return [
            'title' => ['nullable'],
            'body' => ['nullable'],
        ];
    }

    public function index()
    {
         $productTitle = ProductTitle::first() ?? new ProductTitle();
        return inertia("$this->componentPath/Index", [
            'productTitle' => new AdminProductTitleResource($productTitle)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('adminproducttitle::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('adminproducttitle::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('adminproducttitle::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request)
    {
        $request->validate($this->rules());
       
        DB::beginTransaction();
        try {
            $productTitle = ProductTitle::first() ?? new ProductTitle();
            $productTitle->title = $request->title;
            $productTitle->body = $request->body;
            $productTitle->save();
            DB::commit();
            return back();
        } catch (\Throwable $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
