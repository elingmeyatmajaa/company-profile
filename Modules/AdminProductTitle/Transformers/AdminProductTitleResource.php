<?php

namespace Modules\AdminProductTitle\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminProductTitleResource extends JsonResource
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
