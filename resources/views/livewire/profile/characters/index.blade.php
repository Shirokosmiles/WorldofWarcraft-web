<section class="main-content-section">
    <div>
        <div data-v-ba34107c="" class="title-bar text-center text-lg-left position-relative"><h1 data-v-ba34107c="">Игры и подписки</h1> <div data-v-ba34107c="" class="back d-lg-none position-absolute"><a data-v-ba34107c="" href="/" class="router-link-active"><svg data-v-ba34107c="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8"><path data-v-ba34107c="" fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg></a></div></div>
        <div data-v-15d61d2e="" id="577225883" class="card mt-card-top account-overview-games" data-blz-addressable-by="game-accounts">
            <div data-v-15d61d2e="" class="card-title">
                <div data-v-15d61d2e="" class="row">
                    <div data-v-15d61d2e="" class="col-12 col-md-6">
                        <h3 data-v-15d61d2e="" class="text-uppercase">Учетные записи игр</h3>
                    </div>
                </div>
            </div>
            <div data-v-15d61d2e="" class="card-body">
                <div data-v-15d61d2e="" class="account-overview-games-table" data-placeholder-id="placeholder-d2920820-5461-11ed-9d48-31c8bc0fff15">
                    <table data-v-483e03c5="" data-v-f5695744="" aria-busy="false" aria-colcount="7" class="account-table thead-hide thead-no-border table-background-transparent table b-table table-dark" sort-direction="asc" id="__BVID__85_">
                        <thead class="thead-dark"><tr><th aria-colindex="1" class="game-icon">Regional Game Franchise Icon Filename</th>
                            <th aria-colindex="2" class="">Localized Game Name</th>
                            <th aria-colindex="3" class="d-none d-md-table-cell">Game Account Status</th>
                            <th aria-colindex="4" class="d-none d-md-table-cell">Subscription Status</th>
                            <th aria-colindex="5" class="d-none d-xl-table-cell">Last Played Date Millis</th>
                            <th aria-colindex="6" class="d-none d-md-table-cell">Game Time View</th>
                            <th aria-colindex="7" class="d-none d-md-table-cell">Links</th>
                        </tr>
                        </thead>
                        <tbody class="">

                        @foreach($characters as $item)
                            <tr>
                                <td aria-colindex="1" class="game-icon">
                                    <div data-v-f5695744="">
                                        <img data-v-f5695744="" src="{{ Utils::imageClass($item->race, $item->gender) }}" class="d-block float-left">
                                    </div>
                                </td>
                                <td aria-colindex="1" class="game-icon">
                                    <div data-v-f5695744="">
                                        <img data-v-f5695744="" src="{{ Utils::imageRace($item->race) }}" class="d-block float-left">
                                    </div>
                                </td>
                                <td aria-colindex="2" class="align-middle">
                                    <span data-v-121e7cc8="" class="text-light"></span>
                                    <span data-v-121e7cc8="">{{ $item->name }} ({{ $item->level }})</span>
                                    <div data-v-121e7cc8="">{{ $item->realmName }}</div>
                                    <div data-v-121e7cc8="" class="d-md-none">
                                        <div data-v-121e7cc8="" class="mt-4">
                                            <div data-v-121e7cc8="" class="info-label">Время в игре</div>
                                            <span data-v-121e7cc8="" class="text-light">{{ Text::totalTime($item->totaltime) }}</span>
                                        </div>
                                        <div data-v-121e7cc8="" class="mt-4">
                                            <div data-v-121e7cc8="" class="info-label">Последний вход</div>
                                            <span data-v-121e7cc8="" class="text-light">{{ Text::lastLoginCharacters($item->logout_time) }}</span>
                                        </div>
                                    </div>
                                    <div data-v-121e7cc8="" class="d-md-none mt-4 account-links">
                                        <div data-v-7090ae16="" data-v-15d61d2e="" class="col-md-3 col-lg-3 mt-2 mt-md-0">
                                            @if($item->guid != auth()->user()->activeCharacters)
                                                <button type="submit" wire:click="update({{ $item->guid }})"
                                                        data-v-15d61d2e="" class="btn-tertiary btn">
                                                    Выбрать
                                                </button>
                                            @else
                                                <button type="submit" disabled data-v-15d61d2e="" class="btn-tertiary btn">
                                                    Выбран
                                                </button>
                                            @endif
                                        </div>
                                    </div>
                                </td>
                                <td aria-colindex="3" class="d-none d-md-table-cell align-middle">
                                    <span data-v-121e7cc8="" class="text-light">Время в игре</span>
                                    <div data-v-121e7cc8="" class="info-label">{{ Text::totalTime($item->totaltime) }}</div>
                                </td>
                                <td aria-colindex="3" class="d-none d-md-table-cell align-middle">
                                    <span data-v-121e7cc8="" class="text-light">Последний вход</span>
                                    <div data-v-121e7cc8="" class="info-label">{{ Text::lastLoginCharacters($item->logout_time) }}</div>
                                </td>
                                <td aria-colindex="4" class="d-none d-xl-table-cell align-middle"></td>
                                <td aria-colindex="5" class="d-none d-md-table-cell align-middle">
                                    <span data-v-121e7cc8=""></span>
                                </td>
                                <td aria-colindex="6" class="d-none d-md-table-cell font-weight-bold text-right align-middle">
                                    <div data-v-121e7cc8="" class="account-links">
                                        <div data-v-7090ae16="" data-v-15d61d2e="" class="col-md-3 col-lg-3 mt-2 mt-md-0">
                                            @if($item->guid != auth()->user()->activeCharacters)
                                                <button type="submit" wire:click="update({{ $item->guid }})" data-v-15d61d2e="" class="btn-tertiary btn">
                                                    Выбрать
                                                </button>
                                            @else
                                                <button type="submit" disabled data-v-15d61d2e="" class="btn-tertiary btn">
                                                    Выбран
                                                </button>
                                            @endif
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
