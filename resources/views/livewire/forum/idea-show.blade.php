<div id="ember3371" class="regular ember-view">
    <div id="ember3372" class="ember-view"></div>
    <!---->
    <div class="container">
        <div id="ember3374" class="ember-view"><!----></div>
    </div>

    <!---->
    <span id="ember3375" class="ember-view">
                <div id="ember3376" class="topic-above-post-stream-outlet topic-removed-notification ember-view"><!----></div>
            </span>

    <div id="topic-title" class="ember-view">
        <div class="container">
            <div class="title-wrapper">
                <h1 data-topic-id="36134">
                    <!---->

                    <div id="ember3452" class="topic-statuses ember-view"><!----><!----><!----><!----><!----><!----><!----><!----><!----></div>
                    <a href="{{ route('idea.show', $idea) }}" class="fancy-title" data-ember-action="" data-ember-action-3454="3454">
                        {{ $idea->title }}
                    </a>

                    <!---->          </h1>

                <div id="ember3455" class="topic-category ember-view">  <a href="{{ route('forums.categories', $idea->category->id) }}" id="ember3456" class="d-link b-category-small has-description ember-view"><img alt="" src="https://d2723j7i5e2etm.cloudfront.net/ru/overwatch/plugins/discourse-blizzard-plugin/images/icons/shield.png?1530125097">
                        <span class="b-category-label">{{ $idea->category->name }}</span>
                    </a>
                </div>

            </div>
            <span id="ember3457" class="ember-view"><!----></span>
        </div>
    </div>
    <!---->

    <div class="container posts">
        <div class="selected-posts hidden">
            <div id="ember3458" class="ember-view">
                <p>
  <span id="ember3459" class="ember-view">Выбрано сообщений: <b>0</b>.
