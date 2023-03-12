<div x-init="
        Livewire.on('commentWasAdded', () => {
            isOpen = false
        })

        Livewire.hook('message.processed', (message, component) => {
            {{-- Pagination --}}
        if (['gotoPage', 'previousPage', 'nextPage'].includes(message.updateQueue[0].method)) {
            const firstComment = document.querySelector('.comment-container:first-child')
            firstComment.scrollIntoView({ behavior: 'smooth'})
        }

{{-- Adding Comment --}}
        if (['commentWasAdded', 'statusWasUpdated'].includes(message.updateQueue[0].payload.event)
         && message.component.fingerprint.name === 'idea-comments') {
            const lastComment = document.querySelector('.comment-container:last-child')
            lastComment.scrollIntoView({ behavior: 'smooth'})
            lastComment.classList.add('bg-green-50')
            setTimeout(() => {
                lastComment.classList.remove('bg-green-50')
            }, 5000)
        }
    })

@if (session('scrollToComment'))
        const commentToScrollTo = document.querySelector('#comment-{{ session('scrollToComment') }}')
            commentToScrollTo.scrollIntoView({ behavior: 'smooth'})
            commentToScrollTo.classList.add('bg-green-50')
            setTimeout(() => {
                commentToScrollTo.classList.remove('bg-green-50')
            }, 5000)
        @endif
        "
