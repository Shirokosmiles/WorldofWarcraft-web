<?php

return [
    ////// Система доната
    'enable_payment' => true,   //// Включение/Отключение системы пополнения баланса
    'enable_payoff' => true,    //// Включение/Отключение системы вывода баланса

    'bonus_change_tag' => 350,   //// Стоимость смены Tag
    'bonus_payment' => 1,      //// Множитель пополнения
    'bonus_payoff' => 1,        //// Множитель для вывода
    'bonus_min_payment' => 100,   //// Минимальная сумма для пополнения
    'bonus_min_payoff' => 100,  //// Минимальная сумма для вывода
    'bonus_min_payoff_cd' => 100,  //// Минимальная сумма для вывода
    /// Система доната

    /// Система голосования
    'enable_vote' => true,
    'vote_reward' => 1,
    'vote_url' => 'https://wow.mmotop.ru/servers/35233/votes/new',
    'vote_stats' => ''
    /// Система голосования
];
