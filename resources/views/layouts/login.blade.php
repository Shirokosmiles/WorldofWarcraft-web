<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru-ru" class="ru-ru bnet-next" >
<head xmlns:og="http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#">
    <meta http-equiv="imagetoolbar" content="false" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Авторизация в Battle.net</title>
    <link rel="mask-icon" href="/login/static/images/toolkit/themes/bnet-next/meta/safari-pinned-tab.svg" color="#148eff">
    <meta name="msapplication-TileColor" content="#1c1e26">
    <meta name="msapplication-TileImage" content="/login/static/images/toolkit/themes/bnet-next/meta/ms-icon-150x150.png">
    <meta name="theme-color" content="#1c1e26">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script nonce="pTQLlGY0JT" type="text/javascript">
        var BlzCookieConsent = {
            host: 'battle.net',
            onetrustScriptUrl: '',
            whitelistedCookies: ['']
        }
    </script>
    <script src="{{ asset('static/js/gdpr/cookie-consent-filter-compat.2JYZj.js') }}" type="text/javascript" defer></script>
    <!--[if gt IE 8]><!--><link rel="stylesheet" type="text/css" media="all" href="{{ asset('static/css/toolkit/bnet-next-web.3G8Tg.css') }}" /><!-- <![endif]-->
    <!--[if IE 8]><link rel="stylesheet" type="text/css" media="all" href="{{ asset('static/css/toolkit/bnet-next-web-ie8.css') }}?v=58-1" /><![endif]-->
    <link rel="stylesheet" type="text/css" media="all" href="{{ asset('static/css/login/global.2rgu4.css') }}?v=1" />
    <link rel="stylesheet" type="text/css" media="all" href="{{ asset('static/css/nav-client/nav-client.26C4w.css') }}" />
    <link rel="stylesheet" type="text/css" media="(max-width:800px)" href="{{ asset('static/css/nav-client/nav-client-responsive.2L8V6.css') }}" />
    <!--[if IE 8]>
    <link rel="stylesheet" type="text/css" media="all" href="{{ asset('static/css/login/ie8.3AZrx.css') }}" />
    <![endif]-->
    <link rel="search" type="application/opensearchdescription+xml" href="https://eu.battle.net/ru-ru/data/opensearch" title="" />
    <script type="text/javascript" src="{{ asset('static/js/third-party/jquery.4Zl4x.js') }}?v=58-1"></script>
    <script type="text/javascript" src="{{ asset('static/js/toolkit/toolkit.0r0f1.js') }}?v=58-1"></script>
    <script type="text/javascript" src="{{ asset('static/js/core.2Xqd1.js') }}?v=58-1"></script>
    <meta name="viewport" content="width=device-width" />
</head>
<body class = "eu ru-ru login-template bam wow bnet-next tk-bnet-next ce-standalone-browser "
      data-embedded-state = "STATE_LOGIN"
      data-baseUrl = "/login/ru"
      data-cdnUrl = "//akamai-http.web.blizzard.net/content"
      data-staticUrl = "/static"
      data-sharedStaticUrl = "/static/local-common"
      data-secureSupportUrl = "https://eu.battle.net/support/"
      data-project = "login"
      data-projectUrl = "/login"
      data-locale = "ru-ru"
      data-language = "ru"
      data-region = "eu"
      data-loggedIn = "false"
      data-userAgent = "web"
      data-client-environment = "standalone-browser"
      data-autofocus-enabled = "true"
      data-tagManagerAccount = "GTM-589KTQ"
      data-gtmDataLayer = "[{'userAgent':'web','analyticsRequestUri':'/login/ru/','theme':'bnet-next','errorCode':'','state':'STATE_LOGIN'}]"
      data-nonce = "pTQLlGY0JT"
      data-srp-script-url = "{{ asset('static/js/login/0.srp6a-routines.worker.1PBfF.js') }}"
      data-pw-v2-worker-url = "{{ asset('static/js/login/upgrade-verifier.worker.39zo7.js') }}"
      data-v2-password-js = "{{ asset('static/js/login/account-password.0702N.js') }}"
      data-scrollbar = "false"
      data-network-error-message="Проверьте соединение с сетью и попробуйте еще раз." >
