<?php

namespace Modules\AdminAbout\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class About extends Model
{
    use HasFactory;

    protected $fillable = [];
    
    protected $table = 'abouts';
}
