<x-forum-layout>

    <x-slot name="body">
        drop-down-mode categories-list category category-{{ $category->name }}
    </x-slot>

    <x-slot name="title">
        {{ $category->name }} | Forums
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
                            <a href="{{ route('forums.categories', $category) }}" class="b-breadcrumb b-breadcrumb-category">
                                <svg class="fa d-icon d-icon-blizzard-chevron_right svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-chevron_right"></use></svg>
                                {{ $category->name }}
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </x-slot>

    <div id="main-outlet" class="wrap" role="main" style="">
        <div id="ember19" class="above-main-container-outlet blizzard-banner-message ember-view"><!----></div>

        <div class="container" id="main-container">
            <div id="ember20" class="ember-view"></div>
            <div id="ember21" class="controls ember-view"><!----></div>
            <div id="ember22" class="ember-view"><!----></div>
            <div id="ember23" class="ember-view">
                <div class="row">
                    <div id="global-notice-alert-emails-disabled" class="alert alert-info alert-emails-disabled">
                        <!---->      <span class="text">Все исходящие письма были глобально отключены администратором. Уведомления любого вида не будут отправляться на почту.</span>

                        <!---->    </div>
                </div>
            </div>
            <div id="ember25" class="hidden create-topics-notice ember-view"><!----></div>
            <!---->
        </div>
        <div class="container">
            <div id="ember2028" class="ember-view"><!----></div>
            <div id="ember2176" class="ember-view"><!----></div>
        </div>

        <span id="ember2030" class="ember-view"><!----></span>

        <div class="list-controls">
            <!---->
            <div class="container">
                <!---->

                <section class="category-heading">
                    <!---->
                    <span id="ember2178" class="ember-view"><!----></span>
                </section>

                <section id="ember2179" class="navigation-container category-navigation ember-view">
                    <ol id="ember2181" class="category-breadcrumb ember-view">
                        <li>
                            <details id="ember2183" class="select-kit single-select combobox combo-box category-drop has-selection none ember-view">  <summary aria-label="Отфильтровать по: {{ $category->name }}" name="Отфильтровать по: {{ $category->name }}" data-name="Объявления" data-value="5" tabindex="0" role="listbox" id="ember2183-header" class="select-kit-header single-select-header combo-box-header category-drop-header ember-view" style=""><div class="select-kit-header-wrapper">
                                        <div title="{{ $category->name }}" data-value="5" data-name="{{ $category->name }}" role="option" class="select-kit-selected-name selected-name choice">
                                            <!---->
                                            <span class="name">
      <span class="badge-wrapper none"><span data-drop-close="true" class="badge-category clear-badge" title="{{ $category->description }}"><span class="category-name">{{ $category->name }}</span></span></span>
    </span>

                                            <!---->  </div>


                                        <svg class="fa d-icon d-icon-caret-right svg-icon caret-icon svg-string" xmlns="http://www.w3.org/2000/svg" style=""><use xlink:href="#blizzard-chevron_right"></use></svg>
                                    </div>
                                </summary>

                                <div id="ember2183-body" class="select-kit-body ember-view" style="position: relative;"><!----></div></details>
                        </li>
                        <!---->
                        <!---->
                        <!---->
                    </ol>

                    <livewire:forum.status-filters />

                    <div class="navigation-controls">
                        @auth
                        <button  @click="create = !create" id="create-topic" class="btn-default btn btn-icon-text ember-view" type="button">
                            <svg class="fa d-icon d-icon-plus svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#plus"></use></svg>
                            <span class="d-button-label">Новая тема<!----></span>
                        </button>
                        <details id="ember2203" class="select-kit single-select dropdown-select-box notifications-button category-notifications-button has-selection ember-view">
                            <summary aria-label="изменить приоритет уведомления для этой категории" name="Отфильтровать по: [missing %{name} value]" data-name="watching" data-value="3" tabindex="0" role="listbox" id="ember2203-header" class="select-kit-header single-select-header dropdown-select-box-header btn no-text btn-icon btn-default ember-view"><div class="select-kit-header-wrapper">
                                    <!---->

                                    <div role="option" class="select-kit-selected-name selected-name choice">
                                        <svg class="fa d-icon d-icon-d-watching svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#far-eye"></use></svg>
                                    </div>


                                    <!---->
                                </div>
                            </summary>

                            <div id="ember2203-body" class="select-kit-body ember-view" style="position: relative;"><!----></div>
                        </details>
                        @endauth
                        <!---->
                    </div>


                    <!---->
                </section>
            </div>
        </div>

        <div id="ember2032" class="loading-container ember-view">
        </div>

        <span id="ember2033" class="ember-view"><!----></span>

        <div class="container list-container ">
            <div class="row">
                <div class="full-width">
                    <div id="header-list-area">
                        <!---->
                        @empty(!$categories)
                        <div id="ember904" class="contents ember-view"><!---->
                            <section id="ember905" class="category-boxes no-logos ember-view">
                                @foreach($categories as $cat)
                                <div class="subcategory-container third-{{ $cat->id }}">
                                    <a href="{{ route('forums.categories', $cat) }}" class="b-subcategory">
                                        <div class="category-icon">
                                            <img alt="" src="https://d3pbwrbephk9ur.cloudfront.net/ru/wow/plugins/discourse-blizzard-plugin/images/icons/wow-helmet.png?1530125097">
                                        </div>
                                        <div class="category-name">
                                            {{ $cat->name }}
                                        </div>
                                    </a>

                                </div>
                                @endforeach
                            </section>
                        </div>
                        @endempty
                        <!---->

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="full-width">
                    <div id="list-area">
                        <span id="ember2034" class="ember-view"><!----></span>
                        <!---->
                        <div class="row dismiss-container-top">
                            <!----><!---->  </div>
                         <livewire:forum.thead-view :key="$category->id" :category="$category" />
                    </div>
                </div>
            </div>
        </div>

        <span id="ember2035" class="ember-view"><!----></span>

        <!---->
        <div id="user-card" class="user-card no-bg group-undefined ember-view" style="left: -9999px; top: -9999px; bottom: unset;"><!----></div>

        <div id="group-card" class="no-bg group-card ember-view" style="left: -9999px; top: -9999px;"><!----></div>
        <livewire:forum.create-idea />
    </div>

</x-forum-layout>
