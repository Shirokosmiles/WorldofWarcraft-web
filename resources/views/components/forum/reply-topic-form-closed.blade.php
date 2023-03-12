<section class="Section Section--secondary">
    <div data-topic-post="true" tabindex="0" class="TopicForm is-editing" id="topic-reply">
        <header class="TopicForm-header">
            <h1 class="TopicForm-heading">@lang('forum.TopicFormHeadingClosed')</h1>
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
            <div class="LoginPlaceholder-details">
                <div class="LogIn-message LogIn-message--center"> @lang('forum.thread_is_locked')</div>
            </div>
        </div>
    </div>
</section>
