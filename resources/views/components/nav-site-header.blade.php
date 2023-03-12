<nav class="Navbar is-compact is-auto is-custom-logo @auth is-authenticated @endauth"
     role="application"
     data-region="eu"
     data-locale="ru-ru" data-hash="24e1651c3e299a0f87356918edc65ed6ca130e55" data-service-type="l"
     data-service-host="https://navbar.blizzard.com" data-service-version="6.0.10" data-middleware-version="6.0.8"
     data-support-url="https://eu.battle.net/support/update/json?callback=" data-current-site="games"
     aria-label="@lang('header.header_1')">
    @include('navigation.svg-nav')
    <div class="Navbar-overlay" aria-hidden="true"></div>
    <div class="Navbar-container">
        <div class="Navbar-skipLinks" id="skip-link-container" role="presentation">
            <a class="Navbar-skipLink" id="main-skip-link" href="#main">@lang('header.header_2')</a>
            <a class="Navbar-skipLink" id="footer-skip-link" href="#footer">@lang('header.header_3')</a>
        </div>
        <div class="Navbar-mobile">
            <div role="presentation" class="Navbar-mobileOverlay Navbar-overlay"></div>
            <a data-target="Navbar-siteMenu" data-site-mode="true" aria-label="@lang('header.header_4')"
               role="button" tabindex="0" aria-haspopup="true" class="Navbar-menu Navbar-modalToggle is-noSelect">
                <div class="Navbar-icon Navbar-mobileIcon Navbar-siteMenuIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-menu"></use>
                    </svg>
                </div>
            </a>
            <a href="{{ route('home.index') }}" class="Navbar-logo" aria-label="Home" data-analytics="global-nav" data-analytics-placement="Nav - Icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.15 68.46" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-logo-blizzard"></use>
                </svg>
            </a>
            <a href="{{ route('home.index') }}" class="Navbar-customLogo">
                <img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt7d4081e51802d075/5e14fc9a980c937e6d6451f0/ui_nav_wow_yellow_icon.png" alt="" loading="lazy"/>
            </a>
            <div role="presentation" class="Navbar-profileItems">
                <a role="button" aria-haspopup="true" aria-label="Open Secondary Menu" data-target="Navbar-accountModal" tabindex="0" class="Navbar-account Navbar-modalToggle is-noSelect">
                    <div class="Navbar-icon Navbar-mobileIcon Navbar-profileIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-profile"></use>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
        <div class="Navbar-desktop">
            <div role="presentation" class="Navbar-desktopOverlay Navbar-overlay"></div>
            <a href="{{ route('home.index') }}" class="Navbar-logo" aria-label="Home"
               data-analytics="global-nav"
               data-analytics-placement="Nav - Icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.15 68.46" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-logo-blizzard"></use>
                </svg>
            </a>
            <div class="Navbar-collapsedItems is-hidden">
                <a data-target="Navbar-siteMenu" aria-label="Меню" role="button" tabindex="0" aria-haspopup="true" class="Navbar-menu Navbar-item Navbar-link Navbar-modalToggle is-noSelect">
                    <div class="Navbar-icon Navbar-collapsedIcon Navbar-siteMenuIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-menu"></use>
                        </svg>
                    </div>
                    <div class="Navbar-label">@lang('header.header_4')</div>
                </a>
            </div>
            <div class="Navbar-items">
                <a href="{{ route('shop.index') }}" class="Navbar-item Navbar-link is-noSelect Navbar-shop" data-index='1'
                   data-name="shop" tabindex="0" data-analytics="global-nav" data-analytics-placement="Nav -
                   Shop"><div class="Navbar-label">@lang('header.header_5')</div></a>
                <a href="{{ route('web.post.index') }}" class="Navbar-item Navbar-link is-noSelect Navbar-news" data-index='2'
                   data-name="news" tabindex="0" data-analytics="global-nav" data-analytics-placement="Nav -
                   News"><div class="Navbar-label">@lang('header.header_6')</div></a>
                <a href="%SIMPLE_URL%" data-index='0' data-name="simple" data-analytics="global-nav" data-analytics-placement="Nav - %SIMPLE_LABEL%" class="Navbar-item Navbar-link Navbar-simple is-noSelect"><div class="Navbar-label">%SIMPLE_LABEL%</div></a>
            </div>
            <div class="Navbar-profileItems">
                <a href="#" class="Navbar-support Navbar-item Navbar-link is-noSelect" data-index="0"
                   data-name="support" data-analytics="global-nav" data-analytics-placement="Nav - Support">
                    <div class="Navbar-label">@lang('header.header_7')</div>
                    <div class="Navbar-supportCounter">0</div>
                </a>

                <a tabindex="0" data-target="Navbar-accountDropdown" data-name="account" role="button" aria-haspopup="true" aria-label="@lang('header.header_8')" class="Navbar-account Navbar-item Navbar-modalToggle is-noSelect">
                    <div class="Navbar-icon Navbar-employeeIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-blizz"></use>
                        </svg>
                    </div>
                    <div class="Navbar-label Navbar-accountUnauthenticated">@lang('header.header_9')</div>
                    <div class="Navbar-label Navbar-accountAuthenticated">{{ Auth::user()->name ?? '%USER_TAG_FULL%' }}</div>
                    <div class="Navbar-icon Navbar-dropdownIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-dropdown"></use></svg>
                    </div>
                </a>

            </div>
        </div>
    </div>
    <div class="Navbar-modals" role="presentation">
        <template id="Navbar-Dropdowns-Dynamic-Template">
            <div role="presentation" class="Navbar-constrained">
                <div data-toggle="Navbar-account" class="Navbar-modal Navbar-dropdown Navbar-accountDropdown
                is-constrained" role="dialog" aria-label="@lang('header.header_10')">
                    <div class="Navbar-tick">
                        <div class="Navbar-tickInner"></div>
                    </div>
                    <div class="Navbar-modalContent">
                        <div class="Navbar-accountDropdownLoggedOut">
                            <div role="presentation" class="Navbar-modalSection">
                                <a href="{{ route('login') }}" class="Navbar-accountDropdownButtonLink Navbar-button
                                is-full" data-analytics="global-nav" data-analytics-placement="Nav -
                                Account - Log In">@lang('header.header_11')</a>
                            </div>
                            <a href="{{ route('overview') }}" class="Navbar-accountDropdownLink Navbar-accountDropdownSettings" data-analytics="global-nav" data-analytics-placement="Nav - Account - Settings">
                                <div class="Navbar-icon Navbar-accountDropdownLinkIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-settings"></use></svg>
                                </div>
                                <div class="Navbar-accountDropdownLinkLabel">@lang('header.header_12')</div>
                            </a>
                            <a href="{{ route('register') }}" class="Navbar-accountDropdownLink"
                               data-analytics="global-nav" data-analytics-placement="Nav - Account - Create a Free
                               Account"><div class="Navbar-icon Navbar-accountDropdownLinkIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-account-add"></use></svg></div><div class="Navbar-accountDropdownLinkLabel">@lang('header.header_13')</div></a>
                        </div>
                        <div class="Navbar-accountDropdownLoggedIn">
                            <div role="presentation" class="Navbar-modalSection">
                                <div class="Navbar-accountDropdownProfileInfo">
                                    <div class="Navbar-accountDropdownBattleTag">{{ Auth::user()->name ?? '%USER_TAG%' }}</div>
                                    <div class="Navbar-accountDropdownBattleTagNumber"></div>
                                </div>
                                <div class="Navbar-accountDropdownEmail">{{ Auth::user()->email ?? '%USER_EMAIL%' }}</div>
                            </div>
                            <a href="{{ route('overview') }}" class="Navbar-accountDropdownLink
                            Navbar-accountDropdownSettings" data-analytics="global-nav" data-analytics-placement="Nav - Account - Settings">
                                <div class="Navbar-icon Navbar-accountDropdownLinkIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-settings"></use></svg></div>
                                <div class="Navbar-accountDropdownLinkLabel">@lang('header.header_12')</div>
                            </a>
                            <a href="#" class="Navbar-accountDropdownLink
                            Navbar-accountDropdownGifts" data-analytics="global-nav" data-analytics-placement="Nav - Gifts">
                                <div class="Navbar-icon Navbar-accountDropdownLinkIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-gifts"></use></svg>
                                </div>
                                <div class="Navbar-accountDropdownLinkLabel">@lang('header.header_14')</div>
                            </a>
                            <form method="POST" action="{{ route('logout') }}" x-data>
                                @csrf

                                <x-jet-dropdown-link href="{{ route('logout') }}" class="Navbar-accountDropdownLink" data-analytics="global-nav" data-analytics-placement="Nav - Account - Log Out" @click.prevent="$root.submit();">
                                    <div class="Navbar-icon Navbar-accountDropdownLinkIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-logout"></use></svg>
                                    </div>
                                    <div class="Navbar-accountDropdownLinkLabel">@lang('header.header_15')</div>
                                </x-jet-dropdown-link>
                            </form>
                        </div>
                    </div>
                    <a data-target=".Navbar-account.is-active" class="Navbar-modalClose" tabindex="0" role="button"
                       aria-label="@lang('header.header_16')" data-analytics="global-nav">
                        <div class="Navbar-icon Navbar-gameMenuItemIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-close"></use>
                            </svg>
                        </div>
                        <div class="Navbar-gameMenuItemLabel">@lang('header.header_17')</div>
                    </a>
                </div>
            </div>
            <div class="Navbar-modal Navbar-accountModal is-animated is-scroll-blocking" aria-label="Secondary Menu" role="dialog">
                <div class="Navbar-modalContent">
                    <div class="Navbar-mobileModalHeader"></div>
                    <a href="{{ route('home.index') }}" class="Navbar-logo Navbar-mobileModalLogo" aria-label="Home"
                       data-analytics="global-nav" data-analytics-placement="Nav - Icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.15 68.46" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-logo-blizzard"></use></svg>
                    </a>
                    <div class="Navbar-accountDropdownLoggedOut">
                        <div role="presentation" class="Navbar-modalSection">
                            <a href="{{ route('login') }}" class="Navbar-accountDropdownButtonLink
                            Navbar-button
                            is-full" data-analytics="global-nav" data-analytics-placement="Nav - Account - Log In">@lang('header.header_11')</a>
                        </div>
                        <a href="#" class="Navbar-accountDropdownLink Navbar-accountDropdownSupport"
                           data-analytics="global-nav" data-analytics-placement="Nav - Support">
                            <div class="Navbar-icon Navbar-accountDropdownLinkIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-question"></use></svg>
                            </div>
                            <div class="Navbar-accountDropdownLinkLabel">@lang('header.header_7')</div>
                            <div class="Navbar-accountDropdownCounter">0</div>
                        </a>
                        <a href="{{ route('overview') }}" class="Navbar-accountDropdownLink Navbar-accountDropdownSettings"
                           data-analytics="global-nav" data-analytics-placement="Nav - Account - Settings">
                            <div class="Navbar-icon Navbar-accountDropdownLinkIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-settings"></use></svg>
                            </div>
                            <div class="Navbar-accountDropdownLinkLabel">@lang('header.header_12')</div>
                        </a>
                        <a href="{{ route('register') }}" class="Navbar-accountDropdownLink"
                           data-analytics="global-nav"
                           data-analytics-placement="Nav - Account - Create a Free Account">
                            <div class="Navbar-icon Navbar-accountDropdownLinkIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"
                                                                                         focusable="false" aria-hidden="true">
                                    <use xlink:href="#Navbar-icon-account-add"></use>
                                </svg>
                            </div>
                            <div class="Navbar-accountDropdownLinkLabel">@lang('header.header_13')</div>
                        </a>
                    </div>
                    <div class="Navbar-accountDropdownLoggedIn">
                        <div role="presentation" class="Navbar-modalSection">
                            <div class="Navbar-accountDropdownProfileInfo">
                                <div class="Navbar-accountDropdownBattleTag">{{ Auth::user()->name ?? '%USER_TAG%' }}</div>
                                <div class="Navbar-accountDropdownBattleTagNumber"></div>
                            </div>
                            <div class="Navbar-accountDropdownEmail">{{ Auth::user()->email ?? '%USER_EMAIL%' }}</div>
                        </div>
                        <a href="{{ route('overview') }}" class="Navbar-accountDropdownLink Navbar-accountDropdownSettings" data-analytics="global-nav" data-analytics-placement="Nav - Account - Settings"><div class="Navbar-icon Navbar-accountDropdownLinkIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-settings"></use></svg></div><div class="Navbar-accountDropdownLinkLabel">@lang('header.header_12')</div></a>
                        <a href="#" class="Navbar-accountDropdownLink Navbar-accountDropdownGifts" data-analytics="global-nav" data-analytics-placement="Nav - Gifts"><div class="Navbar-icon Navbar-accountDropdownLinkIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-gifts"></use></svg></div><div class="Navbar-accountDropdownLinkLabel">@lang('header.header_14')</div></a>
                        <form method="POST" action="{{ route('logout') }}" x-data>
                            @csrf
                            <x-jet-dropdown-link href="{{ route('logout') }}" class="Navbar-accountDropdownLink" data-analytics="global-nav" data-analytics-placement="Nav - Account - Log Out" @click.prevent="$root.submit();">
                                <div class="Navbar-icon Navbar-accountDropdownLinkIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-logout"></use></svg></div><div class="Navbar-accountDropdownLinkLabel">@lang('header.header_15')</div>
                            </x-jet-dropdown-link>
                        </form>
                    </div>
                    <a href="{{ route('home.index') }}" data-target='{"class":"Navbar-home","data-index":"index","data-name":"home"}' class="Navbar-modalLink is-noSelect" data-analytics="global-nav" data-analytics-placement="Nav - Icon">
                        <div class="Navbar-modalLinkLabel">@lang('header.header_18')</div>
                    </a>
                    <a href="{{ route('shop.index') }}" data-target='{"class":"Navbar-shop","data-index":"index",
                    "data-name":"shop"}' class="Navbar-modalLink is-noSelect" data-analytics="global-nav"
                       data-analytics-placement="Nav - Shop"><div class="Navbar-modalLinkLabel">@lang('header.header_5')</div></a>
                    <a href="{{ route('web.post.index') }}" data-target='{"class":"Navbar-news","data-index":"index",
                    "data-name":"news"}' class="Navbar-modalLink is-noSelect" data-analytics="global-nav"
                       data-analytics-placement="Nav - News"><div class="Navbar-modalLinkLabel">@lang('header.header_6')</div></a>
                    <a data-target=".Navbar-mobileIcon.Navbar-profileIcon" class="Navbar-modalClose" tabindex="0" role="button" aria-label="Закрыть меню" data-analytics="global-nav">
                        <div class="Navbar-icon Navbar-gameMenuItemIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-close"></use></svg>
                        </div>
                        <div class="Navbar-gameMenuItemLabel">@lang('header.header_17')</div>
                    </a>
                </div>
                <div class="Navbar-modalCloseGutter"></div>
            </div>
        </template>
        <div class="Navbar-modal Navbar-siteMenu is-animated is-scroll-blocking" data-compact-mode="true">
            <div class="Navbar-modalContent">
                <div class="BnetNav-mobileSiteMenu">
                    <div class="BnetNav-mobileSiteMenuBody">
                        <div class="BnetNav-mobileSiteMenuLogo">
                            <div class="Logo Logo--wow Logo--wowSitenav"></div>
                        </div>
                        <div class="BnetNav-searchInline">
                            <form action="/search" method="GET">
                                <span class="Icon Icon--searchGold BnetNav-searchIcon"></span>
                                <input class="BnetNav-searchInlineInput" id="searchInlineInput" name="q"
                                       type="search" placeholder="@lang('header.header_19')" autocomplete="off"/>
                            </form>
                        </div>
                        <div class="space-normal"></div>
                        <div class="BnetNav-mobileSiteMenuList List List--vertical List--full">
                            @foreach($menu as $menu_item)
                                @if($menu_item->route)
                                    <div class="BnetNav-mobileSiteMenuListItem List-item">
                                        @if($menu_item->new_menu) <span class="SiteNav-menuListItemSuperscript">Новый</span> @endif
                                        <a class="Link Link--block BnetNav-mobileSiteMenuLink" href="{{ $menu_item->link() }}">
                <span class="BnetNav-mobileSiteMenuLinkText text-upper" data-text="{{ $menu_item->getTranslation('name', App()->getLocale()) }}">
                    {{ $menu_item->getTranslation('name', App()->getLocale()) }}
                </span>
                                        </a>
                                    </div>
                                @else
                                    <div class="BnetNav-mobileSiteMenuListItem List-item">
                                        <a class="Link" data-dropdown="BnetNav-mobileSiteMenu-menuItemDropdown-{{ $menu_item->id }}">
                                            <div class="DropdownLink DropdownLink--gold BnetNav-mobileSiteMenuLink text-upper">
                        <span class="BnetNav-mobileSiteMenuLinkText" data-text="{{ $menu_item->getTranslation('name', App()->getLocale()) }}">
                            {{ $menu_item->getTranslation('name', App()->getLocale()) }}
                        </span>
                                                <span class="BnetNav-mobileDropdownIndicator DropdownLink-indicator"></span>
                                            </div>
                                        </a>
                                        @foreach($menu as $menu_items)
                                            @if(!$menu_items->children->isEmpty())
                                                <div class="Dropdown" name="BnetNav-mobileSiteMenu-menuItemDropdown-{{ $menu_items->id }}" data-dropdown-group="BnetNav-mobileSiteMenuSections">
                                                    <div class="BnetNav-mobileSiteMenuList List List--full List--vertical">
                                                        @foreach($menu_items->children as $menus)
                                                        <div class="BnetNav-mobileSiteMenuListItem List-item">
                                                            <a class="Link" data-dropdown="BnetNav-mobileSiteMenu-category-{{ $menus->id }}">
                                                                <div class="DropdownLink DropdownLink--gold BnetNav-mobileSiteMenuLink">
                                                                    <div class="Pair">
                                                                        <div class="Pair-left">{{ $menus->getTranslation('name', App()->getLocale()) }}</div>
                                                                        <div class="Pair-right">
                                                                            <div class="BnetNav-mobileDropdownIndicator DropdownLink-indicator"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>

                                                            <div class="Dropdown" name="BnetNav-mobileSiteMenu-category-{{ $menus->id }}" data-dropdown-group="BnetNav-mobileSiteMenuSubsections">
                                                                <div class="BnetNav-mobileSiteMenuList List List--full List--vertical">
                                                                    @if(!$menus->children->isEmpty())
                                                                    @foreach($menus->children as $item)
                                                                    <a class="Link Link--block BnetNav-mobileSiteMenuLink" href="{{ $item->link() }}" type="CATEGORY_ITEM" data-analytics="main-nav" data-analytics-placement="Game - Gameplay - Races">{{ $item->getTranslation('name', App()->getLocale()) }}</a>
                                                                    @endforeach
                                                                    @endif
                                                                </div>
                                                            </div>

                                                        </div>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            @endif
                                        @endforeach
                                    </div>
                                @endif
                            @endforeach
                            @guest
                            <div class="BnetNav-mobileSiteMenuListItem List-item" data-test-id="3f056bb1133c182b8785d65f77042b58">
                                <a class="Link Link--block BnetNav-mobileSiteMenuLink" href="{{ route('login') }}"
                                   data-analytics="main-nav" data-analytics-placement="Community - Log In" rel="nofollow">
                                    <span class="BnetNav-mobileSiteMenuLinkText text-upper" data-text="@lang('header.header_22')">
                                        @lang('header.header_22')
                                    </span>
                                </a>
                            </div>
                            <div class="space-normal"></div>
                            <div class="BnetNav-mobileSiteMenuListItem BnetNav-mobileSiteMenuListItem--user List-item align-center" data-test-id="dee9617eb2e140df59d4dcb648c1b1b5">
                                <div class="BnetNav-mobileSiteMenuListItemWrap">
                                    <a class="Link Link--external Link--block
                                    BnetNav-mobileSiteMenuLink BnetNav-mobileSiteMenuLink--signup"
                                       href="{{ route('register') }}">
                                        <span class="BnetNav-mobileSiteMenuLinkText text-upper" data-text="С@lang('header.header_13')">
                                            @lang('header.header_13')
                                        </span>
                                    </a>
                                </div>
                            </div>
                            @endguest
                            <div class="space-normal"></div>
                            @auth
                                <div class="BnetNav-mobileSiteMenuListItem BnetNav-mobileSiteMenuListItem--user List-item">
                                    <div class="BnetNav-mobileSiteMenuListItemWrap">
                                        <a class="Link" data-dropdown="BnetNav-mobileSiteMenuUser">
                                            <div class="DropdownLink DropdownLink--gold BnetNav-mobileSiteMenuLink">
                                                <div class="List">
                                                    <div class="List-item">
                                                        <div class="Avatar Avatar--anon Avatar--goldMedium BnetNav-mobileAvatar">
                                                            <div class="Avatar-image"></div>
                                                        </div>
                                                    </div>
                                                    <div class="List-item">
                                                        <span class="BnetNav-mobileSiteMenuLinkText" data-text="{{ auth()->user()->name }}">{{ auth()->user()->name }}</span>
                                                        <span class="BnetNav-mobileDropdownIndicator DropdownLink-indicator"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="Dropdown" name="BnetNav-mobileSiteMenuUser" data-dropdown-group="BnetNav-mobileSiteMenuSections">
                                        <div class="BnetNav-mobileSiteMenuList List List--full List--vertical">
                                            <div class="BnetNav-mobileSiteMenuListItem List-item">
                                                <div class="BnetNav-mobileSiteMenuList BnetNav-mobileSiteMenuList--noSectionTitle List List--full List--vertical">
                                                    <div class="BnetNav-mobileSiteMenuListItem List-item">
                                                        <form method="POST" action="{{ route('logout') }}" x-data>
                                                            @csrf

                                                            <x-jet-dropdown-link class="Link
                                                            Link--block BnetNav-mobileSiteMenuLink" data-analytics-placement="Community - Log Out" href="{{ route('logout') }}" @click.prevent="$root.submit();">
                                                                @lang('header.header_15')
                                                            </x-jet-dropdown-link>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-normal"></div>
                            @endauth
                        </div>
                    </div>
                </div>
                <div class="Navbar-siteMenuLogo">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.15 68.46" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-logo-blizzard"></use></svg>
                </div>
                <div class="Navbar-modalClose Navbar-icon" data-target=".Navbar-menu.is-active" tabindex="0"
                     role="button" aria-label="@lang('header.header_16')"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-close"></use></svg></div>
            </div>
            <div class="Navbar-modalCloseGutter"></div>
        </div>
        <div class="Navbar-modal Navbar-siteMenu is-animated is-scroll-blocking" data-default-mode="true" data-simple-mode="true">
            <div class="Navbar-modalContent">
                <template id="Navbar-Dropdowns-Dynamic-Mobile-Template">
                    <a href="{{ route('home.index') }}" class="Navbar-logo Navbar-mobileModalLogo" aria-label="Blizzard Home" data-analytics="global-nav" data-analytics-placement="Nav - Icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.15 68.46" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-logo-blizzard"></use></svg></a>
                    <a href="{{ route('home.index') }}" data-target='{"class":"Navbar-home","data-index":"index",
                    "data-name":"home"}' class="Navbar-modalLink is-noSelect" data-analytics="global-nav" data-analytics-placement="Nav - Icon"><div class="Navbar-modalLinkLabel">@lang('header.header_18')</div></a>
                    <a href="#" data-target='{"class":"Navbar-shop","data-index":"index",
                    "data-name":"shop"}' class="Navbar-modalLink is-noSelect" data-analytics="global-nav"
                       data-analytics-placement="Nav - Shop"><div class="Navbar-modalLinkLabel">@lang('header.header_5')</div>
                    </a>
                    <a href="{{ route('web.post.index') }}" data-target='{"class":"Navbar-news","data-index":"index",
                    "data-name":"news"}' class="Navbar-modalLink is-noSelect" data-analytics="global-nav"
                       data-analytics-placement="Nav - News"><div class="Navbar-modalLinkLabel">@lang('header.header_6')</div>
                    </a>
                    <div class="Navbar-corpLinks">
                        <a href="#" data-target='{"data-index":0}' class="Navbar-corpLink
                        is-noSelect" data-analytics="global-nav" data-analytics-placement="Nav - Support">@lang('header.header_7')</a>
                        <a href="{{ route('overview') }}" data-target='{"data-index":1}' class="Navbar-corpLink
                        is-noSelect" data-analytics="global-nav" data-analytics-placement="Nav - Account">@lang('header.header_23')</a>
                        <a href="#" data-target='{"data-index":2}' class="Navbar-corpLink
                        is-noSelect" data-analytics="global-nav" data-analytics-placement="Nav - Gifts">@lang('header.header_14')</a>
                    </div>
                </template>
                <div class="Navbar-modalClose Navbar-icon" data-target=".Navbar-menu.is-active" tabindex="0"
                     role="button" aria-label="@lang('header.header_16')"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-close"></use></svg>
                </div>
            </div>
            <div class="Navbar-modalCloseGutter"></div>
        </div>
    </div>
</nav>
