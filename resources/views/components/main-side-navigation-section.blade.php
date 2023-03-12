<section class="main-side-navigation-section">
    <div class="side-navigation desktop">
        <ul class="nav">
            <li data-v-91f16f3e="">
                <x-nav-link-account data-v-91f16f3e="" href="{{ route('overview') }}" :active="request()->routeIs
                ('overview')">
                    <span data-v-91f16f3e="" class="icon icon-home"></span>
                    <span data-v-91f16f3e="" class="text">@lang('navigation.navigation_1')</span>
                </x-nav-link-account>
            </li>
            <hr>
            <li data-v-91f16f3e="">
                <x-nav-link-account data-v-91f16f3e="" href="{{ route('details') }}" :active="request()->routeIs('details')">
                    <span data-v-91f16f3e="" class="icon icon-user"></span>
                    <span data-v-91f16f3e="" class="text">@lang('navigation.navigation_2')</span>
                </x-nav-link-account>
            </li>
            <hr>
            <li data-v-91f16f3e="">
                <x-nav-link-account data-v-91f16f3e="" href="{{ route('games') }}" :active="request()->routeIs('games')">
                    <span data-v-91f16f3e="" class="icon icon-list"></span>
                    <span data-v-91f16f3e="" class="text">@lang('navigation.navigation_3')</span>
                </x-nav-link-account>
            </li>
            <li data-v-91f16f3e="">
                <x-nav-link-account data-v-91f16f3e="" href="{{ route('vote') }}" :active="request()->routeIs('vote')">
                    <span data-v-91f16f3e="" class="icon icon-external-link"></span>
                    <span data-v-91f16f3e="" class="text">@lang('navigation.navigation_8')</span>
                </x-nav-link-account>
            </li>
            <hr>
            <li data-v-91f16f3e="">
                <x-nav-link-account data-v-91f16f3e="" href="{{ route('security') }}" :active="request()->routeIs('security')">
                    <span data-v-91f16f3e="" class="icon icon-shield"></span>
                    <span data-v-91f16f3e="" class="text">@lang('navigation.navigation_4')</span>
                </x-nav-link-account>
            </li>
            <hr>
            <li data-v-91f16f3e="">
                <x-nav-link-account data-v-91f16f3e="" href="{{ route('payment') }}" :active="request()->routeIs('payment')">
                    <span data-v-91f16f3e="" class="icon icon-credit-card"></span>
                    <span data-v-91f16f3e="" class="text">@lang('navigation.navigation_5')</span>
                </x-nav-link-account>
            </li>
            <li data-v-91f16f3e="">
                <x-nav-link-account data-v-91f16f3e="" href="{{ route('transactions') }}" :active="request()->routeIs
                ('transactions')">
                    <span data-v-91f16f3e="" class="icon icon-shopping-cart"></span>
                    <span data-v-91f16f3e="" class="text">@lang('navigation.navigation_6')</span>
                </x-nav-link-account>
            </li>
            <hr>
            <li data-v-91f16f3e="">
                <a data-v-91f16f3e="" href="#" target="_blank" rel="noopener">
                    <span data-v-91f16f3e="" class="icon icon-external-link"></span>
                    <span data-v-91f16f3e="" class="text external-link">@lang('navigation.navigation_7')</span>
                </a>
            </li>
            <hr>
        </ul>
    </div>
</section>
