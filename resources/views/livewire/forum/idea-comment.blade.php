@if ($comment->is_status_update)
<div id="post_{{ $comment->id }}" class="small-action onscreen-post">
    <div class="topic-avatar">
        <svg class="fa d-icon d-icon-lock svg-icon svg-node" aria-hidden="true"><use xlink:href="#lock"></use></svg>
    </div>
    <div class="small-action-desc">
        <a class="trigger-user-card " href="{{ route('forums.profile', $comment->user->name) }}" data-user-card="{{ $comment->user->name }}" aria-hidden="true">
            <img alt="" width="25" height="25" src="{{ $comment->user->getAvatar() }}" title="{{ $comment->user->name }}" aria-label="{{ $comment->user->name }}" class="avatar"></a>
        <p>{{ $comment->status->name }} <span class="relative-date" data-time="1601393706768" data-format="medium-with-ago-and-on">
                <span class="date" title="{{ $comment->created_at->diffForHumans() }}">{{ $comment->created_at->diffForHumans() }}</span>
            </span>
        </p>
    </div>
</div>
@else
<div class="topic-post clearfix group-cs-mvp regular">
    <article id="post_{{ $comment->id }}" role="region" data-post-id="{{ $comment->id }}"
             data-topic-id="{{ $comment->id }}" data-user-id="{{ $comment->user->id }}" class="boxed onscreen-post">
        <a href="" aria-hidden="true" tabindex="-1" class="tabLoc"></a>
        <div class="row">
            <div class="topic-avatar">
                <a class="trigger-user-card main-avatar" href="{{ route('forums.profile', $comment->user->name) }}" data-user-card="{{ $comment->user->name }}" aria-hidden="true">
                    <img alt="" width="45" height="45" src="{{ $comment->user->getAvatar() }}" class="avatar"></a>
                <div class="poster-avatar-extra"></div>
            </div>
            <div class="topic-body clearfix">
                <div role="heading" aria-level="2" class="topic-meta-data">
                    <div class="names trigger-user-card">
                        <span class="first username cs-overwatch-mvp">
                            <a href="{{ route('forums.profile', $comment->user->name) }}" data-user-card="{{ $comment->user->name }}">{{ $comment->user->name }}</a>
                            <div role="heading" class="user-post-count">Сообщений: {{ $comment->user->countForum()->count() }} </div>
                        </span>
                        <span class="user-title">
                            <a class="user-group" href="{{ route('forums.mvp') }}" data-group-card="cs-mvp">MVP</a>
                        </span>
                    </div>
                    <div class="post-infos">
                        <div class="post-info post-date">
                            <a class="post-date" href="/ru/overwatch/t/%D0%BD%D0%B5%D1%82%D1%83-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%D0%B7%D0%B0-%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D1%83-%D0%B2-%D0%B0%D1%80%D0%BA%D0%B0%D0%B4%D0%B0/36134/2">
                                <span title="{{ $comment->created_at->diffForHumans() }}" data-time="1650004777709" data-format="tiny" class="relative-date">{{ $comment->created_at->diffForHumans() }}</span>
                            </a>
                        </div>
                        <div class="read-state read" title="Сообщение не прочитано">
                            <svg class="fa d-icon d-icon-circle svg-icon svg-node" aria-hidden="true"><use xlink:href="#circle"></use></svg>
                        </div>
                    </div>
                </div>
                <div class="regular contents">
                    <div class="cooked">{!! nl2br(e($comment->body)) !!}</div>
                    <section class="post-menu-area clearfix">
                        <nav class="post-controls expanded">
                            <div class="actions">
                                @if ($hasVoted)
                                    <button class="widget-button btn button-count like-count highlight-action regular-likes btn-text">{{ $votesCount }}</button>
                                    <button wire:click.prevent="vote"
                                            class="widget-button btn toggle-like has-like fade-out no-text btn-icon" title="Не нравится"><svg class="fa d-icon d-icon-d-liked svg-icon svg-node d-hover" aria-hidden="true"><use xlink:href="#heart"></use></svg>
                                    </button>
                                @else
                                    <button wire:click.prevent="vote"
                                            class="widget-button btn toggle-like like no-text btn-icon" title="Мне нравится"><svg class="fa d-icon d-icon-d-unliked svg-icon svg-node" aria-hidden="true"><use xlink:href="#far-heart"></use></svg>
                                    </button>
                                @endif
                                <button class="widget-button btn create-flag no-text btn-icon" title="Незаметно сообщить или пожаловаться модератору"><svg class="fa d-icon d-icon-flag svg-icon svg-node" aria-hidden="true"><use xlink:href="#flag"></use></svg></button>
                                <button class="widget-button btn bookmark with-reminder no-text btn-icon" title="Добавить сообщение в закладки"><svg class="fa d-icon d-icon-bookmark svg-icon svg-node" aria-hidden="true"><use xlink:href="#bookmark"></use></svg></button>
                                @if($status != 5)
                                <button class="widget-button btn reply create fade-out btn-icon-text" title="Ответить на это сообщение"><svg class="fa d-icon d-icon-reply svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-reply-all"></use></svg><span class="d-button-label">Ответить</span></button>
                                @endif
                            </div>
                        </nav>
                    </section>
                </div>
            </div>
        </div>
    </article>
</div>
@endif
