<?php

namespace Modules\AdminSosialMedia\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminSosialMediaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
