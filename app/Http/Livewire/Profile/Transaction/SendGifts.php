<?php

namespace App\Http\Livewire\Profile\Transaction;

use App\Services\Soap;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Livewire\Component;
use Livewire\Redirector;

class SendGifts extends Component
{
    public $item;

    public $confirmGiftSend = false;

    public function mount($item)
    {
        $this->item = $item;
    }

    public function confirmGiftSend()
    {
        $this->resetErrorBag();

        $this->confirmGiftSend = true;
    }

    public function send(): RedirectResponse|Redirector
    {
        $characters = DB::connection('characters')->table('characters')->where('guid', auth()->user()->activeCharacters )->first();

        $soap = new Soap();
        $soap->cmd('.send items '. $characters->name .' "'.$this->item->title.'" "Награда за акцию: Пригласи друга." '. $this->item->item .'[:'.$this->item->countItem.']');
        $this->item->update([
            'status' => 1
        ]);
    }

    public function render()
    {
        return view('livewire.profile.transaction.send-gifts');
    }
}
