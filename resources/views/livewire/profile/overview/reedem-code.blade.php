<div data-v-0bfa36f9="" class="overview-card col-12 col-xl-6">
    <div data-v-15d61d2e="" data-v-7090ae16="" data-v-0a034e2c="" id="913854269" class="card account-overview-code">
        <div data-v-15d61d2e="" class="card-title">
            <div data-v-7090ae16="" data-v-15d61d2e="">
                <h3 data-v-7090ae16="" data-v-15d61d2e="">
                    Использовать код
                </h3>
            </div>
        </div>
        <div data-v-15d61d2e="" class="card-body">
            <div data-v-7090ae16="" data-v-15d61d2e="" id="redeem-code-form">
                <form wire:submit.prevent="protectionValidate" data-v-7090ae16="" data-v-15d61d2e="" id="code-claim"
                      class="row">
                    <div data-v-7090ae16="" data-v-15d61d2e="" class="col-md-6 col-lg-7">
                        <input wire:model.defer="key" data-v-7090ae16="" data-v-15d61d2e=""
                               placeholder="XXXX-XXXX-XXXX-XXXX" type="text"
                               id="redeem-code" class="input-block">
                        <x-jet-input-error for="key" data-v-f521b32c="" data-v-15d61d2e="" class="mt-2 is-error" />
                    </div>
                    <div data-v-7090ae16="" data-v-15d61d2e="" class="col-md-4 col-lg-4 mt-2 mt-md-0">
                        <button wire:click="update" data-v-312dd04b="" data-v-7090ae16="" class="btn-tertiary btn"
                                data-v-15d61d2e="">
                            Использовать код
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
