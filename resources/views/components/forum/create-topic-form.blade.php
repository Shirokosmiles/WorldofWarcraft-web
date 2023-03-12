@guest
    <div class="Section Section--secondary is-hidden">
        <div class="CreateTopic-container">
            <div class="LoginPlaceholder" id="create-topic">
                <header class="LoginPlaceholder-header">
                    <h1 class="LoginPlaceholder-heading">Обсудить</h1>
                    <a class="TopicForm-button--close" data-trigger="create.topicpost.forum" data-forum-button="true"></a>
                </header>
                <div class="LoginPlaceholder-content">
                    <aside class="LoginPlaceholder-author">
                        <div class="Author" id="" data-topic-post-body-content="true">
                            <div class="Author-avatar Author-avatar--default"></div>
                            <div class="Author-details">
                                <span class="Author-name is-blank"></span>
                                <span class="Author-posts is-blank"></span>
                            </div>
                        </div>
                        <div class="Author-ignored is-hidden" data-topic-post-ignored-author="true">
                            <span class="Author-name"> </span>
                            <div class="Author-posts Author-posts--ignored">проигнорировано</div>
                        </div>
                    </aside>
                    <div class="LoginPlaceholder-details">
                        <div class="LogIn-message">Вам есть что сказать? Авторизуйтесь, чтобы создать тему.</div>
                        <a class="LogIn-button" href="{{ route('login') }}">
                            <span class="LogIn-button-content" >Авторизация</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@else
    <div x-show=openForm @click.away="openForm = false" class="Section Section--secondary">
        <div class="CreateTopic-container">
            <div class="TopicForm TopicForm-group--isActive TopicForm-group--isActivated TopicForm--create
                    is-hidden is-editing" data-topic-form="{'userId': {{ auth()->id() }}  }" id="create-topic">
                <header class="TopicForm-header">
                    <h1 class="TopicForm-heading">@lang('forum.New_Topic')</h1>
                    <a class="TopicForm-button--close" x-on:click="openForm = false"></a>
                </header>
                <div class="TopicForm-content">
                    <aside class="TopicForm-author" data-topic-form="{'userId': {{ Auth::user()->id }}  }">
                        <div class="Author" id="" data-topic-post-body-content="true">
                            <div class="Author-avatar Author-avatar--default"></div>
                            <div class="Author-details">
                                <span class="Author-name">
                                    <a class="Author-name--profileLink" href="characters">{{ Auth::user()->name }}</a>
                                </span>
                                <span class="Author-posts">
                                    <a class="Author-posts" href="#" data-toggle="tooltip"
                                       data-tooltip-content="@lang('forum.view_message_history')" data-original-title="" title="">
                                    @lang('forum.count_messages', ['count' => Auth::user()->posts_count])
                                    </a>
                                </span>
                            </div>
                        </div>
                    </aside>
                    <form class="Form" wire:submit.prevent="createValidate">
                        <div class="TopicForm-group">
                            <i class="Icon Icon-compose"></i>
                            <input type="text" wire:model="title" class="TopicForm-control TopicForm-control--subject TopicForm-subject" placeholder="Title" required />
                            <x-jet-input-error for="title" class="mt-2" />
                        </div>
                        <div wire:ignore class="TopicForm-group TopicForm-group-content">
                            <textarea class="TopicForm-control TopicForm-control--detail TopicForm-detail" wire:model.lazy="description" rows="10"></textarea>
                            <x-jet-input-error for="description" class="mt-2" />
                            <script>
                                tinymce.init({
                                    selector: '.TopicForm-detail',
                                    element_format : 'html',
                                    menubar: true,
                                    plugins: ['preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media codesample table charmap hr insertdatetime advlist lists wordcount imagetools textpattern help'],
                                    toolbar: 'undo redo | fontsizeselect | bold italic strikethrough | forecolor ' +
                                        'backcolor | link emoticons image media | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat',
                                    setup: function (editor) {
                                        editor.on('init change', function () {
                                            editor.save();
                                        });
                                        editor.on('change', function (e) {
                                        @this.set('description', editor.getContent());
                                        });
                                    },
                                });
                            </script>
                        </div>
                        <div class="CoolDownTimer-message" data-time-left="0" id="post-countdown">@lang('forum.CoolDownTimerMessage')</div>
                        <div class="TopicForm-action--buttons">
                            <button type="submit" wire:click="create" x-on:click="openForm = false,
                                    buttonDisabled = true" x-bind:disabled="buttonDisabled" class="TopicForm-button TopicForm-button--create" >
                                <span class="Button-content">@lang('forum.TopicFormButtonCreate')</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endguest
