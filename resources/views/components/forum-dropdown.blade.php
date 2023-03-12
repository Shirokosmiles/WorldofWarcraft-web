<div class="panel clearfix">
    <span class="header-buttons"></span>
    <ul class="icons d-header-icons">
    <li class="header-dropdown-toggle search-dropdown">
        <a aria-expanded="false" aria-haspopup="true" href="/ru/overwatch/search" data-auto-route="true" title="Поиск" aria-label="Поиск" id="search-button" class="icon btn-flat"><svg class="fa d-icon d-icon-search svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-search"></use></svg></a>
    </li>
    </ul>
    @auth
    <div>
        <livewire:forum.comment-notifications />
    </div>
    @endauth
</div>
