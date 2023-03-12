<ul id="navigation-bar" class="nav nav-pills ember-view">
    <x-nav-link-forums-index href="{{ route('idea.index') }}" :active="request()->routeIs('idea.index')">
        <!---->   Категории
    </x-nav-link-forums-index>

    <x-nav-link-forums-index href="{{ route('forums.top') }}" :active="request()->routeIs('forums.top')">
        <!---->   Популярные
    </x-nav-link-forums-index>

    <x-nav-link-forums-index href="{{ route('forums.postsDev') }}" :active="request()->routeIs('forums.postsDev')">
        <!---->   Dev Tracker
    </x-nav-link-forums-index>

    <li id="ember51" class="ember-view"></li>
</ul>
