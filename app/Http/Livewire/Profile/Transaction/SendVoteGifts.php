<?php

namespace App\Http\Livewire\Profile\Transaction;

use Livewire\Component;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Livewire\Redirector;

class SendVoteGifts extends Component
{
    public $item;

    public function mount($item)
    {
        $this->item = $item;
    }

    public function send(): RedirectResponse|Redirector
    {
       /// AccountDonate::updateOrCreate([
        ///    'id' => auth()->id(),
       /// ],[
       ///     'votes' => DB::raw('votes + ' . $this->item->countItem)
       /// ]);

        $this->item->update([
            'status' => 1
        ]);

        return redirect()->route('profile.transactions');
    }

    public function render()
    {
        return view('livewire.profile.transaction.send-vote-gifts');
    }
}
