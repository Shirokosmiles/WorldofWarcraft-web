<div x-init="
        Livewire.on('gameWasUpdated', () => {
            create = false
        })
    "  x-show="create" data-v-15d61d2e="" data-v-906e8a92="" class="card mt-card-top account-overview-games">
    <div data-v-15d61d2e="" class="card-title">
        <div data-v-906e8a92="" data-v-15d61d2e="" class="row">
            <div data-v-906e8a92="" data-v-15d61d2e="" class="col-12 col-md-6">
                <h3 data-v-906e8a92="" data-v-15d61d2e="">Создать учетную запись</h3>
            </div>
        </div>
    </div>
    <div data-v-15d61d2e="" class="card-body">
        <div data-v-906e8a92="" data-v-15d61d2e="" class="" data-placeholder-id="placeholder-cebc3170-a9fe-11ec-a492-2b002b7a1b9f">
            <div  data-v-906e8a92="" data-v-15d61d2e="" class="row option no-gutters">
                <div data-v-906e8a92="" data-v-15d61d2e="" class="col-3 col-sm-3 col-md-1 col-lg-2 col-xl-1 game-icon">
                    <img data-v-906e8a92="" data-v-15d61d2e="" src="{{ asset('static/game-icons/world-of-warcraft.svg') }}" class="d-block">
                </div>
                <div data-v-906e8a92="" data-v-15d61d2e="" class="col">
                    <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="row mt-3">

                        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-sm-12 col-md-6 col-xl-5 col-lg-7">
                            <input data-v-7c3c8cd5="" data-v-15d61d2e="" type="text" wire:model="email"
                                   placeholder="E-Mail" data-vv-as="E-Mail" aria-required="true" aria-invalid="false"
                                   class="input-block" value="{{ auth()->user()->email }}">
                            <span data-v-7c3c8cd5="" data-v-15d61d2e="" class="is-error" style="display: none;"></span>
                            <x-jet-input-error for="email" data-v-7c3c8cd5="" data-v-15d61d2e="" class="is-error" />
                        </div>
                    </div>
                    <div data-v-6061b8eb="" data-v-15d61d2e="" class="row mt-3">

                        <div data-v-6061b8eb="" data-v-15d61d2e="" class="col-sm-12 col-md-6 col-xl-5 col-lg-7">
                            <div data-v-75bcaa18="" data-v-6061b8eb="" data-v-15d61d2e="" class="blz-password input-block">
                                <div data-v-75bcaa18="" class="password-reveal-wrapper">
                                    <input data-v-75bcaa18="" placeholder="Подтвердите пароль"
                                           type="password" wire:model="password" autocomplete="password" maxlength="16"
                                           data-vv-as="Подтвердите пароль">
                                    <x-jet-input-error for="password" data-v-7c3c8cd5="" data-v-15d61d2e="" class="is-error" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div data-v-906e8a92="" data-v-15d61d2e="" class="mt-3">
                        <button wire:click="createAccount" data-v-312dd04b="" data-v-906e8a92="" class="btn
                        btn-primary btn"
                                data-v-15d61d2e="">Create Account</button>
                        <button x-on:click="create = false" data-v-312dd04b="" data-v-906e8a92=""
                                class="btn btn-secondary mt-3 mt-md-0 ml-md-3 btn" data-v-15d61d2e="">Cancel</button>

                        <x-jet-action-message data-v-312dd04b=""
                                              data-v-112a4620="" data-v-15d61d2e="" class="btn-secondary btn" on="saved">
                            {{ __('Учетная запись успешно создана.') }}
                        </x-jet-action-message>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

