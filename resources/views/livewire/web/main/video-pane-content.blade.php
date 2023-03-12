<div media-small="gutter-vertical" media-large="!gutter-vertical">
    <div class="align-center" media-wide="!align-center">
        <h1 class="margin-none font-semp-xxxLarge-white text-upper">
            {{ $content->getTranslation('title', app()->getLocale()) }}
        </h1>
        <div class="contain-masthead" media-wide="contain-left">
            <div class="space-rhythm-medium"></div>
            <p class="margin-none font-bliz-light-medium-beige">{{ $content->getTranslation('body', app()->getLocale()) }}</p>
            @if($content->url_one)
            <div class="space-rhythm-medium"></div>
            <a class="Link" href="{{ $content->url_one }}">
                <div class="Link--underline font-bliz-light-medium-beige" data-text="{{ $content->getTranslation('url_one_title', app()->getLocale()) }}">
                    {{ $content->getTranslation('url_one_title', app()->getLocale()) }}
                </div>
            </a>
            @endif
            <div class="space-rhythm-large"></div>
            <div class="List List--gutters List--center List--vertical" media-large="!List--vertical" media-wide="!List--center List--left">
                @if($content->url_two)
                <a class="Link Button Button--ghost Panel-button" href="{{ $content->url_two }}" data-analytics="homepage-panel" data-analytics-placement="Blog: Raid Schedule">
                    <div class="Button-outer">
                        <div class="Button-inner">
                            <div class="Button-label" data-text="{{ $content->getTranslation('url_two_title', app()->getLocale()) }}">
                                {{ $content->getTranslation('url_two_title', app()->getLocale()) }}
                            </div>
                        </div>
                    </div>
                </a>
                @endif
                @if($content->url_tree)
                <a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="{{
                $content->url_tree }}" data-analytics="shop-link" data-analytics-placement="Shop: Subscribe">
                    <div class="Button-outer">
                        <div class="Button-inner">
                            <div class="Button-label" data-text="{{ $content->getTranslation('url_tree_title', app()->getLocale()) }}">
                                {{ $content->getTranslation('url_tree_title', app()->getLocale()) }}
                            </div>
                        </div>
                    </div>
                </a>
                @endif
            </div>
        </div>
    </div>
</div>
