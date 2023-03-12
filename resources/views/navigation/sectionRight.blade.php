<div class="SiteNav-menuList List">
    <div class="SiteNav-menuListItem SiteNav-menuListItem--search List-item" data-test-id="02b92ef562fe67d88f8fa09f631fa345">
        <a class="Link Link--block SiteNav-menuListLink SiteNav-searchLink hover-white color-gold-light"
           href="{{ route('search') }}">
            <span class="Icon Icon--wow-search SiteNav-searchOpen">
                <svg class="Icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false"><use xlink:href="/static/components/Icon/svg/wow-search.7c08692a91547c4e3849e39f7dee99f4.svg#wow-search"></use>
                </svg>
            </span>
        </a>
    </div>
    @guest
        <div class="SiteNav-menuListItem List-item" data-test-id="bfd7f05102e49f81dc3e45badd316e7e">
            <a class="Link Link--block SiteNav-menuListLink text-upper" href="{{ route('login') }}"
               data-analytics="main-nav"
               data-analytics-placement="Community - Log In" rel="nofollow">
                <span class="SiteNav-menuListLinkText" data-text="Авторизация">Авторизация</span>
            </a>
        </div>
        <div class="SiteNav-menuListItem SiteNav-menuListItem--subscribe List-item" data-test-id="431ae34ff637d8520b62cc2cd795de52">
            <div class="SiteNav-menuListItemWrap">
                <a class="Link Link--block SiteNav-menuListLink text-upper" href="{{ route('register') }}">
                    <span class="SiteNav-menuListLinkText" data-text="Регистрация">Регистрация</span>
                </a>
            </div>
        </div>
    @else
        <div class="SiteNav-menuListItem SiteNav-menuListItem--subscribe List-item" data-test-id="431ae34ff637d8520b62cc2cd795de52">
            <div class="SiteNav-menuListItemWrap">
                <a class="Link Link--block SiteNav-menuListLink text-upper" data-dropdown="SiteNav-dropdown-tryFreeClarification" queryselectoralways="1">
                    <span class="SiteNav-menuListLinkText" data-text="Начать играть">Начать играть</span>
                </a>
            </div>
        </div>
        <div class="SiteNav-menuListItem SiteNav-menuListItem--user SiteNav-menuListItem--userLoggedIn List-item" data-test-id="2af60ccaec6851cdf2ba4f2108f0efd3"><div class="SiteNav-menuListItemWrap"><div class="List"><div class="List-item"><a class="Link Link--block" href="/"><div class="Avatar Avatar--anon Avatar--goldLarge SiteNav-avatar"><div class="Avatar-image"></div></div></a></div><div class="List-item"><a class="Link SiteNav-menuListLink" data-dropdown="SiteNav-user"><div class="DropdownLink DropdownLink--gold DropdownLink--goldWithHover"><span class="SiteNav-menuListLinkText" data-text="{{ Auth::user()->name}}">{{ Auth::user()->name}}</span><span class="SiteNav-dropdownIndicator DropdownLink-indicator"></span></div></a></div></div></div></div>
    @endguest
</div>
