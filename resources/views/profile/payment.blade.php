<x-app-layout>
    <section class="main-content-section">
        <div data-v-a1d75ea0="" class="payment-overview">
            <div data-v-ba34107c="" data-v-a1d75ea0="" class="title-bar text-center text-lg-left position-relative">
                <h1 data-v-ba34107c="">@lang('overview.payment_2')</h1>
                <div data-v-ba34107c="" class="back d-lg-none position-absolute">
                    <a data-v-ba34107c="" href="/" class="router-link-active">
                        <svg data-v-ba34107c="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8"><path data-v-ba34107c="" fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
                    </a>
                </div>
            </div>
            <div data-v-15d61d2e="" data-v-0d6bdad4="" data-v-a1d75ea0="" id="12374229" class="card" data-blz-addressable-by="balance">
                <div data-v-15d61d2e="" class="card-title">
                    <div data-v-0d6bdad4="" data-v-15d61d2e="">
                        <h3 data-v-0d6bdad4="" data-v-15d61d2e="">@lang('overview.payment_1', ['name' => config('app.name')])</h3>
                    </div>
                </div>
                <div data-v-15d61d2e="" class="card-body">
                    <div data-v-0d6bdad4="" data-v-15d61d2e="">
                        <div data-v-6de7e15f="" data-v-0d6bdad4="" class="row no-gutters" data-v-15d61d2e="" data-placeholder-id="placeholder-d5f8f1b0-a9fb-11ec-a982-43fcef174ded">
                            <div data-v-6de7e15f="" class="col-12 col-xl-8 col-md-12 col-sm-12">
                                <div data-v-0d6bdad4="" data-v-6de7e15f="">
                                    <div data-v-6de7e15f="" data-v-0d6bdad4="" class="row no-gutters" stacked="never">
                                        <div data-v-6de7e15f="" class="col-12 col-xl-3 col-md-4 col-sm-12 pr-xl-3 pr-md-3 label">
                                            <div data-v-0d6bdad4="" data-v-6de7e15f="">@lang('overview.payment_3')</div>
                                        </div>
                                        <div data-v-6de7e15f="" class="col-12 col-xl-9 col-md-8 col-sm-12">
                                            <div data-v-0d6bdad4="" data-v-6de7e15f="" class="main-balance">
                                                {{ Auth::user()->balances }}&nbsp;₽</div>
                                        </div>
                                    </div>
                                    <div data-v-6de7e15f="" data-v-0d6bdad4="" class="row no-gutters mt-3 fade-under-review-balance" stacked="never">
                                        <div data-v-6de7e15f="" class="col-12 col-xl-3 col-md-4 col-sm-12 pr-xl-3 pr-md-3 label">
                                            <div data-v-0d6bdad4="" data-v-6de7e15f="">@lang('overview.payment_4')</div>
                                        </div>
                                        <div data-v-6de7e15f="" class="col-12 col-xl-9 col-md-8 col-sm-12">
                                            <div data-v-0d6bdad4="" data-v-6de7e15f="">0&nbsp;₽</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-6de7e15f="" class="col-12 col-xl-4 col-md-12 col-sm-12 pl-xl-3 text-xl-right side">
                                <div data-v-0d6bdad4="" data-v-6de7e15f="">
                                    <div data-v-6de7e15f="" data-v-0d6bdad4="" class="row no-gutters">
                                        <div data-v-6de7e15f="" class="col-12 col-xl-12 col-md-12 col-sm-12  side">
                                            <div data-v-0d6bdad4="" data-v-6de7e15f="" class="mt-3 mt-xl-0">
                                                <a data-v-0d6bdad4="" data-v-6de7e15f=""
                                                   class="management-link" href="{{ route('payment.create') }}"><svg data-v-0d6bdad4=""
                                                                                         data-v-6de7e15f="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-plus fa-w-12"><path data-v-0d6bdad4="" data-v-6de7e15f="" fill="currentColor" d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" class=""></path></svg>
                                                    @lang('overview.payment_5', ['name' => config('app.name')])
                                                </a>
                                                <a data-v-0d6bdad4="" data-v-6de7e15f="" target="_blank"
                                                   class="management-link mt-xl-3" href="#"><svg data-v-0d6bdad4="" data-v-6de7e15f="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="credit-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-credit-card fa-w-18"><path data-v-0d6bdad4="" data-v-6de7e15f="" fill="currentColor" d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z" class=""></path></svg>
                                                    @lang('overview.payment_6')
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-app-layout>
