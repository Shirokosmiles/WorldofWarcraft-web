<div id="ember59" class="contents ember-view"><!---->
    <div id="ember60" class="categories-and-top ember-view">
        <div class="column categories">
            <div class="category-list">
                @forelse ($category as $cat)
                    <livewire:forum.idea-index
                        :key="$cat->id"
                        :cat="$cat"
                    />
                @empty
                    <!--- --->
                    <!--- --->
                    <!--- --->
                @endforelse
            </div>
        </div>

        <div class="column">
            <div id="ember76" class="top-topic-list ember-view">
                <div aria-role="heading" aria-level="2" class="table-heading">
                    Новые темы
                    <!---->
                </div>
                @foreach($topic as $item)

                <div class="latest-topic-list-item category-general-discussion visited ember-view">
                    <div class="b-topic-line title-and-reply-count">
                        <div class="b-topic-link main-link">
                            <!--div class="topic-statuses">
                                <a href="#" title="Вы добавили тему в закладки" class="topic-status op-bookmark">
                                    <svg class="fa d-icon d-icon-bookmark svg-icon svg-string" xmlns="http://www.w3.org/2000/svg">
                                        <use xlink:href="#bookmark"></use>
                                    </svg>
                                </a>
                            </div-->
                            <a href="{{ route('idea.show', $item) }}" class="title">{{ $item->title }}</a>

                        </div>

                        <div class="num posts-map posts " title="Ответов в этой теме: {{ $item->comments_count }}">
                            <button class="btn-link posts-map badge-posts ">
                                <svg class="fa d-icon d-icon-blizzard-chat svg-icon blizzard-reply-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#blizzard-chat"></use></svg>

                                <span class="number" aria-label="Ответов в этой теме: {{ $item->comments_count }}">
                                    {{ $item->comments_count }}
                                </span>
                            </button>
                        </div>

                    </div>

                    <div class="b-topic-line category-and-age">
                        <a href="{{ route('forums.categories', $item->category->id) }}" id="ember80" class="d-link
                        b-category-small
                        has-description
                        ember-view">
                            <img alt="" src="https://d2723j7i5e2etm.cloudfront.net/ru/overwatch/plugins/discourse-blizzard-plugin/images/icons/play.png?1530125097">
                            <span class="b-category-label">{{ $item->category->name }}</span>
                        </a>

                        <a href="{{ route('idea.show', $item) }}" class="b-age" title="Первое сообщение: {{
                        $item->created_at->diffForHumans
                        () }}
Размещено: {{ $item->created_at->diffForHumans() }}"><span class="relative-date" data-time="1649684914021" data-format="tiny">{{ $item->created_at->diffForHumans() }}</span></a>
                    </div>
                </div>
                @endforeach
                <div class="more-topics">
                    <a href="#" class="btn btn-default pull-right">Еще</a>
                </div>
            </div>
        </div>
    </div>
</div>
