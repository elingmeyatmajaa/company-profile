<?php

namespace Modules\AdminModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\AdminAction\Entities\Action;

class Module extends Model
{
    use HasFactory;

    protected $guarded;
    public $timestamps = false;

    public function actions()
    {
        return $this->belongsToMany(Action::class, 'module_actions', 'module_id', 'action_id');
    }
}
