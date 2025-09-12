<?php

namespace Modules\AdminBlog\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\AdminCategoryBlog\Entities\CategoryBlog;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [];
   
    public function categoryBlog()
    {
        return $this->belongsTo(CategoryBlog::class, 'category_blogs');
    }
}
