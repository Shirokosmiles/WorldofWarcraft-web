<?php

namespace App\Http\Livewire\Web\Main;

use App\Models\VideoPaneContent as Pane;
use Livewire\Component;

class VideoPaneContent extends Component
{
    public $content;

    public function render()
    {
        $this->content = Pane::orderBy('created_at', 'desc')->limit(1)->first();
        return view('livewire.web.main.video-pane-content');
    }
}
