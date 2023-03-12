<div x-cloak
     x-show.transition.origin.top.left="create"
     @click.away="create = false"
     @keydown.escape.window="create = false" id="reply-control" class="open composer-action-createTopic
             edit-title topic hide-preview ember-view">
    <div class="grippie"></div>
    <div id="ember844" class="composer-popup-container ember-view"><!----></div>

    <div role="form" aria-label="Создать тему" class="reply-area without-tags">
    <div class="composer-fields">
            <span id="ember845" class="ember-view">
              <div id="ember846" class="composer-open-outlet blizzard-staff-post ember-view"><!----></div>
            </span>
        <div class="reply-to">
            <div class="reply-details">
                <div id="ember847" class="composer-action-title ember-view">
                    <details id="ember848" class="select-kit single-select dropdown-select-box composer-actions ember-view">
                        <summary aria-label="Выберите настройки фильтрации" name="Выберите настройки фильтрации" data-name="" role="listbox" id="ember848-header" class="select-kit-header single-select-header dropdown-select-box-header btn no-text btn-icon ember-view">
                            <div class="select-kit-header-wrapper">
                                <svg class="fa d-icon d-icon-plus svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#plus"></use></svg>

                                <!---->

                                <!---->
                            </div>
                        </summary>

                        <div id="ember848-body" class="select-kit-body ember-view" style="position: relative;"><!----></div></details>

                    <span class="action-title">
                      Создать новую тему
                    </span>
                </div>
                <!---->

                <!----><!---->
                <!---->              </div>
            <div class="composer-controls">
                <span id="ember852" class="ember-view"><!----></span>

                <!---->
                <button @click="
            create = !create
        " tabindex="-1" title="Свернуть панель составителя" id="ember853" class="btn-flat toggler toggle-minimize
        btn-mini-toggle btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-chevron-down svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#chevron-down"></use></svg>

                </button>

            </div>

        </div>
        <!---->
        <div class="title-and-category ">

            <div id="ember855" class="title-input ember-view">
                <input wire:model.defer="title" aria-label="Суть в одном коротком предложении" maxlength="255" autocomplete="discourse" placeholder="Суть в одном коротком предложении" id="reply-title" class="ember-text-field ember-view" type="text">
                @error('title')>
                <div role="alert" id="ember856" class="popup-tip bad ember-view">
                    <span class="close">
                        <svg class="fa d-icon d-icon-times-circle svg-icon svg-string" xmlns="http://www.w3.org/2000/svg">
                            <use xlink:href="#times-circle"></use></svg>
                    </span>
                    {{ $message }}
                </div>
                @enderror
            </div>

            <div class="category-input">
                <details id="ember857" class="select-kit single-select combobox combo-box category-chooser ember-view">
                    <summary aria-label="Отфильтровать по: категория&amp;hellip;" name="Отфильтровать по: категория&amp;hellip;" data-name="категория&amp;hellip;" tabindex="0" role="listbox" id="ember857-header" class="">
                        <div class="select-kit-header-wrapper">
                            <!---->
                            <select wire:model="category" class="select-kit-header single-select-header combo-box-header ember-view">
                                <option>Выберите категорию</option>
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </summary>
                    @error('category')>
                    <div role="alert" id="ember856" class="popup-tip bad ember-view"><span class="close"><svg class="fa d-icon d-icon-times-circle svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#times-circle"></use></svg></span>{{ $message }}
                    </div>
                    @enderror
                    <div id="ember857-body" class="select-kit-body ember-view" style="position: relative;"><!----></div>
                </details>
                <div role="alert" id="ember859" class="popup-tip bad hide ember-view">
                    <span class="close"><svg class="fa d-icon d-icon-times-circle svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#times-circle"></use></svg></span>Необходимо выбрать категорию
                </div>
            </div>
            <!---->              </div>

        <span id="ember860" class="ember-view">  <div id="ember861" class="composer-fields-outlet presence ember-view"><div id="ember862" class="ember-view"><!----></div>
