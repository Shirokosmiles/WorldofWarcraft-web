<x-login-layout>
    <div class="box-wrapper ">
        <div class="box-wrapper-inner">
            <h1 class="logo ">Авторизация в Battle.net</h1>
            <div class="hide" id="info-wrapper">
                <h2><strong class="info-title"></strong></h2>
                <p class="info-body"></p>
                <button class="btn btn-block hide visible-phone" id="info-phone-close">Закрыть</button>
            </div>
            <div class="input" id="login-wrapper">
                <div class="login">
                    <form
                        action="{{ route('login') }}"
                        method="post"
                        id="password-form"
                        novalidate="novalidate"
                        class="username-required input-focus form-with-captcha">
                        <div id="login-input-container" class="">
                            <div
                                id="js-errors"
                                class="alert alert-error alert-icon hide"
                                role="alert"
                                aria-relevant="additions removals"
                                data-support-aria="Перейти по ссылке сайта поддержки, внешней ссылке."
                            >
                                <p id="cookie-check" class="hide">В вашем браузере отключены cookies. Чтобы перейти к следующей странице, пожалуйста, подключите их.</p>
                            </div>
                            <noscript>
                                <div id="javascript-disabled" class="alert alert-error alert-icon">
                                </div>
                            </noscript>
                            @if ($errors->any())
                                <div id="display-errors" class="alert alert-warning alert-icon" role="alert" aria-relevant="additions removals" tabindex="0" style="display: block;">
                                    @foreach ($errors->all() as $error)
                                    <p class="error-message-heading">{{ $error }}</p>
                                    @endforeach
                                </div>
                            @endif
                            <div class="control-group ">
                                <label id="email-label" class="control-label"
                                       for="email">Электронная почта</label>
                                <div class="controls">
                                    <input
                                        id="email"
                                        aria-label="Поле электронной почты. Введите электронный адрес."
                                        value="{{ old('email') }}"
                                        name="email"
                                        title="Электронная почта"
                                        maxlength="320"
                                        type="text"
                                        tabindex="0"
                                        class="input-block "
                                        placeholder="Электронная почта"
                                        autocorrect="off"
                                        spellcheck="false"
                                    />
                                    <span class="input-after"></span>

                                    @error('email')<span class="error-helper error-helper-accountName status-error">{{
                                    $message }}</span>@enderror
                                </div>
                            </div>
                            <div class="control-group ">
                                <label id="password-label" class="control-label"
                                       for="password">Пароль</label>
                                <div class="controls">
                                    <input
                                        id="password"
                                        aria-label="Поле пароля. Введите пароль."
                                        name="password"
                                        title="Пароль"
                                        maxlength="128"
                                        type="password"
                                        tabindex="0"
                                        class="input-block "
                                        autocomplete="off"
                                        placeholder="Пароль"
                                        autocorrect="off"
                                        spellcheck="false"
                                        data-password-show-aria="Показать пароль" data-password-hide-aria="Скрыть пароль"
                                    />
                                    <span class="input-after"></span>
                                    @error('password')<span class="error-helper error-helper-password status-warning">{{ $message }}</span>@enderror
                                </div>
                            </div>
                            <div class="persistWrapper">
                                <label id="persistLogin-label" class="checkbox-label css-label hide" for="persistLogin">
                                    <input
                                        aria-labelledby="persistLogin-label"
                                        id="persistLogin"
                                        name="persistLogin"
                                        type="checkbox"
                                        checked="checked"
                                        tabindex="0"
                                    />
                                    <span class="input-checkbox"></span>
                                    Оставаться в сети
                                </label>
                            </div>
                        </div>
                        <div class="control-group submit no-cancel">
                            <button
                                type="submit"
                                id="submit"
                                class="btn-block btn btn-primary submit-button btn-block "
                                data-loading-text=""
                                tabindex="0"
                                aria-label="Авторизация"
                            >
                                Авторизоваться
                                <i class="spinner-battlenet"></i>
                            </button>
                        </div>
                        @csrf
                    </form>
                    <div class="thirdparty-line">
                        <span>или</span>
                    </div>

                    <ul id="help-links" role="navigation">
                        <li role="link">
                            <a rel="internal"
                               href="{{ route('register') }}"
                               tabindex="0"
                               id="signup"
                               role="button"
                            >
                                Зарегистрируйте учетную запись бесплатно
                            </a>
                        </li>
                        @if (Route::has('password.request'))
                        <li role="link">
                            <a rel="internal"
                               target="_blank"
                               href="{{ route('password.request') }}"
                               tabindex="0"
                               id="loginSupport"
                               role="button"
                            >
                                Вы не можете войти?
                            </a>
                        </li>
                        @endif
                    </ul>
                </div>
            </div>
        </div>
    </div>
</x-login-layout>
