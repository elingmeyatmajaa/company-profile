<?php

namespace Modules\AdminAboutPoint\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AboutPoint extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'title', 'body'];

    protected $table = 'about_points';

}