</div>
</span>

    </div>

    <div id="ember863" class="toolbar-visible wmd-controls ember-view">
        <div id="ember864" class="d-editor ember-view">
            <div class="d-editor-container">
                <div class="d-editor-textarea-wrapper  ">
                    <div class="d-editor-button-bar" role="toolbar">
                        <button tabindex="0" title="Процитировать сообщение целиком" id="ember867" class="quote btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-far-comment svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#far-comment"></use></svg>

                        </button>
                        <button tabindex="-1" title="Жирный (Ctrl+B)" id="ember869" class="bold btn btn-text ember-view" type="button"><!----><span class="d-button-label">Ж<!----></span>
                        </button>
                        <button tabindex="-1" title="Курсив (Ctrl+I)" id="ember871" class="italic btn btn-text ember-view" type="button"><!----><span class="d-button-label">К<!----></span>
                        </button>

                        <div class="d-editor-spacer"></div>
                        <button tabindex="-1" title="Гиперссылка (Ctrl+K)" id="ember874" class="link btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-link svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#link"></use></svg>

                        </button>
                        <button tabindex="-1" title="Цитата (Ctrl+Shift+9)" id="ember876" class="blockquote btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-quote-right svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#quote-right"></use></svg>

                        </button>
                        <button tabindex="-1" title="Отформатированный текст (Ctrl+E)" id="ember878" class="code btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-code svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#code"></use></svg>

                        </button>

                        <div class="d-editor-spacer"></div>
                        <button tabindex="-1" title="Маркированный список (Ctrl+Shift+8)" id="ember881" class="bullet btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-list-ul svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#list-ul"></use></svg>

                        </button>
                        <button tabindex="-1" title="Нумерованный список (Ctrl+Shift+7)" id="ember883" class="list btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-list-ol svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#list-ol"></use></svg>

                        </button>
                        <button tabindex="-1" title="Эмодзи :)" id="ember885" class="emoji insert-emoji btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-far-smile svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#far-smile"></use></svg>

                        </button>
                        <button tabindex="-1" title="Вставить дату и время" id="ember887" class="local-dates btn no-text btn-icon ember-view" type="button"><svg class="fa d-icon d-icon-calendar-alt svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#calendar-alt"></use></svg>

                        </button>
                        <details id="ember889" class="options select-kit single-select dropdown-select-box toolbar-popup-menu-options ember-view">
                            <summary aria-label="Выберите настройки фильтрации" name="Выберите настройки фильтрации" data-name="" tabindex="-1" role="listbox" id="ember889-header" class="select-kit-header single-select-header dropdown-select-box-header btn no-text btn-icon ember-view">
                                <div class="select-kit-header-wrapper">
                                    <svg class="fa d-icon d-icon-cog svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#cog"></use></svg>

                                    <!---->

                                    <!---->
                                </div>
                            </summary>

                            <div id="ember889-body" class="select-kit-body ember-view" style="position: relative;"><!----></div>
                        </details>

                        <!---->    </div>

                    <div id="ember891" class="loading-container ember-view">
                    </div>
                    <textarea wire:model.defer="description" aria-label="Введите сообщение в формате Markdown, BBCode
                     и HTML." autocomplete="discourse" placeholder="Введите сообщение в формате Markdown, BBCode и HTML." id="ember892" class="d-editor-input ember-text-area ember-view"></textarea>
                    @error('description')
                    <div role="alert" id="ember893" class="popup-tip bad ember-view"><span class="close"><svg class="fa d-icon d-icon-times-circle svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#times-circle"></use></svg></span>{{ $message }}</div>

                    @enderror
                    <div id="ember895" class="after-d-editor-outlet show-required ember-view"><div id="ember896" class="characters-required ember-view">  Требуется не менее 20 символов
                        </div>
                    </div>

                </div>

                <div class="d-editor-preview-wrapper ">
                    <div class="d-editor-preview">
                        <!---->
                    </div>
                    <span id="ember897" class="d-editor-plugin ember-view"><!----></span>
                </div>
            </div>

            <!---->
        </div>

        <!----></div>

    <span id="ember899" class="ember-view"><!----></span>
    <div class="submit-panel">
        <span id="ember900" class="ember-view"><!----></span>

        <div class="save-or-cancel">
            <button wire:click="createIdea" title="Или нажмите Ctrl++Enter" id="ember901" class="btn
            btn-icon-text btn-primary create ember-view" type="button"><svg class="fa d-icon d-icon-plus svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#plus"></use></svg><span class="d-button-label">Создать тему<!----></span>
            </button>

            <a @click="
            create = !create
        " class="cancel" data-ember-action="" data-ember-action-902="902">Отмена</a>

            <!---->
            <!---->            <div id="draft-status">
                <!---->            </div>
            <span id="ember903" class="ember-view"><!----></span>
        </div>

    </div>
</div>
</div>
