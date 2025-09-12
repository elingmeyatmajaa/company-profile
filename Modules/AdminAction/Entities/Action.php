<?php

namespace Modules\AdminAction\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Action extends Model
{
    use HasFactory;

    protected $guarded;
    public $timestamps = false;

}
