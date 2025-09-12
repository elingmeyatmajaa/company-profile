<?php

namespace Modules\LandingPage\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Modules\AdminAbout\Entities\About;
use Modules\AdminAboutPoint\Entities\AboutPoint;
use Modules\AdminBlog\Entities\Blog;
use Modules\AdminBlogTitle\Entities\BlogTitle;
use Modules\AdminIntroduction\Entities\Introduction;
use Modules\AdminMainSetting\Entities\MainSetting;
use Modules\AdminPage\Entities\Page;
use Modules\AdminPage\Transformers\AdminPageResource;
use Modules\AdminProduct\Entities\Product;
use Modules\AdminProductTitle\Entities\ProductTitle;
use Modules\AdminService\Entities\Service;
use Modules\AdminServiceTitle\Entities\ServiceTitle;
use Modules\AdminSosialMedia\Entities\SosialMedia;
use Modules\LandingPage\Emails\ContactMessageMail;
use Modules\LandingPage\Entities\Contact;

class LandingPageController extends Controller
{
    public $componentPath = 'LandingPage/Resources/assets/js';

    public function index()
    {
        $mainSetting = MainSetting::first() ?? new MainSetting();
        $introduction = Introduction::first() ?? new Introduction();
        $about = About::first() ?? new About();
        $aboutPoints = AboutPoint::all();
        $blogTitles = BlogTitle::first() ?? new BlogTitle();
        $blogs = Blog::select('*', DB::raw("CONCAT(SUBSTRING(body, 1, 130), IF(LENGTH(body) > 150, '...', '')) AS body"))
            ->where('is_published', true)
            ->paginate(2);
        $serviceTitles = ServiceTitle::first() ?? new ServiceTitle();

        $services = Service::all();
        $productTitles = ProductTitle::first() ?? new ProductTitle();
        // $products = Product::all();
        $products = Product::select('*', DB::raw("CONCAT(SUBSTRING(body, 1, 130), IF(LENGTH(body) > 150, '...', '')) AS body"))
            ->paginate(2);
        $sosialMedias = SosialMedia::all();

        return inertia("$this->componentPath/Index", [
            'mainSetting' => $mainSetting,
            'introduction' => $introduction,
            'about' => $about,
            'aboutPoints' => $aboutPoints,
            'blogTitles' => $blogTitles,
            'blogs'   => $blogs,
            'serviceTitles' => $serviceTitles,
            'services' => $services,
            'productTitles' => $productTitles,
            'products' => $products,
            'sosialMedias' => $sosialMedias
        ]);
    }


    public function blogDetail($slug)
    {
        $blog = Blog::where('slug', $slug)
            ->where('is_published', true)
            ->with('categoryBlog')
            ->first();
        if (!$blog) {
            abort(404);
        }
        $categoryName = $blog->categoryBlog->name;

        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();
        $otherBlogs = Blog::where('id', '!=', $blog->id)
            ->select('title', 'image', 'slug', 'created_at')
            ->take(4)
            ->where('is_published', true)
            ->get();


        return inertia("$this->componentPath/BlogDetail", [
            'blog' => $blog,
            'categoryName' => $categoryName,
            'otherBlogs' => $otherBlogs,
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting
        ]);
    }


    public function blog()
    {
        $blogs = Blog::where('is_published', true)
            ->select('*', DB::raw('substr(body, 1, 350) as  body'))
            ->paginate(12);

        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();

        return inertia("$this->componentPath/Blog", [
            'blogs' => $blogs,
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting
        ]);
    }


    public function contact()
    {
       
        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();

        return inertia("$this->componentPath/Contact", [
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting
        ]);
    }


    public function product()
    {
        $products = Product::select('*', DB::raw('substr(body, 1, 350) as  body'))
            ->paginate(10);
        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();
        $productTitles = ProductTitle::first() ?? new ProductTitle();

        return inertia("$this->componentPath/Product", [
            'products' => $products,
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting,
            'productTitles' => $productTitles
        ]);
    }

    public function productDetail($slug)
    {



        $product = Product::where('slug', $slug)
            ->first();
        if (!$product) {
            abort(404);
        }
        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();


        return inertia("$this->componentPath/ProductDetail", [
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting,
            'product' => $product
        ]);
    }

    public function service()
    {
        $services = Service::select('*', DB::raw('substr(body, 1, 350) as  body'))
            ->paginate(4);
        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();
        $serviceTitles = ServiceTitle::first() ?? new ServiceTitle();

        return inertia("$this->componentPath/Service", [
            'services' => $services,
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting,
            'serviceTitles' => $serviceTitles
        ]);
    }


    public function serviceDetail($slug)
    {
        $service = Service::where('slug', $slug)
            ->first();
        if (!$service) {
            abort(404);
        }
        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();


        return inertia("$this->componentPath/ServiceDetail", [
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting,
            'service' => $service
        ]);
    }


    



    public function create()
    {
        return view('landingpage::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
       $data = $request->validate([
            'first_name'   => 'required|string|max:100',
            'last_name'    => 'nullable|string|max:100',
            'email'        => 'required|email',
            'phone_number' => 'nullable|string|max:20',
            'message'      => 'required|string',
        ]);

        Contact::create($data);
    Mail::to('inbox@mailtrap.io')->send(new ContactMessageMail($data));

        return redirect()->back()->with('success', 'Pesan berhasil dikirim!');
    }


    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('landingpage::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('landingpage::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
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

    public function slug($slug)
    {
        $page =  Page::where('slug', $slug)
            ->first();
        $sosialMedias = SosialMedia::get()->toArray();
        $mainSetting = MainSetting::first() ?? new MainSetting();

        return inertia("$this->componentPath/Slug", [
            'page' => $page,
            'sosialMedias' => $sosialMedias,
            'mainSetting' => $mainSetting
        ]);
    }
}
