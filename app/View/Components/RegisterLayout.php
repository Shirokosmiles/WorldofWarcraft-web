<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class RegisterLayout extends Component
{
    /**
     * Get the view / contents that represents the component.
     *
     * @return View
     */
    public function render(): View
    {
        return view('layouts.register');
    }
}
