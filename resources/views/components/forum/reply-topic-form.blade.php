<section class="Section Section--secondary">
    <div data-topic-post="true" tabindex="0" class="TopicForm is-editing" id="topic-reply">
        <header class="TopicForm-header">
            <h1 class="TopicForm-heading">@lang('forum.TopicFormHeading')</h1>
        </header>
        <div class="TopicForm-content">
            <aside class="TopicForm-author" data-topic-form="{'userId': {{ auth()->id() }}}">
                <div class="Author" id="" data-topic-post-body-content="true">
                    <div class="Author-avatar Author-avatar--default"></div>
                    <div class="Author-details">
                        <span class="Author-name">
                            <a class="Author-name--profileLink" href="#">{{ Str::Title(Auth::user()->name) }}</a>
                        </span>
                    </div>
                </div>
                <div class="Author-ignored is-hidden" data-topic-post-ignored-author="true">
                    <span class="Author-name">
                        <a class="Author-name--profileLink" href="#">{{  auth()->user()->name }}</a>
                    </span>
                <div class="Author-posts Author-posts--ignored">@lang('forum.ignored')</div>
                </div>
            </aside>
            <form class="Form" wire:submit.prevent="createValidate">
                <div wire:ignore class="TopicForm-group TopicForm-group-content TopicForm-group--isActivated">
                    <textarea wire:model.lazy="description" rows="10" class="TopicForm-control needsclick TopicForm-control--detail"></textarea>
                    <script>
                        tinymce.init({
                            selector: '.TopicForm-control--detail',
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
                    <div class="PostForm-errors"><x-jet-input-error for="description" class="mt-2" /></div>
                </div>
                <div class="TopicForm-action--buttons">
                    <button wire:click="create" x-on:click="buttonDisabled = true"
                            x-bind:disabled="buttonDisabled" type="submit" class="TopicForm-button TopicForm-button--reply" id="submit-button">
                        <span class="Button-content">@lang('forum.TopicFormReply')</span>
                    </button>
                    <button type="button" data-topic-button="true" data-trigger="edit.topic.reply" class="TopicForm-button TopicForm-button--edit">
                        <span class="Button-content">@lang('forum.TopicFormEdit')</span></button>
                </div>
            </form>
        </div>
    </div>
</section>
