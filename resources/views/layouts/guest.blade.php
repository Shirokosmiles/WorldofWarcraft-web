<!DOCTYPE html>
<html lang="ru-RU">
<head>
    <title>World of Warcraft</title>
    <script>var BlzCookieConsent = {
            host: "worldofwarcraft.com",
            onetrustScriptUrl: "https://cdn.cookielaw.org/langswitch/c25f2f14-8a44-40bb-a8b4-f09fd8647793.js"
        };</script>
    <script src="{{ asset('static/scripts/cookie-consent.min.js') }}?v=8.39.1" defer="true"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="referrer" content="no-referrer-when-downgrade">
    <meta name="description" content="Примкните к тысячам могучих героев Азерота в мире магии и бесконечных приключений!"/>
    @guest
    <script>var dataLayer = dataLayer || [];
        dataLayer.push({"locale":"ru-RU","serverRegion":"eu","region":"eu","localeRegion":"eu","project":"wow","authenticated":"0"});
    </script>
    @else
    <script>var dataLayer = dataLayer || [];
        dataLayer.push({"locale":"ru-RU","serverRegion":"eu","region":"eu","localeRegion":"eu","project":"wow", "authenticated":"1","userId":{{ Auth()->id() }},"hasGameTime":"0"});
    </script>
    @endguest
    <script>window.__WOW_UI_PUBLIC_PATH__ = "{{ asset('static') }}/"</script>
    <script src="{{ asset('static/core.60b6373f839d0fba77d1.js') }}"></script>

    <script id="init">window.trigger("init");</script>
    @vite([
    'resources/css/core.css',
    'resources/css/navbar.css',
    'resources/css/photoswipe.css',
    'resources/css/izimodal.css',
    'resources/css/simplebar.css'
    ])
    @stack("css")
    </head>
<body class="ru-ru">

<div class="body">
    <div class="page">
        <div class="BnetNav BnetNav--wow">
            <div class="Sticky BnetNav-sticky" media-nav="is-disabled">
                <div class="Sticky-content">
                    <div class="BnetNav-navbar">
                        <x-nav-site-header />
                    </div>
                </div>
            </div>
        </div>
        <x-nav-site-body />
        <span class="SkipLink-target" id="skip-link-target"></span>
        <main id="main" role="main">
            {{ $slot }}
        </main>
        <footer id="footer">
            @include('navigation.social')
            @include('navigation.footer')
        </footer>
    </div>
</div>
<x-photoswipe />
<script src="{{ asset('static/scripts/navbar.js') }}?v=8.39.1"></script>
@stack("scripts")
<script src="{{ mix('js/app.js') }}" defer></script>
<livewire:scripts/>
</body>
</html>
