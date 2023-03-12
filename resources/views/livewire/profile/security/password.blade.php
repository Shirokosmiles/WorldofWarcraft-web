<div data-v-15d61d2e="" data-v-92744cae="" data-v-37d13747="" id="password-card" class="card mt-card-top
password-info" data-blz-addressable-by="password" x-data="{update: false}" x-cloak>
    <div data-v-15d61d2e="" class="card-title">
        <div data-v-92744cae="" data-v-15d61d2e="" class="row">
            <div data-v-92744cae="" data-v-15d61d2e="" class="col-12 col-md-6">
                <h3 data-v-92744cae="" data-v-15d61d2e="">@lang('security.security_2')</h3>
            </div>
            <div data-v-92744cae="" data-v-15d61d2e="" class="col-12 col-md-6">
                <a x-on:click="update = true" data-v-92744cae="" data-v-15d61d2e="" href="javascript:void(0)" class="card-header-link float-md-right">
                    <svg data-v-92744cae="" data-v-15d61d2e="" aria-hidden="true" focusable="false" data-prefix="fas"
                         data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pen fa-w-16"><path data-v-92744cae="" data-v-15d61d2e="" fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" class=""></path></svg>  @lang('security.security_3')
                </a>
            </div>
            <div data-v-92744cae="" data-v-15d61d2e="" class="col-sm-12 col-md-10 label description">
                <span data-v-92744cae="" data-v-15d61d2e="">@lang('security.security_4')</span>
            </div>
        </div>
    </div>
    <div data-v-15d61d2e="" class="card-body">
        <div data-v-92744cae="" data-v-15d61d2e="">
            <div data-v-92744cae="" data-v-15d61d2e="" id="placeholder-83" class="hide">
                <div data-v-92744cae="" data-v-15d61d2e="">
                    <div data-v-92744cae="" data-v-15d61d2e="" class="row mt-3 mt-sm-0">
                        <div data-v-92744cae="" data-v-15d61d2e="" class="col-4 col-sm-3 col-md-3 col-xl-2 label">
                             @lang('security.security_5')
                        </div>
                        <div data-v-92744cae="" data-v-15d61d2e="" class="col-8 col-sm-9 col-md-9 col-xl-10">
                            <span data-v-92744cae="" data-v-15d61d2e="" class="placeholder-l animated-background"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-92744cae="" data-v-15d61d2e="" class="" data-placeholder-id="placeholder-795e98c0-a9ff-11ec-a492-2b002b7a1b9f">
                <div x-show=!update data-v-92744cae="" data-v-15d61d2e="">
                    <div data-v-92744cae="" data-v-15d61d2e="" class="row mt-2 mt-sm-0">
                        <div data-v-92744cae="" data-v-15d61d2e="" class="col-sm-12 col-sm-3 col-md-3 col-xl-2 label">@lang('security.security_5')</div>
                        <div data-v-92744cae="" data-v-15d61d2e="" class="col-sm-12 col-sm-9 col-md-9
                        col-xl-10">@lang('security.security_6')</div>
                    </div>
                </div>
                <div x-show=update data-v-92744cae="" data-v-15d61d2e="" class="edit-info">
                    <x-jet-form-section submit="updateNewPassword" data-v-92744cae="" data-v-15d61d2e="" id="edit-password">

                        <x-slot name="form">
                            <div data-v-92744cae="" data-v-15d61d2e="" class="row">
                                <div data-v-92744cae="" data-v-15d61d2e="" class="col-sm-12 col-md-3 col-xl-2 label
                                tall-text">@lang('security.security_7')</div>
                                <div data-v-92744cae="" data-v-15d61d2e="" class="col-sm-12 col-md-6 col-xl-5 col-lg-7">
                                    <div data-v-75bcaa18="" data-v-92744cae="" class="blz-password input-block" data-v-15d61d2e="">
                                        <div data-v-75bcaa18="" class="password-reveal-wrapper">
                                            <input data-v-75bcaa18="" placeholder="@lang('security.security_8')"
                                                   type="password" wire:model.defer="state.current_password">
                                        </div>
                                    </div>
                                    <span data-v-92744cae="" data-v-15d61d2e="" class="is-error" style="display: none;"></span>
                                    <x-jet-input-error for="current_password" class="mt-2" />
                                </div>
                            </div>

                            <div data-v-92744cae="" data-v-15d61d2e="" class="row mt-3">
                                <div data-v-92744cae="" data-v-15d61d2e="" class="col-sm-12 col-md-3 col-xl-2 label
                                tall-text">@lang('security.security_9')</div>
                                <div data-v-92744cae="" data-v-15d61d2e="" class="col-sm-12 col-md-6 col-xl-5 col-lg-7">
                                    <div data-v-75bcaa18="" data-v-92744cae="" class="blz-password input-block" data-v-15d61d2e="">
                                        <div data-v-75bcaa18="" class="password-reveal-wrapper">
                                            <input data-v-75bcaa18="" placeholder="@lang('security.security_10')"
                                                   type="password" wire:model.defer="state.password">
                                        </div>
                                    </div>
                                    <span data-v-92744cae="" data-v-15d61d2e="" class="is-error" style="display: none;"></span>
                                    <x-jet-input-error for="password" class="mt-2" />
                                </div>
                            </div>

                        </x-slot>

                        <x-slot name="actions">
                            <div data-v-92744cae="" data-v-15d61d2e="" class="row mt-3">
                                <div data-v-92744cae="" data-v-15d61d2e="" class="col offset-md-3 offset-lg-3 offset-xl-2">
                                    <button data-v-312dd04b="" data-v-92744cae="" id="password-submit" class="btn-primary btn" type="submit" data-v-15d61d2e="">
                                        @lang('security.security_11')
                                    </button>

                                    <button x-on:click="update = false" data-v-312dd04b="" data-v-92744cae=""
                                            id="163159660" class="ml-md-3 mt-2 mt-md-0 btn-secondary btn" type="button" data-v-15d61d2e="">
                                        @lang('security.security_12')
                                    </button>

                                    <x-jet-action-message data-v-312dd04b="" data-v-92744cae="" class="ml-md-3 mt-2 mt-md-0 btn-secondary btn" on="saved">
                                        @lang('security.security_13')
                                    </x-jet-action-message>
                                </div>
                            </div>
                        </x-slot>
                    </x-jet-form-section>
                </div>
            </div>
        </div>
    </div>
</div>

