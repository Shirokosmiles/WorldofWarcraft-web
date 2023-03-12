<x-app-layout>
    <section class="main-content-section">
        <div data-v-0bfa36f9 class="account-overview">
            <div data-v-0bfa36f9 class="title-bar">
                <h1 data-v-0bfa36f9="">@lang('overview.account_overview')</h1>
            </div>
            <!---->
            <div data-v-0bfa36f9="" class="row">
                <livewire:profile.overview.reedem-code />
                <!---->
                <livewire:profile.overview.payment />
                <!---->
            </div>
            <!---->
            <div data-v-0bfa36f9="" class="row">
                <livewire:profile.overview.details />
                <!---->
                <livewire:profile.overview.security />
                <!---->
            </div>
            <!---->
            <div data-v-0bfa36f9="" class="row">
                <livewire:profile.games.index />
                <!---->
            </div>
            <!---->
            <div data-v-0bfa36f9="" class="row">
                <livewire:profile.overview.transactions />
                <!---->
            </div>
        </div>
    </section>
</x-app-layout>
