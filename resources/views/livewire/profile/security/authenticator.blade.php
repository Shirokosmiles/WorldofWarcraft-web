<div data-v-15d61d2e="" data-v-09cc4f2a="" data-v-37d13747="" id="162037578" class="card mt-card-top authenticator" data-blz-addressable-by="authenticator">
    <div data-v-15d61d2e="" class="card-title">
        <div data-v-09cc4f2a="" data-v-15d61d2e="" class="row">
            <div data-v-09cc4f2a="" data-v-15d61d2e="" class="col-12 col-md-6">
                <h3 data-v-09cc4f2a="" data-v-15d61d2e="">Authenticator</h3>
            </div>
            <div data-v-09cc4f2a="" data-v-15d61d2e="" class="col-sm-12 col-md-10 label authenticator-sub-title">
                 @lang('security.security_14')
            </div>
        </div>
    </div>
    <div data-v-15d61d2e="" class="card-body">
        <div data-v-09cc4f2a="" data-v-15d61d2e="">
            <div data-v-09cc4f2a="" data-v-15d61d2e="" id="placeholder-82" class="hide">
                <div data-v-09cc4f2a="" data-v-15d61d2e="">
                    <div data-v-09cc4f2a="" data-v-15d61d2e="" class="row mt-3 mt-sm-0">
                        <div data-v-09cc4f2a="" data-v-15d61d2e="" class="col-4 col-sm-3 col-md-3 col-xl-2 label">
                             @lang('security.security_15')
                        </div>
                        <div data-v-09cc4f2a="" data-v-15d61d2e="" class="col-8 col-sm-9 col-md-9 col-xl-10">
                            <span data-v-09cc4f2a="" data-v-15d61d2e="" class="placeholder-l animated-background"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-09cc4f2a="" data-v-15d61d2e="" class="">
                <div data-v-09cc4f2a="" data-v-15d61d2e="">
                    <div data-v-6de7e15f="" data-v-09cc4f2a="" class="row no-gutters" data-v-15d61d2e="">
                        <div data-v-6de7e15f="" class="col-12 col-xl-2 col-md-3 col-sm-12 pr-xl-3 pr-md-3 label">
                            <div data-v-09cc4f2a="" data-v-6de7e15f="">@lang('security.security_15')</div>
                        </div>
                        <div data-v-6de7e15f="" class="col-12 col-xl-10 col-md-9 col-sm-12">
                            <div data-v-09cc4f2a="" data-v-6de7e15f="">
                                @if ($this->enabled)
                                    @if ($showingQrCode)
                                        <div class="mt-4 max-w-xl text-sm text-red-600">
                                            <p class="font-semibold">
                                                @lang('security.security_16')
                                            </p>
                                        </div>

                                        <div class="mt-4">
                                            {!! $this->user->twoFactorQrCodeSvg() !!}
                                        </div>
                                    @endif

                                    @if ($showingRecoveryCodes)
                                        <div class="mt-4 max-w-xl text-sm text-red-600">
                                            <p class="font-semibold">
                                                @lang('security.security_17')
                                            </p>
                                        </div>

                                        <div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-800 rounded-lg">
                                            @foreach (json_decode(decrypt($this->user->two_factor_recovery_codes), true) as $code)
                                                <div>{{ $code }}</div>
                                            @endforeach
                                        </div>
                                    @endif
                                @endif

                                @if (! $this->enabled)
                                    <x-jet-confirms-password wire:then="enableTwoFactorAuthentication">
                                        <x-jet-button data-v-312dd04b="" data-v-92744cae=""
                                                      class="ml-md-3 mt-2 mt-md-0 btn-secondary btn" type="button" data-v-15d61d2e="" wire:loading.attr="disabled">
                                            @lang('security.security_18')
                                        </x-jet-button>
                                    </x-jet-confirms-password>
                                @else
                                    @if ($showingRecoveryCodes)
                                        <x-jet-confirms-password wire:then="regenerateRecoveryCodes">
                                            <x-jet-button data-v-312dd04b="" data-v-92744cae=""
                                                          class="ml-md-3 mt-2 mt-md-0 btn-secondary btn" type="button" data-v-15d61d2e="" type="button">
                                                @lang('security.security_19')
                                            </x-jet-button>
                                        </x-jet-confirms-password>
                                    @else
                                        <x-jet-confirms-password wire:then="showRecoveryCodes">
                                            <x-jet-button data-v-312dd04b="" data-v-92744cae=""
                                                          class="btn-primary btn" type="submit" data-v-15d61d2e="">
                                                @lang('security.security_20')
                                            </x-jet-button>
                                        </x-jet-confirms-password>
                                    @endif

                                    <x-jet-confirms-password wire:then="disableTwoFactorAuthentication">
                                        <x-jet-danger-button data-v-312dd04b="" data-v-92744cae=""
                                                             class="ml-md-3 mt-2 mt-md-0 btn-secondary btn" type="button" data-v-15d61d2e="" wire:loading.attr="disabled">
                                            @lang('security.security_21')
                                        </x-jet-danger-button>
                                    </x-jet-confirms-password>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

