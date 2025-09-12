<?php

namespace Modules\AdminService\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminServiceResource extends JsonResource
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
