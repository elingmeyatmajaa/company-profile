<?php

namespace Modules\AdminSosialMedia\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SosialMedia extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'name', 'link'];
    
    protected $table = 'media_sosials';
}
