<?php

namespace Modules\AdminCategoryBlog\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminCategoryBlogResource extends JsonResource
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
