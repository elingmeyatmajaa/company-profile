<?php

namespace Modules\AdminCategoryBlog\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoryBlog extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

   
}
