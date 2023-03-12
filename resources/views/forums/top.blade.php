<x-forum-layout>

    <x-slot name="body">
        navigation-topics
    </x-slot>

    <x-slot name="title">
        Популярные темы - Forums
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

    <div id="main-outlet" class="wrap" role="main">
        <div id="ember18" class="above-main-container-outlet blizzard-banner-message ember-view"><!----></div>

        <div class="container" id="main-container">
            <div id="ember19" class="ember-view"></div>
            <div id="ember20" class="controls ember-view"><!----></div>
            <div id="ember21" class="ember-view"><!----></div>
            <div id="ember22" class="ember-view">  <div class="row">
                    <div id="global-notice-alert-emails-disabled" class="alert alert-info alert-emails-disabled">
                        <!---->      <span class="text">Все исходящие письма были глобально отключены администратором. Уведомления любого вида не будут отправляться на почту.</span>

                        <!---->    </div>
                </div>
            </div>
            <div id="ember24" class="hidden create-topics-notice ember-view"><!----></div>
            <!---->
        </div>
        <div class="container">
            <div id="ember26" class="ember-view"><!----></div>
            <div id="ember27" class="ember-view"><!----></div>
        </div>

        <span id="ember28" class="ember-view"><!----></span>

        <div class="list-controls">
            <!---->
            <div class="container">
                <section id="ember30" class="navigation-container ember-view">  <ol id="ember32" class="category-breadcrumb ember-view">    <li>
                            <details id="ember34" class="select-kit single-select combobox combo-box category-drop none ember-view">  <summary aria-label="Отфильтровать по: все категории" name="Отфильтровать по: все категории" data-name="все категории" data-value="" tabindex="0" role="listbox" id="ember34-header" class="select-kit-header single-select-header combo-box-header category-drop-header ember-view" style=""><div class="select-kit-header-wrapper">
                                        <div title="все категории" data-name="все категории" role="option" class="select-kit-selected-name selected-name choice">
                                            <!---->
                                            <span class="name">
      все категории
    </span>

                                            <!---->  </div>


                                        <svg class="fa d-icon d-icon-caret-right svg-icon caret-icon svg-string" xmlns="http://www.w3.org/2000/svg" style=""><use xlink:href="#blizzard-chevron_right"></use></svg>
                                    </div>
                                </summary>

                                <div id="ember34-body" class="select-kit-body ember-view" style="position: relative;"><!----></div></details>
                        </li>

                        <!---->
                        <!---->
                    </ol>

                    <livewire:forum.status-filters />

                    <div class="navigation-controls">

                        <!---->
                        <!---->
                        <!---->
                        <!---->

                        <button id="create-topic" class="btn-default btn btn-icon-text ember-view" type="button">
                            <svg class="fa d-icon d-icon-plus svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#plus"></use></svg>
                            <span class="d-button-label">Новая тема<!----></span>
                        </button>


                        <!---->

                        <!---->
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
                        <div class="row dismiss-container-top">
                            <!----><!---->  </div>



                        <!---->
                        @if($topic->isNotEmpty())
                        <div id="ember59" class="contents ember-view">

                            <table id="ember62" class="topic-list ember-view">
                                <thead>
                                <tr><th data-sort-order="default" class="default" scope="col">Тема</th>

                                    <th data-sort-order="" class="" scope="col">Автор</th>

                                    <th data-sort-order="posts" class="posts sortable num" scope="col" tabindex="0" role="button" aria-pressed="false">Ответы</th>

                                    <th data-sort-order="views" class="views sortable num" scope="col" tabindex="0" role="button" aria-pressed="false">Просмотры</th>

                                    <th data-sort-order="activity" class="activity sortable num" scope="col" tabindex="0" role="button" aria-pressed="false">Сообщения</th>

                                </tr>
                                </thead>
                                <tbody>
                                @foreach($topic as $item)
                                    <tr data-topic-id="{{ $item->id }}" id="ember2213" class="topic-list-item
            category-{{ $item->title }} closed group-community-manager ember-view">
                                        <td class="main-link clearfix" colspan="1">
          <span class="link-top-line"><span class="topic-icon-container">
            <a class="tracked-post group-community-manager" href="{{ route('idea.show', $item) }}" title="Первая запись группы community-manager">
              <svg class="fa d-icon d-icon-blizzard svg-icon first-tracked-post svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#blizzard-icon-small"></use></svg>
            </a>
        </span>
        <div class="topic-statuses">
            @if($item->status_id == 5)
                <span title="Тема закрыта; в ней больше нельзя отвечать" class="topic-status">
                    <svg class="fa d-icon d-icon-lock svg-icon locked svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#lock"></use></svg>
                </span>
            @endif
        </div>
        <a href="{{ route('idea.show', $item) }}" role="heading"
           aria-level="2" class="title raw-link raw-topic-link" data-topic-id="31462">{{ $item->title }}</a><span
                  class="topic-post-badges"></span>
          </span>
                                            <div class="link-bottom-line">


                                            </div>
                                        </td>

                                        <td class="creator">
                                            <a href="{{ route('forums.profile', $item->user->name) }}" data-user-card="{{ $item->user->name }}">
                                                {{ $item->user->name }}
                                            </a>
                                        </td>


                                        <td wire:ignore class="num posts-map posts " title="Ответов
         в этой теме: {{ $item->comments_count }}">
                                            <button class="btn-link posts-map badge-posts ">
                                                <svg class="fa d-icon d-icon-blizzard-chat svg-icon blizzard-reply-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#blizzard-chat"></use></svg>

                                                <span class="number" aria-label="Ответов
         в этой теме: {{ $item->comments_count }}">{{ $item->comments_count }}</span>
                                            </button>
                                        </td>




                                        <td class="num views heatmap-med">
                    <span class="number" title="Тема просмотрена {{ $item->views }}">
                        {{ $item->views }}
                    </span>
                                        </td>

                                        <td class="num age activity" title="Первое сообщение: {{ $item->created_at->diffForHumans() }}
                                            Размещено: {{ $item->updated_at->diffForHumans() }}">
                                            <a class="post-activity" href="{{ route('idea.show', $item) }}">
                        <span class="relative-date" data-time="1603727933123" data-format="tiny">
                            {{ $item->updated_at->diffForHumans() }}
                        </span>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                                <!---->
                                </tbody>

                                <!---->
                            </table>

                            <span id="ember168" class="ember-view"><!----></span>

                        </div>
                        <footer class="topic-list-bottom">
                            <div id="ember169" class="loading-container ember-view">
                            </div>
                            <!----></footer>
                        @else
                            <div id="ember59" class="contents ember-view">
                                <span id="ember168" class="ember-view"><!----></span>
                            </div>
                            <footer class="topic-list-bottom">
                                <div id="ember1781" class="footer-message ember-view">
                                    <h3>
                                        Нет тем.
                                        <a href="{{ route('idea.index') }}" id="ember1782" class="ember-view"> Просмотреть все категории</a> или <a
                                            href="{{ route('forums.latest') }}" id="ember1783" class="ember-view">посмотреть последние темы</a>

                                    </h3>
                                </div>
                            </footer>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-forum-layout>