</span>
                </p>

                <p>
                    <a class="select-all" href="" data-ember-action="" data-ember-action-3460="3460">
                        выбрать все
                    </a>
                </p>

                <!---->
                <!---->
                <!---->
                <!---->
                <!---->
                <p class="cancel">
                    <a href="" data-ember-action="" data-ember-action-3461="3461">
                        Отменить выбор
                    </a>
                </p>
            </div>
        </div>

        <!---->

        <div id="ember3463" class="topic-navigation ember-view">
            <div id="ember3513" class="ember-view">
                <div class="timeline-container timeline-docked">
                    <div class="topic-timeline">
                        <div class="timeline-controls"><span></span></div>
                        <div class="timeline-scrollarea-wrapper">
                            <div class="timeline-date-wrapper">
                                <a class="widget-link start-date" href="/ru/overwatch" title="апр. 14">
                                    <span class="d-label">апр. 14</span></a>
                            </div>
                            <div style="height: 300px" class="timeline-scrollarea">
                                <div style="height: 0px" class="timeline-padding"></div>
                                <div style="height: 50px" class="timeline-scroller">
                                    <div class="timeline-handle"></div>
                                    <div class="timeline-scroller-content">
                                        <div class="timeline-replies">1 / 3</div>
                                        <div class="timeline-ago">апр. 15</div>
                                    </div>
                                </div>
                                <div style="height: 250px" class="timeline-padding"></div>
                            </div>
                            <div class="timeline-date-wrapper">
                                <a class="widget-link now-date" href="/ru/overwatch" title="17 ч. назад">
                                    <span class="d-label">17 ч. назад</span>
                                </a>
                            </div>
                        </div>
                        <div class="timeline-footer-controls">
                            <button class="widget-button btn btn-default create reply-to-post no-text btn-icon" title="Ответить в этой теме">
                                <svg class="fa d-icon d-icon-reply svg-icon svg-node" aria-hidden="true">
                                    <use xlink:href="#blizzard-reply-all"></use>
                                </svg>
                            </button>
                            <div class="widget-component-connector" style="display: inline-flex;">
                                <div id="ember3514" class="topic-notifications-button ember-view">
                                    <details id="ember3515" class="select-kit single-select dropdown-select-box notifications-button topic-notifications-options has-selection ember-view">
                                        <summary aria-label="изменить частоту уведомлений об этой теме" name="Отфильтровать по: [missing %{name} value]" data-name="regular" data-value="1" tabindex="0" role="listbox" id="ember3515-header" class="select-kit-header single-select-header dropdown-select-box-header btn no-text btn-icon btn-default ember-view">
                                            <div class="select-kit-header-wrapper">
                                                <!---->

                                                <div role="option" class="select-kit-selected-name selected-name choice">
                                                    <svg class="fa d-icon d-icon-d-regular svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#blizzard-bell"></use></svg>
                                                </div>


                                                <!---->
                                            </div>
                                        </summary>
                                        <div id="ember3515-body" class="select-kit-body ember-view" style="position: relative;"><!----></div></details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <section class="topic-area" id="topic" data-topic-id="{{ $idea->id }}">

                <div class="posts-wrapper">
                    <div id="ember3468" class="loading-container ember-view">
                    </div>

                    <span id="ember3469" class="ember-view"><!----></span>

                    <div id="ember3470" class="ember-view">
                        <div class="post-stream">
                            <div class="topic-post clearfix topic-owner group-community-manager regular">
                                <article id="post_1" aria-label="Сообщение № 1" role="region" data-post-id="{{ $idea->id }}" data-topic-id="{{ $idea->id }}" data-user-id="{{ $idea->user->id }}" class="boxed onscreen-post">
                                    <a href="" aria-hidden="true" tabindex="-1" class="tabLoc"></a>
                                    <div class="row">
                                        <div class="topic-avatar">
                                            <a class="trigger-user-card main-avatar" href="{{ route('forums.profile', $idea->user->name) }}" data-user-card="Spycrane-2847" aria-hidden="true"><img alt="" width="45" height="45" src="{{ $idea->user->getAvatar() }}" class="avatar"></a>
                                            <div class="poster-avatar-extra"></div>
                                        </div>
                                        <div class="topic-body clearfix highlighted">
                                            <div role="heading" aria-level="2" class="topic-meta-data">
                                                <div class="names trigger-user-card">
                                                    <div>
                                                        <div class="character-details">
                                                            <div class="primary-details">
                                                                <a href="{{ route('forums.profile', $idea->user->name) }}" data-user-card="{{ $idea->user->name }}" class="character-name">{{ $idea->user->name }}</a>
                                                                <div role="heading" class="user-post-count">{{ $idea->user->countForum()->count() }} сообщение</div>
                                                            </div>
                                                            <div class="secondary-details">
                                                                <span class="user-title">Community Manager</span>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post-infos">
                                                    <div class="post-info post-date">
                                                        <a class="post-date" href="{{ route('idea.show', $idea) }}" data-share-url="{{ route('idea.show', $idea) }}" data-post-number="1"><span title="{{ $idea->created_at->diffForHumans() }}" data-time="1649966367518" data-format="tiny" class="relative-date">{{ $idea->created_at->diffForHumans() }}</span></a>
                                                    </div>
                                                    <div class="read-state read" title="Сообщение не прочитано">
                                                        <svg class="fa d-icon d-icon-circle svg-icon svg-node" aria-hidden="true"><use xlink:href="#circle"></use></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="regular contents">
                                                <div class="cooked">{!! nl2br(e($idea->description)) !!}</div>
                                                <div></div>
                                                <section class="post-menu-area clearfix">
                                                    <nav class="post-controls expanded">
                                                        <div class="actions">
                                                            <div class="double-button">
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
                                                            </div>
                                                            <button class="widget-button btn share no-text btn-icon" title="Поделиться ссылкой на сообщение" data-share-url="/ru/overwatch/t/%D0%BD%D0%B5%D1%82%D1%83-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%D0%B7%D0%B0-%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D1%83-%D0%B2-%D0%B0%D1%80%D0%BA%D0%B0%D0%B4%D0%B0/36134" data-post-number="1"><svg class="fa d-icon d-icon-link svg-icon svg-node" aria-hidden="true"><use xlink:href="#link"></use></svg>
                                                            </button>
                                                            <button @click.prevent="$dispatch('custom-show-mark-idea-as-spam-modal')"
                                                                    class="widget-button btn create-flag no-text btn-icon"
                                                                    title="Незаметно сообщить или пожаловаться модератору">
                                                                <svg class="fa d-icon d-icon-flag svg-icon svg-node" aria-hidden="true"><use xlink:href="#flag"></use></svg>
                                                            </button>
                                                            <button class="widget-button btn bookmark with-reminder no-text btn-icon" title="Добавить сообщение в закладки"><svg class="fa d-icon d-icon-bookmark svg-icon svg-node" aria-hidden="true"><use xlink:href="#bookmark"></use></svg>
                                                            </button>
                                                            @if($idea->status_id != 5)
                                                            <button @click="
                                                                isOpen = !isOpen
                                                                if (isOpen) {
                                                                    $nextTick(() => $refs.comment.focus())
                                                                }
                                                            " class="widget-button btn reply create fade-out btn-icon-text" title="Ответить на это сообщение">
                                                                <svg class="fa d-icon d-icon-reply svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-reply-all"></use></svg><span class="d-button-label">Ответить</span>
                                                            </button>
                                                            @endif
                                                        </div>
                                                    </nav>
                                                </section>
                                            </div>
                                            <div class="post-links-container"></div>
                                            <div class="topic-map">
                                                <section class="map map-collapsed">

                                                    <ul class="clearfix">
                                                        <li class="replies">
                                                            <span class="number">{{ $idea->comments()->count() }}</span>
                                                            <h4 role="presentation">ответа</h4>
                                                        </li>
                                                        <li class="secondary views" wire:ignore>
                                                            <span class="number">{{ $idea->views }}</span>
                                                            <h4 role="presentation">просмотра</h4>
                                                        </li>
                                                    </ul>
                                                    @admin
                                                    <nav
                                                        x-init="
                                                          Livewire.on('statusWasUpdated', () => {
                                                            isOpenStatus = false
                                                          })

                                                          Livewire.on('statusWasUpdatedError', () => {
                                                            isOpenStatus = false
                                                          })" class="buttons">
                                                        <button type="button"
                                                                @click="isOpenStatus = !isOpenStatus" class="widget-button btn btn no-text btn-icon" title="раскрыть подробности
            о теме">
                                                            <svg class="fa d-icon d-icon-chevron-down svg-icon svg-node" aria-hidden="true"><use xlink:href="#chevron-down"></use></svg>
                                                        </button>
                                                    </nav>
                                                    @endadmin
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <livewire:forum.idea-comments :idea="$idea" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div role="region" id="topic-footer-buttons" class="ember-view">
        <div class="topic-footer-main-buttons">
            <span id="ember3478" class="topic-admin-menu-button-container ember-view"><span></span></span>

            <!---->
            <button aria-label="Поделиться" title="Поделиться ссылкой на эту тему" id="topic-footer-button-share-and-invite" class="btn-default topic-footer-button share-and-invite btn btn-icon-text ember-view" type="button"><svg class="fa d-icon d-icon-link svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#link"></use></svg><span class="d-button-label">Поделиться<!----></span>
            </button>
            <button aria-label="Закладки" title="Щелкните, чтобы добавить в закладки первое сообщение этой темы" id="topic-footer-button-bookmark" class="btn-default topic-footer-button bookmark btn btn-icon-text ember-view" type="button"><svg class="fa d-icon d-icon-bookmark svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#bookmark"></use></svg><span class="d-button-label">Закладки<!----></span>
            </button>
            <button @click.prevent="$dispatch('custom-show-mark-idea-as-spam-modal')" aria-label="Пожаловаться"
                    title="Незаметно сообщить или пожаловаться модератору" id="topic-footer-button-flag" class="btn-default topic-footer-button flag-topic btn btn-icon-text ember-view" type="button"><svg class="fa d-icon d-icon-flag svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#flag"></use></svg><span class="d-button-label">Пожаловаться<!----></span>
            </button>

            <!---->
            @if($idea->status_id != 5)
            <button @click="
            isOpen = !isOpen
            if (isOpen) {
                $nextTick(() => $refs.comment.focus())
            }" title="Ответить в этой теме" id="ember3483" class="btn-primary create btn btn-icon-text ember-view"
            type="button"><svg class="fa d-icon d-icon-reply svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#blizzard-reply-all"></use></svg><span class="d-button-label">Ответить<!----></span>
            </button>
            @endif
            <!---->
        </div>

    </div>

    @guest
        <div id="ember588" class="ember-view">
            <div class="signup-cta alert alert-info">
                <h3>Привет! Кажется, форум пришелся вам по душе, но вы все еще не зарегистрировались.</h3>
                <p>Когда у вас появится учетная запись, мы будем запоминать прочитанные вами темы и сообщения, чтобы вы могли продолжать с того места, где остановились. Кроме того, вы сможете получать уведомления о новых ответах на сайте и по электронной почте, а также ставить особые отметки понравившимся сообщениям. <img width="20" height="20" src="https://d2723j7i5e2etm.cloudfront.net/ru/overwatch/images/emoji/twitter/heartpulse.png?v=10" title="heartpulse" alt="heartpulse" class="emoji"></p>

                <div class="buttons">
                    <button wire:click="$emit('register')" class="btn-primary btn btn-icon-text ember-view"
                            type="button">
                        <svg class="fa d-icon d-icon-check svg-icon svg-string" xmlns="http://www.w3.org/2000/svg">
                            <use xlink:href="#check"></use></svg>
                        <span class="d-button-label">Регистрация<!----></span>
                    </button>
                    <button wire:click="$emit('login')" class="no-icon btn btn-text ember-view" type="button"><!---->
                        <span class="d-button-label">Авторизация<!----></span>
                    </button>
                </div>
            </div>
        </div>
    @endguest
</div>
