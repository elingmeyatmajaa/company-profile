<?php

namespace Modules\AdminContact\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\LandingPage\Entities\Contact;

class AdminContactController extends Controller
{
   public $componentPath = 'AdminContact/Resources/assets/js';


    public function rules()
    {
        return [
           'first_name'   => 'required|string|max:100',
            'last_name'    => 'nullable|string|max:100',
            'email'        => 'required|email',
            'phone_number' => 'nullable|string|max:20',
            'message'      => 'required|string',
        ];    
    }
    public function index(Request $request)
    {
        $filters = $request->all(['search', 'take', 'page']);
        $contacts = Contact::where('first_name','LIKE', "%$request->search%" )
            ->paginate($request->take ?? 10);
        return inertia("$this->componentPath/Index", [
            'contacts' => $contacts,
            'filters' => $filters
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('admincontact::create');
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
        return view('admincontact::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('admincontact::edit');
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
}
