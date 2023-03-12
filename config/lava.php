<?php

return [

    'jwt' => "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3ZmUzMGFkOC05MmYxLTFlZWItNGVlNS1iN2VhNTEzYTZkNTMiLCJ0aWQiOiI0MjZiMzVmZS00MTAxLTg2YmEtYmI4ZC00MTg5YzBiYWJiZjIifQ.m0jasuyj1rzAODahpRZ2_KNKCHibpggzbMqXNU48j_0",

    /*
     * Ваш номер счета, на который будут зачислены средства
     * Пример: R40510054
     */
    'wallet' => 'R10005802',
    /*
     * Url для отправки webhook
     * (Max: 500)
     * Пример: https://lava.ru/hook
     */
    'hook_url' => '',

    /*
     * Url для переадресации после успешной оплаты
     * (Max: 500)
     * Пример: https://lava.ru/success
     */
    'success_url' => '',

    /*
     * Url для переадресации после неудачной оплаты
     * (Max: 500)
     * Пример: https://lava.ru/fail
     */
    'fail_url' => '',

    /*
     * Время жизни счета в минутах
     * По умолчанию: 1440
     * Минимум: 1
     * Максимум: 43200
     */

    'expire' => 1440,

    /*
     * С кого списывать комиссию
     * 1 - Списывать с клиента
     * 0 - Списывать с магазина
     */
    'subtract' => 1,

    /*
     * System Config
     */

    'invoice' => 'https://api.lava.ru/invoice/create'

    /*
     * System Config
     */
];
