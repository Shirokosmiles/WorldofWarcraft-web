<div>
    @if($enable)
        <form wire:submit.prevent="createValidate">
            <div data-v-2d0dc31c="" data-v-15d61d2e="">
                <div data-v-f8e77416="" data-v-15d61d2e="" class="row">
                    <div data-v-f8e77416="" data-v-15d61d2e="" class="col-12 col-md-9 mt-1 label">
                        @lang('payment.payment_3')
                    </div>
                </div>
                <hr data-v-f8e77416="" data-v-15d61d2e="" class="mt-4">
                <div data-v-f8e77416="" data-v-15d61d2e="" class="row">
                    <div data-v-f8e77416="" data-v-15d61d2e="" class="col-6 col-md-3 mt-1 setting-status">
                        <select data-v-8dca2dd6="" data-v-f8e77416="" wire:model="option" id="private-chat" title=""
                                class="grid-100 input-block" data-v-15d61d2e="">
                            <option data-v-8dca2dd6="" title="Do not allow" value="0">
                                @lang('payment.payment_4')
                            </option>
                            <option data-v-8dca2dd6="" title="FreeKassa" value="1">
                                FreeKassa
                            </option>
                            <option data-v-8dca2dd6="" title="Enot" value="2">
                                Enot
                            </option>
                            <option data-v-8dca2dd6="" title="PayPal" value="3">
                                PayPal
                            </option>
                            <option data-v-8dca2dd6="" title="Lava" value="4">
                                Lava
                            </option>
                        </select>
                        <div data-v-f8e77416="" data-v-15d61d2e="" class="" data-placeholder-id="placeholder-8ff6acc1-aaa0-11ec-a744-03683b0f4ebc" style="display: none;">
                            Everybody
                        </div>
                    </div>
                </div>
                @if($option)
                    <hr data-v-f8e77416="" data-v-15d61d2e="" class="mt-4">
                    <div data-v-15e52fe7="" data-v-15d61d2e="" class="row">
                        <div data-v-15e52fe7="" data-v-15d61d2e="" class="col-sm-12 col-md-6 col-xl-4">
                            <input data-v-15e52fe7="" data-v-15d61d2e="" type="number" wire:model="sum" name="sum"
                                   placeholder="@lang('payment.payment_5')" required class="mt-3">
                            @error('sum')<span data-v-15e52fe7="" data-v-15d61d2e="" class="is-error">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <hr data-v-f8e77416="" data-v-15d61d2e="" class="mt-4">
                @endif
                <div data-v-2d0dc31c="" data-v-15d61d2e="" class="row mt-4">
                    <button wire:click="create" type="submit" data-v-312dd04b="" data-v-2d0dc31c="" data-v-15d61d2e=""
                            class="btn-primary mr-3 btn">@lang('payment.payment_6')</button>
                    <a href="{{ route('payment') }}" class="btn btn-secondary back-btn" data-v-2d0dc31c=""
                       data-v-15d61d2e="">@lang('payment.payment_7')</a>
                </div>
            </div>
        </form>
    @else
        <div data-v-70ad3292="" class=" table-background-transparent">
            @lang('payment.payment_8')
        </div>
    @endif
</div>
