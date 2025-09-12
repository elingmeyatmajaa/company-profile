<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function getReferer($forceTo)
    {
        $referer = request()->headers->get('referer');
        if($referer == request()->url() || $referer == null){
            return route($forceTo);
        }
        return request()->headers->get('referer');
    }
}
