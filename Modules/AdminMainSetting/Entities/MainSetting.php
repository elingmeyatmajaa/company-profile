<?php

namespace Modules\AdminMainSetting\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MainSetting extends Model
{
    use HasFactory;

    protected $fillable = [];

    public $tumestamps = false;
    protected $table = 'main_setttings';

}
