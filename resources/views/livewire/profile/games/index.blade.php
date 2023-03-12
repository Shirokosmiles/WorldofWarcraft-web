@if($game)
<div data-v-0bfa36f9="" class="overview-card col-12">
    <div data-v-15d61d2e="" data-v-0a034e2c="" id="913854269" class="card account-overview-games">
        <div data-v-15d61d2e="" class="card-title">
            <div data-v-15d61d2e="" class="row">
                <div data-v-15d61d2e="" class="col-12 col-md-6">
                    <h3 data-v-15d61d2e="" class="text-uppercase">@lang('overview.details_6')</h3>
                </div>
                <div data-v-15d61d2e="" class="col-12 col-md-6">
                    <a href="{{ route('games') }}" class="card-header-link float-md-right" data-v-15d61d2e="">
                        @lang('overview.details_7') <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div data-v-15d61d2e="" class="card-body">
            <div data-v-15d61d2e="" class="account-overview-games-table" data-placeholder-id="placeholder-ece0f220-a9e6-11ec-9bc1-91dc7bb5220e">
                <table data-v-483e03c5="" data-v-8d80988c="" aria-busy="false" aria-colcount="7" class="account-table thead-hide thead-no-border table-background-transparent table b-table table-dark" sort-direction="asc" id="__BVID__76_">
                    <thead class="thead-dark">
                    <tr>
                        <th aria-colindex="1" class="game-icon">Regional Game Franchise Icon Filename</th>
                        <th aria-colindex="2" class="">Localized Game Name</th>
                        <th aria-colindex="3" class="d-none d-md-table-cell">Game Account Status</th>
                        <th aria-colindex="4" class="d-none d-md-table-cell">Subscription Status</th>
                        <th aria-colindex="5" class="d-none d-xl-table-cell">Last Played Date Millis</th>
                        <th aria-colindex="6" class="d-none d-md-table-cell">Game Time View</th>
                        <th aria-colindex="7" class="d-none d-md-table-cell">Links</th>
                    </tr>
                    </thead>
                    <tbody class="">
                    <tr class="">
                        <td aria-colindex="1" class="game-icon">
                            <div data-v-f5695744="">
                                <img data-v-f5695744="" src="{{ asset('static/game-icons/world-of-warcraft.svg') }}" class="d-block float-left" alt="World of Warcraft">
                            </div>
                        </td>
                        <td aria-colindex="2" class="align-middle">
                            <span data-v-8d80988c="" class="text-light">{{ $game->expansion_name() }}</span>
                            <span data-v-8d80988c="">(WoW1)</span>
                            <div data-v-8d80988c="">@lang('overview.games_1')</div>
                            <div data-v-8d80988c="" class="d-md-none">
                                <div data-v-8d80988c="" class="mt-4">
                                    <div data-v-8d80988c="" class="info-label">@lang('overview.games_2')</div>
                                    @if($game->status)
                                        <span data-v-8d80988c="" class="text-warning">@lang('overview.games_3')</span>
                                    @else
                                        <span data-v-60053bb6="" class="info-success">@lang('overview.games_4')</span>
                                    @endif
                                </div>
                            </div>
                            <div data-v-8d80988c="" class="d-md-none mt-4 account-links">
                                <div data-v-8d80988c="">
                                    @if($game->status)
                                        <div data-v-121e7cc8="" class="info-label">@lang('overview.games_5')
                                            {{ $game->status->bannedby }}</div>
                                        <div data-v-121e7cc8="" class="text-light">@lang('overview.games_6')
                                            {{ $game->status->banreason }}</div>
                                        <div data-v-121e7cc8="" class="info-label">@lang('overview.games_7')
                                            {{ $game->status->bandate->diffForHumans() }}
                                        </div>
                                        <div data-v-121e7cc8="" class="text-light">@lang('overview.games_8')
                                            @if($game->status->bandate != $game->status->unbandate)
                                                {{ $game->status->unbandate->diffForHumans() }}
                                            @else
                                                @lang('overview.games_9')
                                            @endif
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </td>
                        <td aria-colindex="3" class="d-none d-md-table-cell align-middle">
                            @if($game->status)
                                <span data-v-8d80988c="" class="text-warning">@lang('overview.games_3')</span>
                            @else
                                <span data-v-60053bb6="" class="text-success">@lang('overview.games_4')</span>
                            @endif
                            <div data-v-8d80988c="" class="info-label">@lang('overview.games_2')</div>
                        </td>
                        <td aria-colindex="4" class="d-none d-md-table-cell align-middle">

                        </td>
                        <td aria-colindex="5" class="d-none d-xl-table-cell align-middle">
                            <div data-v-8d80988c="" class="text-light">
                                @empty($game->last_login)
                                    {{ $game->joindate->diffForHumans() }}
                                @else
                                    {{ $game->last_login->diffForHumans() }}
                                @endempty
                            </div>
                            <div data-v-8d80988c="" class="info-label">@lang('overview.games_10')</div>
                        </td>
                        <td aria-colindex="6" class="d-none d-md-table-cell align-middle">
                            <span data-v-8d80988c=""></span>
                        </td>
                        <td aria-colindex="7" class="d-none d-md-table-cell font-weight-bold text-right align-middle">
                            <div data-v-8d80988c="" class="account-links">
                                <div data-v-8d80988c="">
                                    @if($game->status)
                                        <div data-v-121e7cc8="" class="info-label">@lang('overview.games_5') {{ $game->status->bannedby }}</div>
                                        <div data-v-121e7cc8="" class="text-light">@lang('overview.games_6') {{ $game->status->banreason }}</div>
                                        <div data-v-121e7cc8="" class="info-label">@lang('overview.games_7')
                                            {{ $game->status->bandate->diffForHumans() }}
                                        </div>
                                        <div data-v-121e7cc8="" class="text-light">@lang('overview.games_8')
                                            @if($game->status->bandate != $game->status->unbandate)
                                                {{ $game->status->unbandate->diffForHumans() }}
                                            @else
                                                @lang('overview.games_9')
                                            @endif
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endif
