<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class MStorage
{
    public static function getDisk()
    {
        $filesystemDisk = env('FILESYSTEM_DISK');
        if ($filesystemDisk == 's3') {
            return 's3';
        }
        else {
            return 'public';
        }
    }

    public static function store($path, $file)
    {
        if (!is_file($file)) {
            return $file;
        }
        $file = Storage::put($path . "/" . date('Y-m'), $file, self::getDisk());
        return Storage::url($file, self::getDisk());
    }

    public static function url($path)
    {
        return Storage::url($path, self::getDisk());
    }
}
