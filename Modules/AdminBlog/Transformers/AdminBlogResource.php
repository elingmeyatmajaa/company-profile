<?php

namespace Modules\AdminBlog\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminBlogResource extends JsonResource
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
