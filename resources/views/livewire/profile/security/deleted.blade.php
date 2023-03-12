<div data-v-15d61d2e="" data-v-09cc4f2a="" data-v-37d13747="" id="162037578" class="card mt-card-top authenticator" data-blz-addressable-by="authenticator">
    <div data-v-15d61d2e="" class="card-title">
        <div data-v-09cc4f2a="" data-v-15d61d2e="" class="row">
            <div data-v-09cc4f2a="" data-v-15d61d2e="" class="col-12 col-md-6">
                <h3 data-v-09cc4f2a="" data-v-15d61d2e="">@lang('security.security_27')</h3>
            </div>
            <div data-v-09cc4f2a="" data-v-15d61d2e="" class="col-sm-12 col-md-10 label authenticator-sub-title">
                @lang('security.security_28')
            </div>
        </div>
    </div>
    <div data-v-15d61d2e="" class="card-body">
        <div data-v-09cc4f2a="" data-v-15d61d2e="">
            <div data-v-09cc4f2a="" data-v-15d61d2e="" id="placeholder-82" class="hide">
                <div data-v-09cc4f2a="" data-v-15d61d2e="">
                    <div data-v-09cc4f2a="" data-v-15d61d2e="" class="row mt-3 mt-sm-0">
                        <div data-v-09cc4f2a="" data-v-15d61d2e="" class="col-8 col-sm-9 col-md-9 col-xl-10">
                            <span data-v-09cc4f2a="" data-v-15d61d2e="" class="placeholder-l animated-background"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-09cc4f2a="" data-v-15d61d2e="" class="">
                <div data-v-09cc4f2a="" data-v-15d61d2e="">
                    <div data-v-6de7e15f="" data-v-09cc4f2a="" class="row no-gutters" data-v-15d61d2e="">

                        <div data-v-6de7e15f="" class="col-12 col-xl-10 col-md-9 col-sm-12">
                            <div data-v-09cc4f2a="" data-v-6de7e15f="">
                                <x-jet-danger-button wire:click="confirmUserDeletion" data-v-312dd04b="" data-v-92744cae=""
                                                     class="ml-md-3 mt-2 mt-md-0 btn-secondary btn" type="button"
                                                     data-v-15d61d2e="" wire:loading.attr="disabled">
                                    @lang('security.security_29')
                                </x-jet-danger-button>

                                <x-jet-dialog-modal wire:model="confirmingUserDeletion">
                                    <x-slot name="title">
                                        @lang('security.security_29')
                                    </x-slot>

                                    <x-slot name="content">
                                        @lang('security.security_30')
                                        <div class="mt-4" x-data="{}" x-on:confirming-delete-user.window="setTimeout(() => $refs.password.focus(), 250)">
                                            <x-jet-input type="password" class="mt-1 block w-3/4"
                                                         placeholder="@lang('security.security_31')"
                                                         x-ref="password"
                                                         wire:model.defer="password"
                                                         wire:keydown.enter="deleteUser" />

                                            <x-jet-input-error for="password" class="mt-2" />
                                        </div>
                                    </x-slot>

                                    <x-slot name="footer">
                                        <x-jet-secondary-button wire:click="$toggle('confirmingUserDeletion')" wire:loading.attr="disabled">
                                            @lang('security.security_32')
                                        </x-jet-secondary-button>

                                        <x-jet-danger-button class="ml-3" wire:click="deleteUser" wire:loading.attr="disabled">
                                            @lang('security.security_33')
                                        </x-jet-danger-button>
                                    </x-slot>
                                </x-jet-dialog-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

