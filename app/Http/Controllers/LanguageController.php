<?php

namespace App\Http\Controllers;

class LanguageController extends Controller
{
    protected $previousRequest;
    protected $locale;

    public function switch($lang)
    {
        $this->previousRequest = $this->getPreviousRequest();
        $this->locale = $lang;
        $segments = $this->previousRequest->segments();
        if (array_key_exists($this->locale, config('app.locales'))) {
            $segments[0] = $this->locale;
            session(['language' => $this->locale]);
            $newRoute = $this->translateRouteSegments($segments);
            return redirect()->to($this->buildNewRoute($newRoute));
        }
        return back();
    }

    protected function getPreviousRequest()
    {
        return request()->create(url()->previous());
    }

    protected function translateRouteSegments($segments)
    {
        $translatedSegments = collect();
        foreach ($segments as $segment) {
            $translatedSegments->push($segment);
        }
        return $translatedSegments;
    }

    protected function buildNewRoute($newRoute)
    {
        $redirectUrl = implode('/', $newRoute->toArray());
        $queryBag = $this->previousRequest->query();
        $redirectUrl .= count($queryBag) ? '?' . http_build_query($queryBag) : '';
        return $redirectUrl;
    }
}
