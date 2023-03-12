<div data-v-0bfa36f9="" class="overview-card col-12">
    <div data-v-15d61d2e="" data-v-0a034e2c="" id="913854269" class="card account-overview-transactions">
        <div data-v-15d61d2e="" class="card-title">
            <div data-v-15d61d2e="" class="row">
                <div data-v-15d61d2e="" class="col-12 col-md-6">
                    <h3 data-v-15d61d2e="" class="text-uppercase">@lang('overview.transactions_1')</h3>
                </div>
                <div data-v-15d61d2e="" class="col-12 col-md-6 text-uppercase">
                    <a href="{{ route('transactions') }}" class="card-header-link float-md-right" data-v-15d61d2e="">
                        @lang('overview.transactions_2') <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div data-v-15d61d2e="" class="card-body">
            <div data-v-15d61d2e="" class="account-overview-transactions-table" data-placeholder-id="placeholder-ece0f221-a9e6-11ec-9bc1-91dc7bb5220e">
                <div data-v-70ad3292="" class="account-table-container" data-v-15d61d2e="">
                    <table data-v-483e03c5="" data-v-70ad3292="" aria-busy="false" aria-colcount="4" aria-rowcount="-1" class="table b-table table-hover table-dark account-table thead-hide thead-no-border table-background-transparent" sort-direction="asc" id="__BVID__34_">
                        <thead class="thead-dark">
                        <tr>
                            <th tabindex="0" aria-colindex="1" aria-label="Click to sort Ascending" aria-sort="descending" class="sorting sorting_desc d-none d-md-table-cell blz-md-15">Дата</th><th aria-colindex="2" class="w-100 w-md-auto blz-md-40 pl-3 pr-1">Наименование</th><th aria-colindex="3" class="d-none d-md-table-cell blz-md-15">Итого</th><th aria-colindex="4" class="blz-xs-35 blz-md-15">Статус</th></tr>
                        </thead>
                        <tbody class="">
                            @foreach($transactions as $item)
                            <tr aria-rowindex="{{ $loop->index }}" class="">
                            <td aria-colindex="1" class="d-none d-md-table-cell blz-md-15 align-middle text-nowrap">
                                {{ $item->created_at->format('d.m.Y H:m') }}
                            </td>
                                <td aria-colindex="2" class="w-100 w-md-auto blz-md-40 pl-3 pr-1 align-middle text-white blz-text-md-white-70">
                                    <div data-v-70ad3292="" class="d-none d-block d-md-none">
                                        <div data-v-70ad3292="" class="label">{{ $item->created_at->format('d.m.Y H:m') }}</div>
                                        <h6 data-v-70ad3292="" class=" blz-truncate-2">{{ $item->title }}</h6>
                                    </div>
                                    <div data-v-70ad3292="" class="d-none d-md-block">
                                        <span data-v-70ad3292="" class="blz-truncate-2">{{ $item->title }}</span>
                                    </div>
                                </td>
                                <td aria-colindex="3" class="d-none d-md-table-cell blz-md-15 align-middle">
                                    {{ $item->price }}&nbsp;₽
                                </td>
                                <td aria-colindex="4" class="blz-xs-35 blz-md-15 pl-1 pr-3 align-middle text-right text-md-left text-white blz-text-md-white-70">
                                    <div data-v-70ad3292="" class="text-nowrap d-flex align-items-center justify-content-end justify-content-md-start">
                                        <span data-v-70ad3292="" title="{{ trans_choice('overview.transactions_3', $item->votes) }}" class="text-truncate blz-text-capitalize-first blz-mw-100px">
                                            {{ trans_choice('overview.transactions_3', $item->votes) }}
                                        </span>
                                        <svg data-v-70ad3292="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="d-none d-inline-block d-md-none text-muted ml-1 svg-inline--fa fa-chevron-right fa-w-10"><path data-v-70ad3292="" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    @if($transactions->isEmpty())
                        <div data-v-70ad3292="" class="table-states-container table-background-transparent">
                            @lang('overview.transactions_4')
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
