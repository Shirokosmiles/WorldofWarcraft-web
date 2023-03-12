@if($topic->isNotEmpty())
    <div id="ember2207" class="contents ember-view"><!---->  <span id="ember2208" class="ember-view"><!----></span>

    <table id="ember2209" class="topic-list ember-view">
        <thead>
        <tr>
            <th data-sort-order="default" class="default" scope="col">Тема</th>

            <th data-sort-order="" class="" scope="col">Автор</th>

            <th data-sort-order="posts" class="posts sortable num" scope="col" tabindex="0" role="button" aria-pressed="false">Ответы</th>

            <th data-sort-order="views" class="views sortable num" scope="col" tabindex="0" role="button" aria-pressed="false">Просмотры</th>

            <th data-sort-order="activity" class="activity sortable num" scope="col" tabindex="0" role="button" aria-pressed="false">Сообщения</th>

        </tr>
        </thead>
        <tbody class="pinned-topics">
            @forelse($pinned as $item)
                <tr data-topic-id="{{ $item->id }}" id="ember4118" class="topic-list-item category-{{ $item->title }} has-excerpt pinned closed group-community-manager ember-view">
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
                <a href="" title="Тема закреплена для вас; она будет отображаться в верхней части соответствующей категории" class="topic-status">
                    <svg class="fa d-icon d-icon-thumbtack svg-icon pinned svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#thumbtack"></use></svg>
                </a>
            </div>
            <a href="{{ route('idea.show', $item) }}" role="heading" aria-level="2" class="title raw-link raw-topic-link" data-topic-id="32">{{ $item->title }}</a>  </span>
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




                    <td class="num views heatmap-high"><span class="number" title="Тема просмотрена {{ $item->views }}">{{ $item->views }}</span></td>

                    <td class="num age activity" title="Первое сообщение: {{ $item->created_at->diffForHumans() }}
            Размещено: {{ $item->updated_at->diffForHumans() }}">
                        <a class="post-activity" href="{{ route('idea.show', $item) }}">
                            <span class="relative-date" data-time="1526367600000" data-format="tiny">
                                {{ $item->updated_at->diffForHumans() }}
                            </span>
                        </a>
                    </td>


                </tr>
            @empty

            @endforelse
                <tr class="table-break">
                    <td colspan="10">&nbsp;</td>
                </tr>
            </tbody>

            <tbody>
            @forelse($topic as $item)
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
            @empty

            @endforelse
        </tbody>
    </table>
        <span id="ember2244" class="ember-view"><!----></span>
    </div>
    <footer class="topic-list-bottom">
        <div id="ember1781" class="footer-message ember-view"><!----></div>
    </footer>
    @else

    <footer class="topic-list-bottom">
        <div id="ember1781" class="footer-message ember-view">
            <h3>
                Нет новых тем.
                <a href="{{ route('idea.index') }}" id="ember1782" class="ember-view"> Просмотреть все категории</a> или <a
                    href="{{ route('forums.latest') }}" id="ember1783" class="ember-view">посмотреть последние темы</a>

            </h3>
        </div>
    </footer>
@endif

