<div data-v-15d61d2e="" data-v-06fe2774="" data-v-37d13747="" id="162037578" class="card mt-card-top mt-card-top" data-blz-addressable-by="recent-activity">
    <div data-v-15d61d2e="" class="card-title">
        <div data-v-06fe2774="" data-v-15d61d2e="" class="row">
            <div data-v-06fe2774="" data-v-15d61d2e="" class="col-12 col-md-9">
                <h3 data-v-06fe2774="" data-v-15d61d2e="">@lang('security.security_22')</h3>
            </div>
            <div data-v-06fe2774="" data-v-15d61d2e="" class="col-12 col-md-3">
                <a data-v-06fe2774="" data-v-15d61d2e="" href="javascript:void(0)" wire:click="confirmLogout"
                   class="card-header-link float-md-right">
                    @lang('security.security_23') <svg data-v-06fe2774="" data-v-15d61d2e="" aria-hidden="true"
                                                       focusable="false" data-prefix="fas" data-icon="sign-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sign-out fa-w-16"><path data-v-06fe2774="" data-v-15d61d2e="" fill="currentColor" d="M180 448H96c-53 0-96-43-96-96V160c0-53 43-96 96-96h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm117.9-303.1l77.6 71.1H184c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h191.5l-77.6 71.1c-10.1 9.2-10.4 25-.8 34.7l21.9 21.9c9.3 9.3 24.5 9.4 33.9.1l152-150.8c9.5-9.4 9.5-24.7 0-34.1L353 88.3c-9.4-9.3-24.5-9.3-33.9.1l-21.9 21.9c-9.7 9.6-9.3 25.4.7 34.6z" class=""></path></svg>
                </a>
            </div>
        </div>
    </div>

    <div data-v-15d61d2e="" class="card-subtitle">
        <div data-v-06fe2774="" data-v-15d61d2e="">
            <div data-v-cc173d72="" data-v-06fe2774="" class="alert-message info" data-v-15d61d2e="">
                <div data-v-cc173d72="" class="d-none icon"></div>
                <div data-v-cc173d72="" class="">
                    <h3 data-v-cc173d72="" class="uppercase"></h3>
                    <span data-v-06fe2774="">@lang('security.security_24')</span> <a data-v-06fe2774=""
                                                                                     href="javascript:void(0)">
                        @lang('security.security_25')
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div data-v-15d61d2e="" class="card-body">
        @if (count($this->sessions) > 0)
            <div data-v-06fe2774="" data-v-15d61d2e="" class="" data-placeholder-id="placeholder-15e4d880-eaed-11eb-b955-53958dd53a20">
                <div data-v-06fe2774="" data-v-15d61d2e="">
                    <table data-v-483e03c5="" data-v-06fe2774="" aria-busy="false" aria-colcount="4" class="devices-table table b-table table-dark" sort-direction="asc" data-v-15d61d2e="" id="__BVID__93_">
                        <thead class="thead-dark">
                        <tr>
                            <th aria-colindex="1" class="icon d-table-cell align-middle">Regional Franchise Icon</th>
                            <th aria-colindex="2" class="d-table-cell align-middle">Localized Name</th>
                            <th aria-colindex="3" class="d-none d-md-table-cell align-middle">Login Date</th>
                            <th aria-colindex="4" class="d-none d-md-table-cell align-middle">Login Location</th>
                        </tr>
                        </thead>
                        <tbody class="">
                        @foreach ($this->sessions as $session)
                            <tr class="">
                                <td aria-colindex="1" class="icon d-table-cell align-middle">
                                    <div data-v-06fe2774="">
                                        <img data-v-06fe2774="" src="{{ asset('static/game-icons/battle-net-web.svg') }}" class="d-block float-left">
                                    </div>
                                </td>
                                <td aria-colindex="2" class="d-table-cell align-middle">
                                    <div data-v-06fe2774="" class="text-light">Сайт</div>
                                    <div data-v-06fe2774="" class="label">{{ $session->agent->platform() }} - {{ $session->agent->browser() }}</div>
                                    <div data-v-06fe2774="" class="d-md-none">
                                        <span data-v-06fe2774="" class="text-light">{{ $session->last_active }}</span>
                                        <div data-v-06fe2774="" class="text-light">
                                <span data-v-06fe2774="">{{ $session->ip_address }}
                                <span data-v-06fe2774="">@if($session->city){{ $session->city }},@endif</span>
                                </span>
                                            <span data-v-06fe2774="">@if($session->region_name){{ $session->region_name }}@endif</span>
                                        </div>
                                    </div>
                                </td>
                                <td aria-colindex="3" class="d-none d-md-table-cell align-middle">
                                    <span data-v-06fe2774="" class="text-light">{{ $session->last_active }}</span>
                                </td>
                                <td aria-colindex="4" class="d-none d-md-table-cell align-middle">
                                    <div data-v-06fe2774="" class="text-light">
                            <span data-v-06fe2774="">{{ $session->ip_address }}
                            <span data-v-06fe2774="">@if($session->city){{ $session->city }},@endif</span>
                            </span> <span data-v-06fe2774="">@if($session->region_name){{ $session->region_name }}@endif</span>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    <div data-v-06fe2774="" data-v-15d61d2e="" class="label total-logins">
                        @lang('security.security_26')
                    </div>
                </div>
            </div>
        @endif

        <x-jet-dialog-modal wire:model="confirmingLogout">
            <x-slot name="title">
                {{ __('Log Out Other Browser Sessions') }}
            </x-slot>

            <x-slot name="content">
                {{ __('Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.') }}

                <div class="mt-4" x-data="{}" x-on:confirming-logout-other-browser-sessions.window="setTimeout(() => $refs.password.focus(), 250)">
                    <x-jet-input type="password" class="mt-1 block w-3/4"
                                 placeholder="{{ __('Password') }}"
                                 x-ref="password"
                                 wire:model.defer="password"
                                 wire:keydown.enter="logoutOtherBrowserSessions" />

                    <x-jet-input-error for="password" class="mt-2" />
                </div>
            </x-slot>

            <x-slot name="footer">
                <x-jet-secondary-button wire:click="$toggle('confirmingLogout')" wire:loading.attr="disabled">
                    {{ __('Cancel') }}
                </x-jet-secondary-button>

                <x-jet-button class="ml-2"
                              wire:click="logoutOtherBrowserSessions"
                              wire:loading.attr="disabled">
                    {{ __('Log Out Other Browser Sessions') }}
                </x-jet-button>
            </x-slot>
        </x-jet-dialog-modal>
    </div>
</div>

