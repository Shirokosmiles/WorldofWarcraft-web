@guest
    <button class="Forum-button Forum-button--new" id="toggle-create-topic" data-forum-button="true" data-trigger="create.topicpost.forum" type="button">
        <span class="Overlay-element"></span>
        <span class="Button-content"><i class="Icon"></i>@lang('forum.create_topic')</span></button>
@else
    @auth
        <button class="Forum-button Forum-button--new" x-on:click="openForm = true">
            <span class="Overlay-element"></span>
            <span class="Button-content"><i class="Icon"></i>@lang('forum.create_topic')</span>
        </button>
    @else
        <button class="Forum-button Forum-button--new" id="toggle-create-topic" disabled="disabled" data-toggle="tooltip" data-tooltip-content="Категория закрыта!" data-forum-button="true" data-trigger="create.topicpost.forum" type="button"><span class="Overlay-element" disabled="disabled" data-toggle="tooltip" data-tooltip-content="Категория закрыта!"></span><span class="Button-content"><i class="Icon"></i>@lang('forum.create_topic')</span></button>
    @endauth
@endguest