>


    <div         x-cloak
                 x-show.transition.origin.top.left="isOpen"
                 @click.away="isOpen = false"
                 @keydown.escape.window="isOpen = false" id="reply-control" class="open composer-action-reply
                 hide-preview ember-view">  <div class="grippie"></div>
        <div id="ember310" class="composer-popup-container ember-view"><!----></div>
        <div role="form" aria-label="Ответить" class="reply-area without-tags">
            <div class="composer-fields">
          <span id="ember311" class="ember-view">
              <div id="ember313" class="composer-open-outlet blizzard-staff-post ember-view"><!----></div>
        </span>
                <div class="reply-to">
                    <div class="reply-details">
                        <div id="ember314" class="composer-action-title ember-view">
                            <details id="ember315" class="select-kit single-select dropdown-select-box composer-actions ember-view">
                                <summary aria-label="Выберите настройки фильтрации" name="Выберите настройки фильтрации" data-name="" role="listbox" id="ember315-header" class="select-kit-header single-select-header dropdown-select-box-header btn no-text btn-icon ember-view">
                                    <div class="select-kit-header-wrapper">
                                        <svg class="fa d-icon d-icon-share svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#share"></use></svg>
                                    </div>
                                </summary>

                                <div id="ember315-body" class="select-kit-body ember-view" style="position: relative;"><!----></div>
                            </details>

                            <span class="action-title">
                              <a class="topic-link"
                                 href="{{ route('idea.show', $idea) }}" data-topic-id="{{ $idea->id }}">
                                  {{ $idea->title }}
                              </a>
                            </span>
                        </div>
                        <!---->

                        <!----><!---->
                        <!---->              </div>
                    <div class="composer-controls">
                        <span id="ember319" class="ember-view"><!----></span>

                        <!---->
                        <button @click="
            isOpen = !isOpen
        " tabindex="-1" title="Свернуть панель составителя" id="ember320" class="btn-flat toggler toggle-minimize
        btn-mini-toggle btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-chevron-down svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#chevron-down"></use></svg>​

                        </button>
                    </div>

                </div>
                <!---->
                <span id="ember322" class="ember-view">
                    <div id="ember324" class="composer-fields-outlet presence ember-view">
                        <div id="ember325" class="ember-view"><!----></div>
                    </div>
                </span>

            </div>

            <div id="ember326" class="toolbar-visible wmd-controls ember-view"><div id="ember327" class="d-editor ember-view"><div class="d-editor-container">
                        <div class="d-editor-textarea-wrapper  ">
                            <div class="d-editor-button-bar" role="toolbar">
                                <button tabindex="0" title="Процитировать сообщение целиком" id="ember330" class="quote btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-far-comment svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#far-comment"></use></svg>​

                                </button>
                                <button tabindex="-1" title="Жирный (Ctrl+B)" id="ember332" class="bold btn btn-text ember-view" type="button"><!----><span class="d-button-label">Ж<!----></span>
                                </button>
                                <button tabindex="-1" title="Курсив (Ctrl+I)" id="ember334" class="italic btn btn-text ember-view" type="button"><!----><span class="d-button-label">К<!----></span>
                                </button>

                                <div class="d-editor-spacer"></div>
                                <button tabindex="-1" title="Гиперссылка (Ctrl+K)" id="ember337" class="link btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-link svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#link"></use></svg>​

                                </button>
                                <button tabindex="-1" title="Цитата (Ctrl+Shift+9)" id="ember339" class="blockquote btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-quote-right svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#quote-right"></use></svg>​

                                </button>
                                <button tabindex="-1" title="Отформатированный текст (Ctrl+E)" id="ember341" class="code btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-code svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#code"></use></svg>​

                                </button>

                                <div class="d-editor-spacer"></div>
                                <button tabindex="-1" title="Маркированный список (Ctrl+Shift+8)" id="ember344" class="bullet btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-list-ul svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#list-ul"></use></svg>​

                                </button>
                                <button tabindex="-1" title="Нумерованный список (Ctrl+Shift+7)" id="ember346" class="list btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-list-ol svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#list-ol"></use></svg>​

                                </button>
                                <button tabindex="-1" title="Эмодзи :)" id="ember348" class="emoji insert-emoji btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-far-smile svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#far-smile"></use></svg>​

                                </button>
                                <button tabindex="-1" title="Вставить дату и время" id="ember350" class="local-dates btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-calendar-alt svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#calendar-alt"></use></svg>​

                                </button>
                                <details id="ember352" class="options select-kit single-select dropdown-select-box toolbar-popup-menu-options ember-view">  <summary aria-label="Выберите настройки фильтрации" name="Выберите настройки фильтрации" data-name="" tabindex="-1" role="listbox" id="ember352-header" class="select-kit-header single-select-header dropdown-select-box-header btn no-text btn-icon ember-view"><div class="select-kit-header-wrapper">
                                            <svg class="fa d-icon d-icon-cog svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#cog"></use></svg>

                                            <!---->

                                            <!---->  ​
                                        </div>
                                    </summary>

                                    <div id="ember352-body" class="select-kit-body ember-view" style="position: relative;"><!----></div></details>

                                <!---->    </div>

                            <div id="ember354" class="loading-container ember-view">
                            </div>
                            <textarea wire:model="comment" aria-label="Введите сообщение в формате Markdown, BBCode
                            и HTML." autocomplete="discourse" placeholder="Введите сообщение в формате Markdown, BBCode и HTML." id="ember355" class="d-editor-input ember-text-area ember-view"></textarea>
                            <div role="alert" id="ember356" class="popup-tip bad hide ember-view"><span class="close"><svg class="fa d-icon d-icon-times-circle svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#times-circle"></use></svg></span>Сообщение не может быть пустым
                            </div>
                            <div id="ember359" class="after-d-editor-outlet show-required ember-view"><div id="ember360" class="characters-required ember-view">  Требуется не менее 20 символов
                                </div>
                            </div>

                        </div>

                        <div class="d-editor-preview-wrapper ">
                            <div class="d-editor-preview">
                                <!---->
                            </div>
                            <span id="ember361" class="d-editor-plugin ember-view"><!----></span>
                        </div>
                    </div>

                    <!---->
                </div>

                <!----></div>

            <span id="ember363" class="ember-view"><!----></span>
            <div class="submit-panel">
                <span id="ember364" class="ember-view"><!----></span>

                <div class="save-or-cancel">
                    <button wire:click="addComment" title="Или нажмите Ctrl++Enter" id="ember365" class="btn
                     btn-icon-text btn-primary create ember-view" type="button"><svg class="fa d-icon d-icon-reply svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#blizzard-reply-all"></use></svg><span class="d-button-label">Ответить<!----></span>
                    </button>

                    <a @click="
            isOpen = !isOpen
        " class="cancel" data-ember-action="" data-ember-action-366="366">Отмена</a>

                    <!---->
                    <!---->            <div id="draft-status">
                        <!---->            </div>
                    <span id="ember367" class="ember-view"><!----></span>
                </div>

            </div>
        </div>
    </div>
</div>
