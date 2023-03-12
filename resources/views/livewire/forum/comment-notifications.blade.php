<div x-data="{openPanel: false }">
    <ul wire:poll="getNotificationCount" class="icons d-header-icons">
    <li id="current-user" class="header-dropdown-toggle current-user">
        @if($notificationCount)
        <div>
            <img alt="профиль, сообщения, закладки и настройки" width="32" height="32" src="{{ auth()->user()->getAvatar() }}"
                 title="{{ auth()->user()->name }}"
                 aria-label="{{ auth()->user()->name }}" class="avatar">
             <a @click=
                "openPanel = !openPanel
                if (openPanel) {
                    Livewire.emit('getNotifications')
                }" href="javascript:void(0)" class="widget-link badge-notification unread-high-priority-notifications"
               title="Непрочитанные важные уведомления: {{ $notificationCount }}">{{ $notificationCount }}</a>
        </div>
        @else
        <a @click=
           "openPanel = !openPanel
                if (openPanel) {
                    Livewire.emit('getNotifications')
                }" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)" title="TheRock33-2255"
           data-auto-route="true" class="icon">
            <div>
                <img alt="профиль, сообщения, закладки и настройки" width="32" height="32" src="{{ auth()->user()->getAvatar() }}" title="{{ auth()->user()->name }}" aria-label="{{ auth()->user()->name }}" class="avatar">
            </div>
        </a>
        @endif
    </li>
</ul>
<div x-cloak
         x-show.transition.origin.top.left="openPanel"
         @click.away="openPanel = false"
         @keydown.escape.window="openPanel = false"  class="user-menu" data-click-outside="true">
        <div data-max-width="320" class="menu-panel drop-down" style="top: 100%; height: auto; width: 320px;">
            <div class="panel-body" style="height: 100%;">
                <div class="panel-body-contents">
                    <div class="menu-links-header">
                        <div class="menu-links-row">
                            <div aria-label="Menu links" role="tablist" class="glyphs">
                                <button class="widget-button btn-flat user-notifications-link menu-link active no-text btn-icon" title="Уведомления" role="tab" aria-selected="true" tabindex="0" aria-controls="quick-access-notifications" id="notifications" data-url="/ru/overwatch/u/therock33-2255/notifications" data-tab-number="0"><svg class="fa d-icon d-icon-bell svg-icon svg-node" aria-hidden="true"><use xlink:href="#bell"></use></svg></button>
                                <button class="widget-button btn-flat user-bookmarks-link menu-link no-text btn-icon" title="Закладки" role="tab" aria-selected="false" tabindex="-1" aria-controls="quick-access-bookmarks" id="bookmarks" data-url="/ru/overwatch/u/therock33-2255/activity/bookmarks" data-tab-number="1"><svg class="fa d-icon d-icon-bookmark svg-icon svg-node" aria-hidden="false" role="img"><use xlink:href="#bookmark"></use></svg></button>
                                <button class="widget-button btn-flat user-preferences-link menu-link no-text btn-icon" title="Настройки" role="tab" aria-selected="false" tabindex="-1" aria-controls="quick-access-profile" id="profile" data-url="/ru/overwatch/u/therock33-2255/summary" data-tab-number="2"><svg class="fa d-icon d-icon-user svg-icon svg-node" aria-hidden="true"><use xlink:href="#blizzard-char"></use></svg></button>
                            </div>
                        </div>
                    </div>
                    <div tabindex="-1" class="quick-access-panel">

                        @if ($notifications->isNotEmpty() && !$isLoading)
                        <ul>
                            @foreach ($notifications as $notification)
                                <li class="read bookmark-reminder">
                                    <a href="{{ route('idea.show', $notification->data['idea_id']) }}" @click.prevent="openPanel = false" wire:click.prevent="markAsRead('{{ $notification->id }}')" title="напоминание для закладки" data-auto-route="true">
                                        <svg class="fa d-icon d-icon-discourse-bookmark-clock svg-icon svg-node" aria-hidden="false" aria-label="напоминание для закладки" role="img">
                                            <use xlink:href="#discourse-bookmark-clock"></use>
                                        </svg>
                                        <div>
                                            <span>{{ $notification->data['user_name'] }}</span>
                                            <span data-topic-id="{{ $notification->data['idea_id'] }}">{{ $notification->data['idea_title'] }}</span>
                                        </div>
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                        <div class="panel-body-bottom">
                            <a class="widget-link btn btn-default btn-icon no-text show-all" href="#"
                               title="просмотреть все уведомления"><svg class="fa d-icon d-icon-chevron-down svg-icon svg-node" aria-hidden="false" aria-label="просмотреть все уведомления" role="img"><use xlink:href="#chevron-down"></use></svg> <span class="d-label"></span></a>
                            <button wire:click="markAllAsRead" @click="isOpen = false" class="widget-button btn btn btn-default
                                    notifications-dismiss btn-icon-text" title="Пометить все непрочитанные уведомления как прочитанные"><svg class="fa d-icon d-icon-check svg-icon svg-node" aria-hidden="true"><use xlink:href="#check"></use></svg><span class="d-button-label">Закрыть</span></button>
                        </div>
                        @elseif ($isLoading)
                            @foreach (range(1,3) as $item)
                                <li class="animate-pulse flex items-center transition duration-150 ease-in px-5 py-3">
                                    <div class="bg-gray-200 rounded-xl w-10 h-10"></div>
                                    <div class="flex-1 ml-4 space-y-2">
                                        <div class="bg-gray-200 w-full rounded h-4"></div>
                                        <div class="bg-gray-200 w-full rounded h-4"></div>
                                        <div class="bg-gray-200 w-1/2 rounded h-4"></div>
                                    </div>
                                </li>
                            @endforeach
                        @else
                            <ul>
                                <div>
                                    <div class="empty-state">
                                        <span class="empty-state-title">У вас еще нет уведомлений</span>
                                        <div class="empty-state-body"><p>На этой панели будут отображаться уведомления о событиях, напрямую связанных с вами, включая ответы в ваших темах и на ваши сообщения, <b>@упоминания</b> или цитирования вас и ответы в темах, за которыми вы следите. Если вы долгое время не авторизовались в своей учетной записи, уведомления также будут отправляться вам на электронную почту. <br><br> С помощью <svg class="fa d-icon d-icon-bell svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#bell"></use></svg> вы сможете определить, о каких конкретно темах, категориях и тегах вы хотите получать уведомления. Подробности можно найти в ваших <a href="#">настройках уведомлений</a>.</p>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                            <div class="panel-body-bottom">
                                <a class="widget-link btn btn-default btn-icon no-text show-all" href="#" title="просмотреть все уведомления"><svg class="fa d-icon d-icon-chevron-down svg-icon svg-node" aria-hidden="false" aria-label="просмотреть все уведомления" role="img"><use xlink:href="#chevron-down"></use></svg> <span class="d-label"></span>
                                </a>
                            </div>
                        @endif
                    </div>
                    <div class="user-menu-bottom-without-avatar"><hr class="bottom-area"></div>
                </div>
            </div>
        </div>
    </div>
</div>

