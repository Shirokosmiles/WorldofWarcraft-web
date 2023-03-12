<nav class="SiteNav" role="navigation" aria-label="Main">
    <div class="Sticky SiteNav-sticky">
        <div class="Sticky-content">
            <div class="SiteNav-area">
                <div class="SiteNav-bar">
                    <div class="SiteNav-menu">
                        <a class="Link Link--block SiteNav-logo" href="{{ route('home.index') }}" data-analytics="main-nav"
                           data-analytics-placement="Logo">
                            <div class="Logo Logo--wow Logo--wowSitenav SiteNav-logo-full position-absolute"></div>
                            <div class="Logo Logo--wowIcon SiteNav-logo-icon"></div>
                        </a>
                        <div class="SiteNav-sectionLeft">
                            @include('navigation.sectionLeft')
                        </div>
                        <div class="SiteNav-sectionRight">
                            @include('navigation.sectionRight')
                        </div>
                    </div>
                </div>
                @include('navigation.webDropdown')
                @auth
                @include('navigation.characterDropdown')
                @include('navigation.tryFreeClarification')
                @endauth
            </div>
        </div>
    </div>
</nav>
