<div data-v-0bfa36f9="" class="overview-card col-12 col-xl-6">
    <div data-v-15d61d2e="" data-v-38b4c94e="" data-v-0a034e2c="" id="913854269" class="card account-overview-security">
        <div data-v-15d61d2e="" class="card-title">
            <div data-v-38b4c94e="" data-v-15d61d2e="" class="row">
                <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-12 col-md-6">
                    <h3 data-v-38b4c94e="" data-v-15d61d2e="">
                        @lang('overview.security_1')
                    </h3>
                </div>
                <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-12 col-md-6">
                    <a data-v-38b4c94e="" href="{{ route('security') }}" class="card-header-link float-md-right" data-v-15d61d2e="">
                        @lang('overview.security_2') <svg data-v-38b4c94e="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path data-v-38b4c94e="" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div data-v-15d61d2e="" class="card-body">
            <div data-v-38b4c94e="" data-v-15d61d2e="" class="row" data-placeholder-id="placeholder-ece0cb11-a9e6-11ec-9bc1-91dc7bb5220e">
                <div data-v-38b4c94e="" data-v-15d61d2e="" class="security-level col-12 col-md-5">
                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="security-level-indicator">
                        <div data-v-38b4c94e="" data-v-15d61d2e="" data-progress="{{ $progress }}" class="radial-progress">
                            <div data-v-38b4c94e="" data-v-15d61d2e="" class="circle">
                                <div data-v-38b4c94e="" data-v-15d61d2e="" class="mask full">
                                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="fill"></div>
                                </div>
                                <div data-v-38b4c94e="" data-v-15d61d2e="" class="mask half">
                                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="fill"></div>
                                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="fill fix"></div>
                                </div>
                                <div data-v-38b4c94e="" data-v-15d61d2e="" class="shadow"></div>
                            </div>
                            <div data-v-38b4c94e="" data-v-15d61d2e="" class="inset">
                                <div data-v-38b4c94e="" data-v-15d61d2e="" class="percentage percentage-full">%
                                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="security-level-complete">
                                        @lang('overview.security_3')</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-12 col-md-7">
                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="row mt-4 mt-md-0">
                        <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-3">
                            <span data-v-38b4c94e="" data-v-15d61d2e="" class="add-security @if($user['email_verified_at'])verified @endif">
                                <span data-v-38b4c94e="" data-v-15d61d2e="" @if(!$user['email_verified_at'])
                                class="cross" @endif></span>
                            </span>
                        </div>
                        <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-9 security-option">
                            @if($user['two_factor_secret'])
                                <div data-v-38b4c94e="" data-v-15d61d2e="">
                                    @lang('overview.security_4')
                                </div>
                            @else
                                <div data-v-38b4c94e="" data-v-15d61d2e="" style="">
                                    <a data-v-38b4c94e="" href="#" class="" data-v-15d61d2e="">
                                        @lang('overview.security_5')
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>
                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="row mt-3">
                        <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-3">
                            <span data-v-38b4c94e="" data-v-15d61d2e="" class="add-security @if($user['two_factor_secret'])verified @endif" style="">
                                <span data-v-38b4c94e="" data-v-15d61d2e="" @if(!$user['two_factor_secret'])
                                class="cross" @endif></span>
                            </span>
                        </div>
                        <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-9 security-option">
                            @if($user['two_factor_secret'])
                            <div data-v-38b4c94e="" data-v-15d61d2e="" style="">@lang('overview.security_6')</div>
                            @else
                                <div data-v-38b4c94e="" data-v-15d61d2e="" style="">
                                    <a data-v-38b4c94e="" href="#" class="" data-v-15d61d2e="">
                                        @lang('overview.security_7')
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>
                    <div data-v-38b4c94e="" data-v-15d61d2e="" class="row mt-3">
                        <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-3">
                            <span data-v-38b4c94e="" data-v-15d61d2e="" class="add-security @if($user['phone_number'])verified @endif">
                                <span data-v-38b4c94e="" data-v-15d61d2e="" @if(!$user['phone_number']) class="cross"
                                    @endif></span>
                            </span>
                        </div>
                        <div data-v-38b4c94e="" data-v-15d61d2e="" class="col-9 security-option">
                            @if($user['phone_number'])
                            <div data-v-38b4c94e="" data-v-15d61d2e="" style="">
                                @lang('overview.security_8')
                            </div>
                            @else
                            <div data-v-38b4c94e="" data-v-15d61d2e="" style="">
                                <a data-v-38b4c94e="" href="#" class="security-link" data-v-15d61d2e="">
                                    @lang('overview.security_9')
                                </a>
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
