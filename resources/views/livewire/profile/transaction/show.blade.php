<div>
    <div class="">
        <ul role="tablist" tabindex="0" class="nav nav-tabs">
            <li role="presentation" class="nav-item d-flex align-items-end">
                <a role="tab" tabindex="-1" href="javascript:void(0)" class="nav-link {{ $activeTab === 'trans' ? 'active' : '' }}"
                   wire:click="$set('activeTab', 'trans')">ПОКУПКИ</a>
            </li>
            <li role="presentation" class="nav-item d-flex align-items-end">
                <a role="tab" tabindex="-1" href="javascript:void(0)" class="nav-link {{ $activeTab === 'gifts' ? 'active' : '' }}"
                   wire:click="$set('activeTab', 'gifts')">ПОЛУЧЕННЫЕ ПОДАРКИ</a>
            </li>
            <li role="presentation" class="nav-item d-flex align-items-end">
                <a role="tab" tabindex="-1" href="javascript:void(0)" class="nav-link {{ $activeTab === 'output' ? 'active' : '' }}"
                   wire:click="$set('activeTab', 'output')">ВЫВОД</a>
            </li>
        </ul>
    </div>
    <div class="tab-content">
        @if($activeTab == 'trans')
            <livewire:profile.transaction.transact :user="$user" />
        @elseif($activeTab == 'gifts')
            <livewire:profile.transaction.gifts :user="$user" />
        @else
            <livewire:profile.transaction.output :user="$user" />
        @endif
    </div>
</div>
