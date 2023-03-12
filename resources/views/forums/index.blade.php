<x-forum-layout>

    <x-slot name="body">
        blizzard-homepage navigation-categories categories-list
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
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </x-slot>

    <x-slot name="header">
        <div id="ember14" class="below-site-header-outlet attach-welcome ember-view">
            <header id="ember15" class="b-welcome ember-view">
                <section id="ember16" class="b-welcome-banner ember-view">
                    <div class="b-welcome-banner-contents wrap ">
                        <div class="game-logo"></div>
                    </div>
                </section>
            </header>
        </div>
    </x-slot>

    <div id="main-outlet" class="wrap" role="main">

        <div class="above-main-container-outlet blizzard-banner-message ember-view">
            <!--div class="b-banner-message minimum-level-not-met">
                Для публикации сообщений на форуме нужен персонаж минимум 10-го уровня.
                С вопросами, связанными с учетной записью и техническими затруднениями, обращайтесь в
                <a href="#">службу поддержки</a>.
            </div-->
        </div>
        <div class="list-controls">
            <!---->
            <div class="container">
                <section id="ember30" class="navigation-container ember-view">
                    <ol id="ember32" class="category-breadcrumb ember-view">
                        <li>
                            <details id="ember34" class="select-kit single-select combobox combo-box category-drop none ember-view">
                                <summary aria-label="Отфильтровать по: все категории" name="Отфильтровать по: все категории" data-name="все категории" data-value="" tabindex="0" role="listbox" id="ember34-header" class="select-kit-header single-select-header combo-box-header category-drop-header ember-view" style="">
                                    <div class="select-kit-header-wrapper">
                                        <div title="все категории" data-name="все категории" role="option" class="select-kit-selected-name selected-name choice">
                                            <!---->
                                            <span class="name">
                                              все категории
                                            </span>

                                            <!---->
                                        </div>
                                        <svg class="fa d-icon d-icon-caret-right svg-icon caret-icon svg-string" xmlns="http://www.w3.org/2000/svg" style=""><use xlink:href="#blizzard-chevron_right"></use></svg>
                                    </div>
                                </summary>

                                <div id="ember34-body" class="select-kit-body ember-view" style="position: relative;"><!----></div>
                            </details>
                        </li>

                        <!---->
                        <!---->
                    </ol>

                    <livewire:forum.status-filters />

                    <div class="navigation-controls">
                        @auth
                        <button @click="
            create = !create
        " class="btn-default btn btn-icon-text ember-view"
                                type="button">
                            <svg class="fa d-icon d-icon-plus svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#plus"></use></svg>
                            <span class="d-button-label">Новая тема<!----></span>
                        </button>
                        @endauth
                        <!---->
                    </div>

                </section>
            </div>
        </div>

        <div id="ember55" class="loading-container ember-view">
        </div>

        <span id="ember56" class="ember-view"><!----></span>

        <div class="container list-container ">
            <div class="row">
                <div class="full-width">
                    <div id="header-list-area">
                        <!---->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="full-width">
                    <div id="list-area">
                        <span id="ember57" class="ember-view"><!----></span>
                        <!---->
                        <livewire:forum.ideas-index />
                        <!---->
                    </div>
                </div>
            </div>
        </div>

        <span id="ember82" class="ember-view"><!----></span>

        <!---->
        <div id="user-card" class="user-card no-bg group-undefined ember-view" style="left: -9999px; top: -9999px;"><!----></div>

        <div id="group-card" class="no-bg group-card ember-view" style="left: -9999px; top: -9999px;"><!----></div>
        @auth
        <div x-cloak
             x-show.transition.origin.top.left="create"
             @click.away="create = false"
             @keydown.escape.window="create = false" id="reply-control" class="open composer-action-createTopic
             edit-title topic hide-preview ember-view">
            <div class="grippie"></div>
            <livewire:forum.create-idea />
        </div>
        @endauth
    </div>

</x-forum-layout>
