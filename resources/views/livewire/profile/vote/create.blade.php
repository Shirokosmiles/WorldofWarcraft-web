<div data-v-0bfa36f9="" class="row">
    <div data-v-0bfa36f9="" class="overview-card col-12 col-xl-6">
        <div data-v-15d61d2e="" data-v-7090ae16="" data-v-0a034e2c="" class="card account-overview-code">
            <div data-v-15d61d2e="" class="card-title">
                <div data-v-7090ae16="" data-v-15d61d2e="">
                    <h3 data-v-7090ae16="" data-v-15d61d2e="">
                        @lang('vote.vote_2')
                    </h3>
                </div>
            </div>
            <div data-v-15d61d2e="" class="card-body">
                <div data-v-7090ae16="" data-v-15d61d2e="" id="redeem-code-form">
                    <div data-v-21c799d2="" data-v-15d61d2e="" class="row">
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="label col-8 col-md-8">@lang('vote.vote_3')</div>
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="col-4 col-md-4">{{ auth()->user()->name }} </div>
                        <hr>
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="label col-12 col-md-12">
                            @lang('vote.vote_4')
                        </div>
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="col-12 col-md-12">
                            @lang('vote.vote_5', ['count' => config('payment.vote_reward')])
                        </div>
                        <hr>
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="label col-8 col-md-8">@lang('vote.vote_6')
                        </div>
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="col-4 col-md-4">{{ $voteCountDone }} </div>
                        <hr>
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="col-4 col-md-8">MMOTOP</div>
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="col-8 col-md-4">
                            <a href="{{ config('payment.vote_url') }}" target="_blank">
                                <button data-v-15d61d2e="" class="btn-tertiary btn">
                                    @lang('vote.vote_7')
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div data-v-0bfa36f9="" class="overview-card col-12 col-xl-6">
        <div data-v-15d61d2e="" data-v-50ca0f34="" data-v-0a034e2c="" id="389548993" class="card account-overview-code">
            <div data-v-15d61d2e="" class="card-title">
                <div data-v-50ca0f34="" data-v-15d61d2e="" class="row">
                    <div data-v-50ca0f34="" data-v-15d61d2e="" class="col-12 col-md-6">
                        <h3 data-v-50ca0f34="" data-v-15d61d2e="">@lang('vote.vote_8')</h3>
                    </div>
                </div>
            </div>
            <div data-v-15d61d2e="" class="card-body">
                <div data-v-50ca0f34="" data-v-15d61d2e="">
                    <div data-v-50ca0f34="" data-v-15d61d2e="" id="balance-overview-placeholder" class="hide balance-content-placeholder">
                        <div data-v-50ca0f34="" data-v-15d61d2e="">
                            <div data-v-50ca0f34="" data-v-15d61d2e="" class="placeholder-content animated-background"></div>
                        </div>
                    </div>
                    <div data-v-50ca0f34="" data-v-15d61d2e="">
                        <div data-v-21c799d2="" data-v-15d61d2e="" class="row">
                            <ul>
                                <li class="label">@lang('vote.vote_9')</li>
                                <li class="label">@lang('vote.vote_10')</li>
                                <li class="label">@lang('vote.vote_11')</li>
                                <li class="label">@lang('vote.vote_12')</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div data-v-0bfa36f9="" class="row">
    <div data-v-0bfa36f9="" class="overview-card col-12">
        <div data-v-15d61d2e="" data-v-0a034e2c="" class="card account-overview-transactions">
            <div data-v-15d61d2e="" class="card-title">
                <div data-v-15d61d2e="" class="row">
                    <div data-v-15d61d2e="" class="col-12 col-md-6">
                        <h3 data-v-15d61d2e="" class="text-uppercase">@lang('vote.vote_13')</h3>
                    </div>
                </div>
            </div>
            <div data-v-15d61d2e="" class="card-body">
                <div data-v-15d61d2e="" class="account-overview-transactions-table">
                    <div data-v-70ad3292="" data-v-15d61d2e="" class="account-table-container">
                        <table data-v-483e03c5="" data-v-70ad3292="" class="table
                         b-table table-hover table-dark account-table thead-no-border table-background-transparent">
                            <thead class="thead-dark">
                            <tr>
                                <th tabindex="0" aria-colindex="1" aria-label="Click to sort Ascending"
                                    aria-sort="descending" class="w-md-auto">@lang('vote.vote_22')</th>
                                <th aria-colindex="2" class="w-md-auto">@lang('vote.vote_14')</th>
                                <th aria-colindex="3" class="w-md-auto">@lang('vote.vote_15')</th>
                                <th aria-colindex="4" class="w-md-auto">@lang('vote.vote_16')</th>
                                <th aria-colindex="5" class="w-md-auto">@lang('vote.vote_17')</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($votes as $item)
                                <tr aria-rowindex="0">
                                    <th aria-colindex="1" class="w-md-auto d-none d-md-table-cell">{{ $item->voted_at }}</th>
                                    <th aria-colindex="2" class="w-md-auto">@lang('vote.vote_18') ({{ $item->vote }})</th>
                                    <th aria-colindex="3" class="w-md-auto">{{ $item->balance }} @lang('vote.vote_19')</th>
                                    <th aria-colindex="4" class="w-md-auto">{{ $item->ip }}</th>
                                    <th aria-colindex="5" class="w-md-auto">@lang('vote.vote_20')</th>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        @if($votes->isEmpty())
                            <div data-v-70ad3292="" class="table-states-container table-background-transparent">
                                @lang('vote.vote_21')
                            </div>
                        @endif
                    </div>
                </div>
                {{ $votes->links('paginate.transact') }}
            </div>
        </div>
    </div>
</div>
