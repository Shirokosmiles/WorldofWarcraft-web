<div class="Dropdown SiteNav-doormat SiteNav-characterDropdown" name="SiteNav-user">
    <div class="SiteNav-doormatContent">
        <div class="List List--vertical List--right">
            <div class="List-item">
                <form method="POST" action="{{ route('logout') }}" x-data>
                    @csrf

                    <x-jet-dropdown-link class="SiteNav-pageLink" data-analytics="main-nav"
                                         data-analytics-placement="Community - Log Out" href="{{ route('logout') }}"
                                         @click.prevent="$root.submit();">
                        Выход
                    </x-jet-dropdown-link>
                </form>
            </div>
        </div>
    </div>
</div>
