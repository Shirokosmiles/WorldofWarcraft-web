<x-app-layout>
    <section class="main-content-section">
        <div data-v-37d13747="" class="security-overview">
            <div data-v-ba34107c="" data-v-37d13747="" class="title-bar text-center text-lg-left position-relative">
                <h1 data-v-ba34107c="">@lang('security.security_1')</h1>
                <div data-v-ba34107c="" class="back d-lg-none position-absolute">
                    <a data-v-ba34107c="" href="/" class="router-link-active"><svg data-v-ba34107c="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8"><path data-v-ba34107c="" fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg></a>
                </div>
            </div>
            <livewire:profile.security.password />
            @if(config('system.enable_authenticator'))
            <livewire:profile.security.authenticator />
            @endif
            <livewire:profile.security.activity />
            @if(config('system.enable_delete_account'))
            <livewire:profile.security.deleted />
            @endif
        </div>
    </section>
</x-app-layout>
