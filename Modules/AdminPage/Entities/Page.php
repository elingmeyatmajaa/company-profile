<?php

namespace Modules\AdminPage\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Page extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'body', 'slug    ', 'is_published'];
    protected $table = 'pages';

   
}
