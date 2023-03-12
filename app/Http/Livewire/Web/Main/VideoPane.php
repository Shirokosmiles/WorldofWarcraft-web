<?php

namespace App\Http\Livewire\Web\Main;

use Livewire\Component;
use App\Models\VideoPane as Pane;

class VideoPane extends Component
{
    public $content;

    public function render()
    {
        $this->content = Pane::orderBy('created_at', 'desc')->limit(1)->first();
        return view('livewire.web.main.video-pane');
    }
}
