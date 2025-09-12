<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Modules\AdminMainSetting\Entities\MainSetting;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'main' => MainSetting::first() ?? new MainSetting(),
            'auth' => [
                'user' => $request->user(),
                'permissions' => $request->user()?->getAllPermissions()->pluck('name'),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'translations' => $this->getTranslation(),
        ]);
    }

    public function getTranslation()
    {
        $locale = app()->getLocale();
        $path = base_path('lang/' . $locale . '.json');
        if (file_exists($path)) {
            $json = file_get_contents($path);
            return json_decode($json, true);
        }
        return [];
    }
}
