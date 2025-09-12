<?php

namespace Modules\AdminMainSetting\Http\Controllers;

use App\Helpers\MStorage;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\AdminMainSetting\Entities\MainSetting;
use Modules\AdminMainSetting\Transformers\AdminMainSettingResource;

class AdminMainSettingController extends Controller
{
    
    public $componentPath = 'AdminMainSetting/Resources/assets/js';

    
    public function rules()
    {
        return [
            'logo' => ['nullable'],
            'favicon' => ['nullable'],
            'title' => ['nullable'],
            'meta_description' => ['nullable'],
            'meta_keywords' => ['nullable'],
        ];    
    }
    
    public function index()
    {
        
        $mainSetting = MainSetting::first() ?? new MainSetting();
        
        return inertia("$this->componentPath/Index", [
            'mainSetting' => new AdminMainSettingResource($mainSetting)
        ]);
    }

  
    public function update(Request $request)
    {
        $request->validate($this->rules());
        if ($request->file('logo')) {
            $request->validate([
                'logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        }
        DB::beginTransaction();
        try {
            $mainSetting = MainSetting::first() ?? new MainSetting();
            $mainSetting->logo = MStorage::store('public', $request->logo);
            $mainSetting->favicon = MStorage::store('public', $request->favicon);
            $mainSetting->title = $request->title;
            $mainSetting->meta_description = $request->meta_description;
            $mainSetting->meta_keywords = $request->meta_keywords;
            $mainSetting->save();
            DB::commit();
            return back();
        } catch (\Throwable $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    
}
