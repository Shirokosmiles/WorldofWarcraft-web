<div data-v-15d61d2e="" data-v-7c3c8cd5="" data-v-4079560b="" id="personal-info-card" class="card mt-card-top
personal-info" data-blz-addressable-by="personal-info" x-data="{isEditing: false}" x-cloak>
    <div data-v-15d61d2e="" class="card-title">
        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="row">
            <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-md-6">
                <h3 data-v-7c3c8cd5="" data-v-15d61d2e="">Личная информация</h3>
            </div>
            <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-md-6"><a x-on:click="isEditing = true" data-v-7c3c8cd5="" data-v-15d61d2e="" href="javascript:void(0)" class="card-header-link float-md-right"><svg data-v-7c3c8cd5="" data-v-15d61d2e="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pen fa-w-16"><path data-v-7c3c8cd5="" data-v-15d61d2e="" fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" class=""></path></svg> Обновить
                </a>
            </div>
        </div>
    </div>
    <div data-v-15d61d2e="" class="card-subtitle">
        <div data-v-7c3c8cd5="" data-v-15d61d2e="">
            @if(auth()->user()->day && auth()->user()->month && auth()->user()->year && auth()->user()->country)
            <div x-show=isEditing data-v-cc173d72="" data-v-7c3c8cd5="" class="alert-message info">
                <div data-v-cc173d72="" class="d-none icon"></div>
                <div data-v-cc173d72="" class="">
                    <h3 data-v-cc173d72="" class="uppercase"></h3>
                    <span data-v-7c3c8cd5="">@lang('detail.detail_4')</span>
                </div>
            </div>
            @endif
        </div>
    </div>

    <div data-v-15d61d2e="" class="card-body" >
        <div data-v-112a4620="" data-v-15d61d2e="">
            <div data-v-112a4620="" data-v-15d61d2e="" id="placeholder-15">
                <div x-show=!isEditing data-v-7c3c8cd5="" data-v-15d61d2e="">
                    <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="row mt-3">
                        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-sm-3 col-md-3 col-xl-2
                            label">@lang('detail.detail_5')</div>
                        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-sm-9 col-md-9 col-xl-10">
                        <span data-v-7c3c8cd5="" data-v-15d61d2e="" class="mr-2">
                            {{ auth()->user()->full_name_hidden  ?? __('detail.detail_6') }}
                        </span>
                        </div>

                    </div>

                    <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="row mt-3">
                        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-sm-3 col-md-3 col-xl-2
                            label">@lang('detail.detail_7')</div>
                        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-sm-9 col-md-9 col-xl-10">
                                <span data-v-7c3c8cd5="" data-v-15d61d2e="" class="mr-2">
                                    {{ auth()->user()->full_date  ?? __('detail.detail_6') }}
                                </span>
                        </div>
                    </div>

                    <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="row mt-3 last">
                        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-sm-3 col-md-3 col-xl-2
                            label">@lang('detail.detail_8')</div>
                        <div data-v-7c3c8cd5="" data-v-15d61d2e="" class="col-12 col-sm-9 col-md-9 col-xl-10">
                            {{ auth()->user()->full_country  ?? __('detail.detail_6') }}
                        </div>
                    </div>

                </div>
                <div x-show=isEditing @click.away="isEditing = false" data-v-7c3c8cd5="" data-v-15d61d2e="" class="edit-info">
                    @livewire('profile.update-profile-information-form')
                </div>
            </div>
        </div>
    </div>
</div>
