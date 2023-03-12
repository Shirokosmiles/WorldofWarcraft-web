<div class="Pane Pane--above" data-lazyload-modifier="Pane--dirtDark">
    <div class="Pane-bg">
        <div class="Pane-overlay"></div>
    </div>
    <div class="Pane-content">
        <div class="SiteFooter">
            <div class="NavbarFooter min-height is-regionless has-cookies" id="global-navbar-footer" role="application" aria-label="Нижний колонтитул " data-hash="{{ csrf_token() }}" data-region-selection="none" data-region="eu" data-country="RU" data-geoip-service-url="https://navbar.blizzard.com/api/v6/nav/geoip" data-locale="ru-ru">
                <div id="Navbar-Footer-Dynamic-Template-Container">
                    <template id="Navbar-Footer-Dynamic-Template">
                        <div class="NavbarFooter-overlay" role="presentation"></div>
                        <div class="NavbarFooter-selector">
                            <div class="NavbarFooter-selectorToggle" tabindex="0" role="button" aria-haspopup="true" aria-label="Выберите язык">
                                <div class="NavbarFooter-icon NavbarFooter-selectorToggleIcon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-globe"></use></svg>
                                </div>
                                <label class="NavbarFooter-selectorToggleLabel">{{ config('app.locales.'.app()->getLocale()) }}</label>
                                <div class="NavbarFooter-icon NavbarFooter-selectorToggleArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-selector"></use></svg></div>
                            </div>
                            <div class="NavbarFooter-selectorDropdown" role="listbox">
                                <div class="NavbarFooter-selectorDropdownContainer">
                                    <div class="NavbarFooter-selectorCloser">
                                        <div class="NavbarFooter-selectorCloserAnchor">
                                            <div class="NavbarFooter-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-close"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="NavbarFooter-selectorLocales NavbarFooter-selectorSection">
                                        <div class="NavbarFooter-selectorSectionBlock">
                                            @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                                                <a class="NavbarFooter-selectorLocale @if(app()->isLocale($localeCode))
                                                is-active is-selected @endif NavbarFooter-selectorOption" hreflang="{{ $localeCode }}" role="option" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}" data-id="">
                                                    <div class="NavbarFooter-selectorOptionLabel">{{ $properties['native'] }}</div>
                                                    <div class="NavbarFooter-selectorOptionCheck NavbarFooter-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-check"></use></svg>
                                                    </div>
                                                </a>
                                            @endforeach
                                        </div>
                                        <div class="Navbar-modalClose Navbar-icon" data-target=".NavbarFooter-selectorToggle" aria-label="Закрыть меню" tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true"><use xlink:href="#Navbar-icon-close"></use></svg>
                                        </div>
                                    </div>
                                    <div class="NavbarFooter-selectorTick"></div>
                                </div>
                            </div>
                        </div>
                        <div style="display: none" class="NavbarFooter-downloadCta">
                            <div class="NavbarFooter-downloadCta-desktop">
                                <div class="NavbarFooter-downloadCta-text"></div>
                            </div>
                            <div class="NavbarFooter-downloadCta-mobile NavbarFooter-downloadCta-android">
                                <div class="NavbarFooter-downloadCta-text"></div>
                            </div>
                            <div class="NavbarFooter-downloadCta-mobile NavbarFooter-downloadCta-ios">
                                <div class="NavbarFooter-downloadCta-text"></div>
                            </div>
                        </div>
                        <div class="NavbarFooter-copyright">© Blizzard Entertainment, Inc., 2022</div>
                        <div class="NavbarFooter-trademark">Все упомянутые <a href="https://www.blizzard.com/legal/b04001c4-dc81-480d-a475-5e276e241e4f/" aria-label="Все упомянутые товарные знаки являются собственностью соответствующих владельцев.">товарные знаки</a> являются собственностью соответствующих владельцев.</div>
                        <div class="NavbarFooter-doNotSell NavbarFooter-trademark"
                        ><a href="https://www.blizzard.com/legal/a97631bf-2b21-4755-a740-5934bd5cb632/" aria-label="Do not sell my personal information" data-id="ccpa" data-analytics="global-nav" data-analytics-placement="Footer - ccpa">Do not sell my personal information</a></div>
                        <nav class="NavbarFooter-links NavbarFooter-subLinks">
                            <div role="presentation" class="NavbarFooter-link NavbarFooter-subLink NavbarFooter-privacy"><a href="https://www.blizzard.com/ru-ru/legal/8c41e7e6-0b61-42c4-a674-c91d8e8d68d3/" class="NavbarFooter-anchor" data-id="privacy" data-analytics="global-nav" data-analytics-placement="Footer - Privacy">Политика конфиденциальности</a></div><div role="presentation" class="NavbarFooter-link NavbarFooter-subLink NavbarFooter-legalLink"><a href="https://www.blizzard.com/legal/" class="NavbarFooter-anchor" data-id="legal" data-analytics="global-nav">Соглашения</a></div><div role="presentation" class="NavbarFooter-link NavbarFooter-subLink NavbarFooter-terms"><a href="https://www.blizzard.com/legal/511dbf9e-2b2d-4047-8243-4c5c65e0ebf1/" class="NavbarFooter-anchor" data-id="terms" data-analytics="global-nav" data-analytics-placement="Footer - Terms">Условия</a></div><div role="presentation" class="NavbarFooter-link NavbarFooter-subLink NavbarFooter-cookies"><a href="/cookies" class="NavbarFooter-anchor" data-id="cookies" data-analytics="global-nav" data-analytics-placement="Footer - Cookie Policy">Политика cookie</a></div><div role="presentation" class="NavbarFooter-link NavbarFooter-subLink NavbarFooter-cookies"><a href="/cookies#settings" class="NavbarFooter-anchor" data-id="cookies-settings" data-analytics="global-nav" data-analytics-placement="Footer - Cookie Settings">Параметры cookie</a></div></nav>
                        <nav class="NavbarFooter-legal" data-disable-additional="" data-disable-legal="" data-legal-id="5730135" data-legal-url="https://navbar.blizzard.com/api/v6/nav/rating"></nav>
                    </template>
                </div>
            </div>
        </div>
    </div>
</div>