<script type="text/javascript" src="{{ asset('static/js/login/analytics.1qPhL.js') }}?v=58-1"></script>
<div class="grid-container wrapper">
    {{ $slot }}
    <img src="{{ asset('static/images/toolkit/themes/bnet/icons/sprite-24-red.0PPlX.png') }}" class="hide" />
    <img src="{{ asset('static/images/toolkit/themes/bnet/spinners/spinner-battlenet.1IdwV.png') }}" class="hide" />
    <footer id="footer" class="footer ru-ru">
        <div id="nav-client-footer" class="nav-client">
            <div class="mobileFooterEnabled footer-content footer-desktop grid-container">
                <div class="nav-section support-feedback">
                    <div class="nav-left">
                        <div id="nav-feedback">
                        </div>
                    </div>
                </div>
                <div class="nav-section">
                    <div class="nav-left nav-logo-group">
                        <div class="footer-links nav-left">
                            <a class="nav-item nav-a" href="https://www.blizzard.com/company/legal/eula" data-analytics="global-nav" data-analytics-placement="Footer - eula">Пользовательское соглашение Blizzard</a>
                            <span>|</span>
                            <a class="nav-item nav-a" href="https://www.blizzard.com/company/about/privacy.html" data-analytics="global-nav" data-analytics-placement="Footer - Privacy">Политика конфиденциальности</a>
                            <span>|</span>
                            <a class="nav-item nav-a" href="https://www.blizzard.com/company/legal/" data-analytics="global-nav" data-analytics-placement="Footer - Terms">Условия</a>
                            <span>|</span>
                            <a class="nav-item nav-a" href="https://eu.blizzard.com/company/about/infringementnotice.html" data-analytics="global-nav" data-analytics-placement="Footer - copyright">Авторское право</a>
                            <span>|</span>
                            <a class="nav-item nav-a" href="/login/cookies" data-analytics="global-nav" data-analytics-placement="Footer - Cookies">Файлы cookie</a>
                            <span>|</span>
                            <a class="nav-item nav-a" href="/login/cookies#settings" data-analytics="global-nav" data-analytics-placement="Footer - Cookie Settings">Параметры cookie</a>
                            <div class="copyright">© Blizzard Entertainment, Inc., 2012</div>
                            <div class="nav-footer-icon-container">
                                <ul class="nav-footer-icon-list">
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="nav-ratings">
                    </div>
                </div>
            </div>
            <div class="mobileFooterEnabled footer-content footer-mobile grid-container"> <div class="nav-logo-group">
                    <div class="footer-links">
                        <a class="nav-item nav-a" href="https://www.blizzard.com/company/legal/eula" data-analytics="global-nav" data-analytics-placement="Footer - eula">Пользовательское соглашение Blizzard</a>
                        <span>|</span>
                        <a class="nav-item nav-a" href="https://www.blizzard.com/company/about/privacy.html" data-analytics="global-nav" data-analytics-placement="Footer - Privacy">Политика конфиденциальности</a>
                        <span>|</span>
                        <a class="nav-item nav-a" href="https://www.blizzard.com/company/legal/" data-analytics="global-nav" data-analytics-placement="Footer - Terms">Условия</a>
                        <span>|</span>
                        <a class="nav-item nav-a" href="https://eu.blizzard.com/company/about/infringementnotice.html" data-analytics="global-nav" data-analytics-placement="Footer - copyright">Авторское право</a>
                        <span>|</span>
                        <a class="nav-item nav-a" href="/login/cookies" data-analytics="global-nav" data-analytics-placement="Footer - Cookies">Файлы cookie</a>
                        <span>|</span>
                        <a class="nav-item nav-a" href="/login/cookies#settings" data-analytics="global-nav" data-analytics-placement="Footer - Cookie Settings">Параметры cookie</a>
                    </div>
                    <div class="copyright">© Blizzard Entertainment, Inc., 2012</div>
                    <div class="nav-footer-icon-container">
                        <ul class="nav-footer-icon-list">
                        </ul>
                    </div>
                    <div class="nav-ratings">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal eu-cookie-compliance desktop hide" id="eu-cookie-compliance">
            <div class="modal-header">
                <a class="close" data-dismiss="modal" id="cookie-compliance-close"><i class="icon-remove icon-white"></i></a>
                <h1></h1>
            </div>
            <div class="modal-body">
                <p></p>
            </div>
            <button class="btn btn-primary" id="cookie-compliance-agree"></button>
            <a class="btn" id="cookie-compliance-learn" href="https://www.blizzard.com/company/about/privacy.html" target="_blank"></a>
        </div>
        <div class="modal eu-cookie-compliance mobile hide" id="eu-cookie-compliance">
            <div class="modal-body">
                <a class="close" data-dismiss="modal" id="cookie-compliance-close"><i class="icon-remove icon-white"></i></a>
                <p></p>
            </div>
            <button class="btn btn-primary" id="cookie-compliance-agree"></button>
            <a class="btn" id="cookie-compliance-learn" href="https://www.blizzard.com/company/about/privacy.html" target="_blank"></a>
        </div>
    </footer>
</div>
<script type="text/javascript" src="{{ asset('static/js/embedded-javascript/embed.0LR2R.js') }}?v=58-1"></script>
<script type="text/javascript" src="{{ asset('static/js/login/srp-client.4X4Jb.js') }}?v=1"></script>
<script type="text/javascript" src="{{ asset('static/js/toolkit/toolkit-password.2roF6.js') }}?v=1"></script>
<script type="text/javascript" src="{{ asset('static/js/login/global.2pXbb.js') }}"></script>
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
