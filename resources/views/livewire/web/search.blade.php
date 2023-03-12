@push('css')
    @vite(['resources/css/3.css'])
@endpush


@push('scripts')
    <script src="{{ asset('static/runtime.7c6b2c574cb255b04c4f.js') }}"></script>
    <script src="{{ asset('static/vendor.148b142df29c0644a491.js') }}"></script>
    <script src="{{ asset('static/3.d15a3fea6c61801c0cfa.js') }}"></script>
    <script src="{{ asset('static/legacy-components.1cbfaef53573c17aab6b.js') }}"></script>
@endpush

<div class="Pane Pane--full Pane--dirtDark">
    <div class="Pane-bg"><div class="Pane-overlay"></div>
    </div>
    <div class="Pane-content">
        <div class="Pane Pane--underSiteNav Pane--cropMax Pane--transparent" data-url="https://bnetcmsus-a.akamaihd.net/cms/template_resource/p8/P8LCY89PNXOK1466794718015.jpg">
            <div class="Pane-bg" style="background-image:url(https://bnetcmsus-a.akamaihd.net/cms/template_resource/p8/P8LCY89PNXOK1466794718015.jpg);">
                <div class="Pane-overlay"></div>
            </div>
                <div class="Pane-content">
    <div class="contain-max">
        <div class="space-large" media-large="space-huge"></div>
        <div class="Grid">
            <div class="Grid-full font-semp-xLarge-white" media-large="font-semp-xxxLarge-white" media-wide="Grid-1of2" media-huge="Grid-2of3">Поиск</div>
            <div class="Grid-full padding-top-small" media-wide="Grid-1of2" media-huge="Grid-1of3">
                <form class="SiteNav-searchBox" method="GET">
                    <span class="Icon Icon--searchGold SiteNav-searchIcon"></span>
                    <input class="SiteNav-searchInput" type="search" placeholder="Что вы ищете?" wire:model="term" autocomplete="off"></form>
            </div>
        </div>
        <div class="Grid">
            <div class="Grid-full padding-top-normal" media-wide="!padding-top-normal">
                <div class="font-bliz-light-medium-white">
                    @if($term)
                        Результаты по запросу <b>«{{ $term }}»</b>
                    @endif
                </div>
                <div class="space-large"></div>
                <div wire:loading.remove>

                    @if ($term == "")
                        <div class="text-gray-500 text-sm">
                            Введите запрос
                        </div>
                    @else
                        @if($post->isEmpty() && $characters->isEmpty())
                            <div class="List--vertical List--separatorAll List--full">Ничего не нашлось!</div>
                        @endif
                        @if(!$characters->isEmpty())
                            <div class="List--vertical List--separatorAll List--full">
                                <div class="List-item">
                                    <div class="gutter-normal gutter-vertical">
                                        <div class="List List--gutters">
                                            <div class="List-item">
                                                <div class="font-semp-small-white text-upper">Персонажи WoW</div>
                                            </div>
                                            <div class="List-item">
                                                <a class="Link Link--text" href="/ru-ru/search/character?q=efwef">Посмотреть все результаты: 13</a></div>
                                            </div>
                                        <div class="space-normal"></div>
                                        <div class="Grid Grid--gutters SyncHeight SyncHeight--disabled" media-medium="!SyncHeight--disabled">
                                        @foreach($characters as $char)
                                        <div class="Grid-full SyncHeight-item" media-medium="Grid-1of2" media-wide="Grid-1of4">
                                            <a class="Link Character Character--DRUID Character--name
                                            Character--avatar Character--level Character--realm Character--square" href="#">
                                                <div class="Character-link">
                                                    <div class="Character-table">
                                                        <div class="Character-bust">
                                                            <div class="Art Art--above">
                                                                <div class="Art-size" style="padding-top:50.43478260869565%"></div>
                                                                <div class="Art-image" style="background-image:url(https://render-eu.worldofwarcraft.com/character/khaz-modan/163/165192355-inset.jpg);"></div>
                                                                <div class="Art-overlay"></div>
                                                            </div>
                                                        </div>
                                                        <div class="Character-avatar">
                                                            <div class="Avatar">
                                                                <div class="Avatar-image" style="background-image:url(https://render-eu.worldofwarcraft.com/character/khaz-modan/163/165192355-avatar.jpg);"></div>
                                                            </div>
                                                        </div>
                                                        <div class="Character-details">
                                                            <div class="Character-role"></div>
                                                            <div class="Character-name">{{ $char->name }}</div>
                                                            <div class="Character-level"><b>{{ $char->level }}</b>
                                                                {{ $char->class_text }}
                                                            </div>
                                                            <div class="Character-realm">{{ $char->realmName }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                        @if(!$post->isEmpty())
                            <div class="List--vertical List--separatorAll List--full">
                                <div class="List-item">
                                    <div class="gutter-normal gutter-vertical">
                                        <div class="List List--gutters">
                                            <div class="List-item">
                                                <div class="font-semp-small-white text-upper">Статьи</div>
                                            </div>
                                        </div>
                                        <div class="space-normal"></div>
                                        <div class="Grid Grid--gutters SyncHeight SyncHeight--disabled" media-medium="!SyncHeight--disabled">
                                            @foreach($post as $posts)
                                                <div class="Grid-full Grid-1of2 Grid-1of4" media-medium="Grid-1of2" media-wide="Grid-1of4" queryselectoralways="0" media-original="Grid-full">
                                                    <div class="ArticleTile ArticleTile--stacked">
                                                        <div class="ArticleTile-content">
                                                            <div class="Tile ArticleTile-tile">
                                                                <div class="Tile-area">
                                                                    <div class="Tile-bg" style="background-image:url({{ asset($posts->image) }});"></div>
                                                                    <div class="Tile-content"></div>
                                                                </div>
                                                            </div>
                                                            <div class="ArticleTile-fade"></div>
                                                            <div class="ArticleTile-play">
                                                                <div class="ArticleTile-playArrow"></div>
                                                            </div>
                                                            <div class="ArticleTile-bottom SyncHeight-item" data-syncheight-multiplier="1" style="height: 133px;">
                                                                <div class="ArticleTile-bottomInner">
                                                                    <div class="ArticleTile-left">
                                                                        <div class="ArticleTile-title">{{ $posts->getTranslation('name', App()->getLocale()) }}</div>
                                                                    </div>
                                                                    <div class="ArticleTile-right">
                                                                        <div class="ArticleTile-commentTotal List-right">
                                                                            <a class="Link Link--external ArticleTile-comments" href="{{ route('post.show', [$posts->id, $posts->slug]) }}">
                                                                                <div class="CommentTotal CommentTotal--horizontal CommentTotal--right ArticleTile-commentTotal"><span class="Icon Icon--comment Icon--small CommentTotal-icon"><svg class="Icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false"><use xlink:href="/static/components/Icon/svg/comment.88a6bb267bb247fed6a4ae5b51ea531d.svg#comment"></use></svg></span>
                                                                                    <div class="CommentTotal-number">0</div>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a class="Link ArticleTile-link" href="{{ route('post.show', [$posts->id, $posts->slug]) }}" data-thumb="{{ asset($posts->image) }}" data-analytics-v2="{&quot;name&quot;:&quot;ctaOther&quot;,&quot;category&quot;:&quot;cta&quot;,&quot;action&quot;:&quot;other&quot;,&quot;label&quot;:&quot;blog&quot;,&quot;dimensions&quot;:{&quot;ctaPlacement&quot;:&quot;search&quot;,&quot;destinationUrl&quot;:&quot;{{ route('post.show', [$posts->id, $posts->slug]) }}&quot;}}" queryselectoralways="1">

                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endif
                </div>
            </div>
        </div>
        <div class="space-large" media-large="space-huge"></div>
    </div>
</div>
        </div>
    </div>
</div>
