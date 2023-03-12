<div data-v-0bfa36f9="" class="overview-card col-12 col-xl-6">
    <div data-v-15d61d2e="" data-v-19975e4f="" data-v-0a034e2c="" id="913854269" class="card account-overview-details">
        <div data-v-15d61d2e="" class="card-title">
            <div data-v-19975e4f="" data-v-15d61d2e="" class="row">
                <div data-v-19975e4f="" data-v-15d61d2e="" class="col-12 col-md-8 col-lg-7">
                    <h3 data-v-19975e4f="" data-v-15d61d2e="">@lang('overview.details_1')</h3>
                </div>
                <div data-v-19975e4f="" data-v-15d61d2e="" class="col-12 col-md-4 col-lg-5">
                    <a data-v-19975e4f="" href="{{ route('details') }}" class="card-header-link float-md-right" data-v-15d61d2e="">
                        @lang('overview.details_2') <svg data-v-19975e4f="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path data-v-19975e4f="" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div data-v-15d61d2e="" class="card-body">
            <div data-v-19975e4f="" data-v-15d61d2e="" class="" data-placeholder-id="placeholder-ece0cb10-a9e6-11ec-9bc1-91dc7bb5220e">
                <div data-v-19975e4f="" data-v-15d61d2e="" class="row">
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="label col-12 col-md-4">
                        @lang('overview.details_3')
                    </div>
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="col-12 col-md-8">
                        <span data-v-19975e4f="" data-v-15d61d2e="">
                            {{ auth()->user()->full_name_hidden }}
                        </span>
                    </div>
                </div>
                <div data-v-19975e4f="" data-v-15d61d2e="" class="row mt-3 mt-md-3">
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="label col-12 col-md-4">
                        {{ config('app.name') }}Tag
                    </div>
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="col-12 col-md-8">
                        <span data-v-19975e4f="" data-v-15d61d2e="">
                            {{ auth()->user()->name }}
                        </span>
                    </div>
                </div>
                <div data-v-19975e4f="" data-v-15d61d2e="" class="row mt-3 mt-md-3">
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="label col-12 col-md-4">
                        @lang('overview.details_4')
                    </div>
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="col-12 col-md-8 text-truncate">
                        <span data-v-19975e4f="" data-v-15d61d2e="">
                            {{ auth()->user()->email_hidden }}
                        </span>
                    </div>
                </div>
                <div data-v-19975e4f="" data-v-15d61d2e="" class="row mt-3 mt-md-3">
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="label col-12 col-md-4">
                        @lang('overview.details_5')
                    </div>
                    <div data-v-19975e4f="" data-v-15d61d2e="" class="col-12 col-md-8">
                        <span data-v-19975e4f="" data-v-15d61d2e="">
                            {{ auth()->user()->phone_hidden }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
