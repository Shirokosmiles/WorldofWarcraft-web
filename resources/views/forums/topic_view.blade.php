<x-forum-layout>

    <x-slot name="body">
        drop-down-mode archetype-regular category category-{{ $idea->title }}
    </x-slot>

    <x-slot name="title">
        {{ $idea->title }} | Forums
    </x-slot>

    <x-slot name="navbar">
        <div id="ember10" class="d-header-wrap ember-view">
            <header class="d-header clearfix">
                <div class="wrap">
                    <div class="contents clearfix">
                        <x-forum-dropdown />
                        <div class="b-breadcrumbs">
                            <a href="{{ route('idea.index') }}" class="b-breadcrumb b-breadcrumb-home">
                                <svg class="fa d-icon d-icon-blizzard-home svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-home"></use></svg>
                                Форумы
                            </a>
                            <a href="{{ route('forums.categories', $idea->category->id) }}" class="b-breadcrumb
                            b-breadcrumb-category">
                                <svg class="fa d-icon d-icon-blizzard-chevron_right svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-chevron_right"></use></svg>
                                {{ $idea->category->name }}
                            </a>
                            <a href="{{ route('idea.show', $idea) }}" class="b-breadcrumb b-breadcrumb-topic">
                                <svg class="fa d-icon d-icon-blizzard-chevron_right svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-chevron_right"></use></svg>
                                <span>{{ $idea->title }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </x-slot>

    <div id="main-outlet" class="wrap" role="main" style="" x-data="{ isOpenStatus: false }">
        <div id="ember19" class="above-main-container-outlet blizzard-banner-message ember-view"><!----></div>

        <div class="container" id="main-container">
            <div id="ember20" class="ember-view"></div>
            <div id="ember21" class="controls ember-view"><!----></div>
            <div id="ember22" class="ember-view"><!----></div>
            <div id="ember23" class="ember-view">  <div class="row">
                    <div id="global-notice-alert-emails-disabled" class="alert alert-info alert-emails-disabled">
                        <!---->      <span class="text">Все исходящие письма были глобально отключены администратором. Уведомления любого вида не будут отправляться на почту.</span>

                        <!---->    </div>
                </div>
            </div>
            <div id="ember25" class="hidden create-topics-notice ember-view"><!----></div>
            <!---->
        </div>
        <livewire:forum.idea-show
            :idea="$idea"
            :votesCount="$votesCount"
        />
        <!---->
        <div id="user-card" class="user-card no-bg group-undefined ember-view" style="left: -9999px; top: -9999px; bottom: unset;"><!----></div>

        <div id="group-card" class="no-bg group-card ember-view" style="left: -9999px; top: -9999px;"><!----></div>

        <livewire:forum.add-comment :idea="$idea" />
        @admin
        <livewire:forum.set-status :idea="$idea" />
        @endadmin
    </div>

</x-forum-layout>
