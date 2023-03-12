<div class="VideoPane VideoPane--fadeBottom VideoPane--disabled" media-wide="VideoPane--underSiteNav !VideoPane--disabled">
    <div class="VideoPane-bg">
        <video class="VideoPane-video" src="{{ $content->video }}" data-src="{{ $content->video }}" loop="loop" muted="muted" autoplay="autoplay" playsinline="playsinline"></video>
        <div class="VideoPane-overlay"></div>
        <div class="VideoPane-fallback BackgroundVideo-fallback" style="background-image: url('{{ $content->images }}');"></div>
    </div>
    <div class="VideoPane-content">
        <div class="gutter-normal gutter-negative" media-wide="hide">
            <div class="Art Art--fadeBottom" style="margin-bottom:-52.5%;">
                <div class="Art-size" style="padding-top:90%"></div>
                <div class="Art-image" style="background-image:url({{ $content->phone_images }});"></div>
                <div class="Art-overlay"></div>
            </div>
        </div>
        <div class="hide" media-wide="!hide">
            <div class="space-huge"></div>
            <div class="space-large"></div>
        </div>
        <div class="align-left">
            <livewire:web.main.video-pane-content />
        </div>
        <div class="hide" media-wide="!hide">
            <div class="space-large"></div>
        </div>
        <div class="space-large" media-wide="space-huge"></div>
        <div class="List List--gutters">
            <div class="List-item font-semp-small-white text-upper">Последние новости</div>
            <div class="List-item fontFamily-blizzard">
                <a class="Link Link--text" href="{{ route('web.post.index') }}" data-analytics="homepage-panel"
                   data-analytics-placement="News || Home - View All News">Все новости</a>
            </div>
        </div>
        <livewire:web.posts />
        <div class="space-normal"></div>
    </div>
</div>
