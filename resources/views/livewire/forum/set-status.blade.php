<div x-cloak
     x-show.transition.origin.top.left="isOpenStatus"
     @click.away="isOpenStatus = false"
     @keydown.escape.window="isOpenStatus = false" role="dialog" aria-modal="true" data-keyboard="false"
     id="discourse-modal" class="modal d-modal bookmark-with-reminder fixed-modal ember-view in" aria-labelledby="discourse-modal-title" style="display: block; padding-right: 0px;">
    <div class="modal-outer-container">
        <div class="modal-middle-container">
            <div class="modal-inner-container">
                <div class="modal-header ">
                    <button @click="
            isOpenStatus = !isOpenStatus
        " title="закрыть" class="btn-flat modal-close close
                    btn no-text btn-icon
                    ember-view" type="button">
                        <svg class="fa d-icon d-icon-times svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#times"></use></svg>
                    </button>

                    <div class="title">
                        <h3 id="discourse-modal-title">Сменить статус</h3>
                    </div>
                </div>

                <div id="modal-alert" role="alert"></div>

                <div id="bookmark-reminder-modal" class="modal-body ember-view">
                    <div id="ember736" class="loading-container ember-view">  <!---->

                        <div class="bookmark-options-panel" style="display: block;">
                            <select wire:model="status" title=""
                                    class="select-kit-header single-select-header combo-box-header ember-view">
                                <option value="1">Open</option>
                                <option value="2">Considering</option>
                                <option value="3">In Progress</option>
                                <option value="4">Implemented</option>
                                <option value="5">Closed</option>

                            </select>
                        </div>

                        <div class="control-group bookmark-name-wrap">
                            <textarea wire:model="comment" name="bookmark-name" placeholder="Укажите примечание"
                                   maxlength="100" cols="30" rows="3" id="bookmark-name" class="bookmark-name
                                   ember-text-field ember-view" type="text"></textarea>
                        </div>

                        <div class="control-group bookmark-name-wrap">
                            <input wire:model="notifyAllVoters" type="checkbox" name="notify_voters" class="rounded bg-gray-200">
                            <span class="ml-2">Notify all voters</span>
                        </div>

                        <div class="modal-footer control-group">
                            <button wire:click="setStatus" class="btn-primary btn btn-text ember-view" type="button">
                                <span class="d-button-label">Сохранить</span>
                            </button>
                            <a href="" @click="
            isOpenStatus = !isOpenStatus
        " class="d-modal-cancel"
                               data-ember-action=""
                               data-ember-action-758="758">Отмена</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
