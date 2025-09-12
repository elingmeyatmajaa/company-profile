<?php

namespace Modules\AdminIntroduction\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Introduction extends Model
{
    use HasFactory;

    protected $fillable = [];
    
    protected $table = 'introductions';
}
