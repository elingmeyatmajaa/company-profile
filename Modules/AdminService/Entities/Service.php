<?php

namespace Modules\AdminService\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'title', 'body'];
    protected $table = 'services';
    
}
