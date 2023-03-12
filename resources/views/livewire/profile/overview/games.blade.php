<div x-data="{create: false, attach: false}">

<div data-v-0bfa36f9="" id="162037578" class="card mt-card-top account-overview-games">
    <div data-v-15d61d2e="" class="card-title">
        <div data-v-15d61d2e="" class="row">
            <div data-v-15d61d2e="" class="col-12 col-md-6">
                <h3 data-v-15d61d2e="" class="text-uppercase">@lang('overview.details_6')</h3>
            </div>
        </div>
    </div>
    <div data-v-15d61d2e="" class="card-body">
        <div data-v-15d61d2e="" class="account-overview-games-table" data-placeholder-id="placeholder-ece0f220-a9e6-11ec-9bc1-91dc7bb5220e">
            @if($game)
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
            @else
                <div  data-v-906e8a92="" data-v-15d61d2e="" class="row option no-gutters">
                    <div data-v-906e8a92="" data-v-15d61d2e="" class="col-3 col-sm-3 col-md-1 col-lg-2 col-xl-1 game-icon">
                        <img data-v-906e8a92="" data-v-15d61d2e="" src="{{ asset('static/game-icons/world-of-warcraft.svg') }}" class="d-block">
                    </div>

                    <div data-v-906e8a92="" data-v-15d61d2e="" class="col-9
                        col-sm-9
                        col-md-7 account-type">
                            <span data-v-906e8a92="" data-v-15d61d2e="" class="align-middle">
                                Создайте <b>учетную запись PTR</b>, чтобы опробовать контент World of Warcraft.
                            </span>
                    </div>
                    <div data-v-906e8a92="" data-v-15d61d2e="" class="col
                        col-sm-9 col-md-4 col-lg-3
                        col-xl-4 offset-3 offset-md-0 account-links mt-4 mt-md-0">
                        <div data-v-906e8a92="" data-v-15d61d2e="" class="text-md-right">
                            <a data-v-906e8a92="" data-v-15d61d2e="" href="javascript:void(0)" x-on:click="create = true, attach = false">
                                <svg data-v-906e8a92="" data-v-15d61d2e="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-plus fa-w-12"><path data-v-906e8a92="" data-v-15d61d2e="" fill="currentColor" d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" class=""></path></svg> Создать учетную запись
                            </a>
                        </div>
                        <div data-v-906e8a92="" data-v-15d61d2e="" class="text-md-right">
                            <a data-v-906e8a92="" data-v-15d61d2e="" href="javascript:void(0)" x-on:click="attach = true, create = false">
                                <svg data-v-906e8a92="" data-v-15d61d2e="" aria-hidden="true" focusable="false"
                                     data-prefix="far" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-plus fa-w-12"><path data-v-906e8a92="" data-v-15d61d2e="" fill="currentColor" d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" class=""></path></svg>
                                Прикрепить учетную запись
                            </a>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>

<livewire:profile.overview.games.create />
<livewire:profile.overview.games.attach />

</div>
