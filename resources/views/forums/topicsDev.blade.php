<x-forum-layout>

    <x-slot name="title">
        Темы -developer - Forums
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
        <span id="ember317" class="ember-view">
            <div id="ember319" class="before-group-container-outlet group-navigation ember-view"><!---->
<div class="list-controls">
<section id="ember320" class="navigation-container ember-view">
    <ol id="ember322" class="category-breadcrumb ember-view">
        <li>
      <details id="ember324" class="select-kit single-select combobox combo-box category-drop none ember-view">
          <summary aria-label="Отфильтровать по: все категории" name="Отфильтровать по: все категории" data-name="все категории" data-value="" tabindex="0" role="listbox" id="ember324-header" class="select-kit-header single-select-header combo-box-header category-drop-header ember-view" style=""><div class="select-kit-header-wrapper">
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

<div id="ember324-body" class="select-kit-body ember-view" style="position: relative;"><!----></div></details>
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

    <!---->

    <!---->

    <!---->
    <!---->
</div>

</section>
</div>
</div>
</span>

        <div class="container group overwatch-developer">
            <!---->
            <div class="group-details-container">
                <div class="group-info">
                    <div class="group-avatar-flair">
                        <!---->      </div>

                    <div class="group-info-names">
                        <span class="group-info-name">Dev Tracker</span>

                        <div class="group-info-full-name">overwatch-developer</div>
                    </div>

                    <div class="group-details-button">



                        <!---->
                        <!---->      </div>

                    <span id="ember346" class="ember-view"><!----></span>
                </div>

                <hr>

                <div class="group-bio">
                    <p><p>Development team.</p></p>
                </div>
            </div>

            <div class="user-content-wrapper">
                <section class="user-primary-navigation">
                    <div class="container">
                        <ul id="ember348" class="group-nav nav nav-pills ember-view">
                            <li>
                                <details id="ember349" class="select-kit single-select combobox combo-box group-dropdown has-selection ember-view">
                                    <summary aria-label="Отфильтровать по: [missing %{name} value]" name="Отфильтровать по: [missing %{name} value]" data-name="overwatch-developer" data-value="overwatch-developer" tabindex="0" role="listbox" id="ember349-header" class="select-kit-header single-select-header combo-box-header ember-view"><div class="select-kit-header-wrapper">
                                            <!---->

                                            <div title="overwatch-developer" data-value="overwatch-developer" data-name="overwatch-developer" role="option" class="select-kit-selected-name selected-name choice">
                                                <!---->
                                                <span class="name">
      overwatch-developer
    </span>

                                                <!---->  </div>


                                            <!---->
                                            <svg class="fa d-icon d-icon-caret-right svg-icon caret-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#blizzard-chevron_right"></use></svg>
                                        </div>
                                    </summary>

                                    <div id="ember349-body" class="select-kit-body ember-view" style="position: relative;"><!----></div></details>
                            </li>

                            <li>
                                <a title="Участники" href="/ru/overwatch/g/overwatch-developer" id="ember352" class="members ember-view">        <svg class="fa d-icon d-icon-users svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#users"></use></svg>
                                    Участники
                                    <!---->
                                </a>    </li>
                            <li>
                                <a title="Сообщения" href="/ru/overwatch/g/overwatch-developer/activity" id="ember354" class="activity active ember-view">        <!---->
                                    Сообщения
                                    <!---->
                                </a>    </li>
                            <li>
                                <a title="Разрешения" href="/ru/overwatch/g/overwatch-developer/permissions" id="ember356" class="permissions ember-view">        <!---->
                                    Разрешения
                                    <!---->
                                </a>    </li>
                            <!---->

                        </ul>
                    </div>
                </section>

                <section class="user-secondary-navigation">
                    <ul id="ember358" class="activity-nav action-list activity-list nav-stacked ember-view">
                        <li id="ember359" class="ember-view">
                            <a href="{{ route('forums.postsDev') }}" id="ember360" class="ember-view">
                                Сообщения
                            </a>
                        </li>
                        <li id="ember361" class="ember-view">
                            <a href="{{ route('forums.topicsDev') }}" id="ember362" class="active ember-view">
                                Темы
                            </a>
                        </li>
                    </ul>
                </section>
                <section class="user-content">
                    <div id="ember467" class="paginated-topics-list ember-view">
                        <div id="ember468" class="ember-view">
                            <div id="ember469" class="loading-container ember-view">
                                @if($topic->isNotEmpty())
                                    <table id="ember358" class="topic-list ember-view">
                                        <thead class="topic-list-header">
                                        <tr>
                                            <th data-sort-order="default" class="default topic-list-data" scope="col">Тема</th>


                                            <th data-sort-order="" class=" topic-list-data" scope="col">Автор</th>


                                            <th data-sort-order="posts" class="posts num topic-list-data" scope="col" aria-label="[ru.sr_replies]">Ответы</th>

                                            <th data-sort-order="views" class="views num topic-list-data" scope="col" aria-label="[ru.sr_views]">Просмотры</th>

                                            <th data-sort-order="activity" class="activity num topic-list-data" scope="col" aria-label="[ru.sr_activity]">Сообщения</th>
                                        </tr>
                                        </thead>

                                        <!---->


                                        <tbody class="topic-list-body">
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
                                @else
                                <div class="alert alert-info">
                                    Не найдено ни одной темы.
                                </div>
                                @endif
                            </div>
                        </div>
                        <div id="ember470" class="loading-container ember-view">
                        </div>
                    </div>
                </section>

            </div>
        </div>

        <!---->
        <div id="user-card" class="user-card no-bg group-undefined ember-view" style="left: -9999px; top: -9999px;"><!----></div>

        <div id="group-card" class="no-bg group-card ember-view" style="left: -9999px; top: -9999px;"><!----></div>

    </div>
</x-forum-layout>
