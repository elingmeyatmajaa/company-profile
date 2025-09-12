<?php

namespace Modules\AdminIntroduction\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminIntroductionResource extends JsonResource
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
