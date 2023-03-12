<?php

namespace App\Services;

use App\Models\Servers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JetBrains\PhpStorm\ArrayShape;

class Server
{
    public function graphql(Request $request): array|bool|string
    {
        if ($request->get('operationName')) {
            if ($request->get('operationName') === 'GetNow') {
                return self::status();
            } else {
                if($request->get('variables')['input']['compoundRegionGameVersionSlug'] === 'eu') {
                    return self::status();
                } elseif ($request->get('variables')['input']['compoundRegionGameVersionSlug'] === 'sl-eu') {
                    return self::statusSl();
                }  elseif($request->get('variables')['input']['compoundRegionGameVersionSlug'] === 'wotlk-eu') {
                    return self::statusWotlk();
                }  elseif($request->get('variables')['input']['compoundRegionGameVersionSlug'] === 'lg-eu') {
                    return self::statusLegion();
                }
            }
        } else {
            return json_encode(
                ["errors"=>[["message"=>"PersistedQueryNotSupported"]]]
            );
        }
        return json_encode(
            ["errors"=>[["message"=>"PersistedQueryNotSupported"]]]
        );
    }

    #[ArrayShape(["data" => "array"])] private static function statusLegion(): array
    {
        $server = [];
        foreach (Servers::whereType('lg')->get() as $item) {

            $errNo = 0;
            $errStr = 0;

            $server[] = [
                "name" => $item->name,
                "slug" => $item->slug,
                "locale" => "ru-RU",
                "timezone" => "CEST",
                "online" => (bool)(@fsockopen($item->ip, $item->port, $errNo, $errStr, 1)),
                "category" => "Русский",
                "players" => ceil(self::getOnlinePlayers($item->server_id)->population),
                "type" => [
                    "id" => "1",
                    "name" => $item->type_server,
                    "slug" => "обычный",
                    "enum" => "NORMAL",
                    "__typename" => "RealmTypeEnum"
                ],
                "population" => [
                    "id" => "2",
                    "name" => "Средняя",
                    "slug" => "средняя",
                    "enum" => "MEDIUM",
                    "__typename" => "RealmPopulationEnum"
                ],
                "__typename" => "Realm"
            ];
        }
        return [
            "data" => [
                "GameVersions" => [
                    [
                        "name" => "Все миры",
                        "slug" => "world-of-warcraft",
                        "key" => "mainline",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Shadowlands",
                        "slug" => "shadowlands",
                        "key" => "sl",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Legion",
                        "slug" => "legion",
                        "key" => "lg",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Wrath of the Lich King",
                        "slug" => "wrath-of-the-lich-king",
                        "key" => "wotlk",
                        "__typename" => "GameVersion"
                    ]
                ],
                "Regions" => [
                    ["name" => "Европа","slug" => "europe","key" => "eu","__typename" => "Region"]
                ],
                "Realms" => $server
            ]
        ];
    }

    #[ArrayShape(["data" => "array"])] private static function statusWotlk(): array
    {
        $server = [];
        foreach (Servers::whereType('wotlk')->get() as $item) {

            $errNo = 0;
            $errStr = 0;

            $server[] = [
                "name" => $item->name,
                "slug" => $item->slug,
                "locale" => "ru-RU",
                "timezone" => "CEST",
                "online" => (bool)(@fsockopen($item->ip, $item->port, $errNo, $errStr, 1)),
                "category" => "Русский",
                "players" => ceil(self::getOnlinePlayers($item->server_id)->population),
                "type" => [
                    "id" => "1",
                    "name" => $item->type_server,
                    "slug" => "обычный",
                    "enum" => "NORMAL",
                    "__typename" => "RealmTypeEnum"
                ],
                "population" => [
                    "id" => "2",
                    "name" => "Средняя",
                    "slug" => "средняя",
                    "enum" => "MEDIUM",
                    "__typename" => "RealmPopulationEnum"
                ],
                "__typename" => "Realm"
            ];
        }
        return [
            "data" => [
                "GameVersions" => [
                    [
                        "name" => "Все миры",
                        "slug" => "world-of-warcraft",
                        "key" => "mainline",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Shadowlands",
                        "slug" => "shadowlands",
                        "key" => "sl",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Legion",
                        "slug" => "legion",
                        "key" => "lg",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Wrath of the Lich King",
                        "slug" => "wrath-of-the-lich-king",
                        "key" => "wotlk",
                        "__typename" => "GameVersion"
                    ]
                ],
                "Regions" => [
                    ["name" => "Европа","slug" => "europe","key" => "eu","__typename" => "Region"]
                ],
                "Realms" => $server
            ]
        ];
    }

    #[ArrayShape(["data" => "array"])] private static function statusSl(): array
    {
        $server = [];
        foreach (Servers::whereType('sl')->get() as $item) {

            $errNo = 0;
            $errStr = 0;

            $server[] = [
                "name" => $item->name,
                "slug" => $item->slug,
                "locale" => "ru-RU",
                "timezone" => "CEST",
                "online" => (bool)(@fsockopen($item->ip, $item->port, $errNo, $errStr, 1)),
                "category" => "Русский",
                "players" => ceil(self::getOnlinePlayers($item->server_id)->population),
                "type" => [
                    "id" => "1",
                    "name" => $item->type_server,
                    "slug" => "обычный",
                    "enum" => "NORMAL",
                    "__typename" => "RealmTypeEnum"
                ],
                "population" => [
                    "id" => "2",
                    "name" => "Средняя",
                    "slug" => "средняя",
                    "enum" => "MEDIUM",
                    "__typename" => "RealmPopulationEnum"
                ],
                "__typename" => "Realm"
            ];
        }
        return [
            "data" => [
                "GameVersions" => [
                    [
                        "name" => "Все миры",
                        "slug" => "world-of-warcraft",
                        "key" => "mainline",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Shadowlands",
                        "slug" => "shadowlands",
                        "key" => "sl",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Legion",
                        "slug" => "legion",
                        "key" => "lg",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Wrath of the Lich King",
                        "slug" => "wrath-of-the-lich-king",
                        "key" => "wotlk",
                        "__typename" => "GameVersion"
                    ]
                ],
                "Regions" => [
                    ["name" => "Европа","slug" => "europe","key" => "eu","__typename" => "Region"]
                ],
                "Realms" => $server
            ]
        ];
    }

    #[ArrayShape(["data" => "array"])] private static function status(): array
    {
        $server = [];
        foreach (Servers::all() as $item) {

            $errNo = 0;
            $errStr = 0;

            $server[] = [
                "name" => $item->name,
                "slug" => $item->slug,
                "locale" => "ru-RU",
                "timezone" => "CEST",
                "online" => (bool)(@fsockopen($item->ip, $item->port, $errNo, $errStr, 1)),
                "category" => "Русский",
                "players" => ceil(self::getOnlinePlayers($item->server_id)->population),
                "type" => [
                    "id" => "1",
                    "name" => $item->type_server,
                    "slug" => "обычный",
                    "enum" => "NORMAL",
                    "__typename" => "RealmTypeEnum"
                ],
                "population" => [
                    "id" => "2",
                    "name" => "Средняя",
                    "slug" => "средняя",
                    "enum" => "MEDIUM",
                    "__typename" => "RealmPopulationEnum"
                ],
                "__typename" => "Realm"
            ];
        }
        return [
            "data" => [
                "GameVersions" => [
                    [
                        "name" => "Все миры",
                        "slug" => "world-of-warcraft",
                        "key" => "mainline",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Shadowlands",
                        "slug" => "shadowlands",
                        "key" => "sl",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Legion",
                        "slug" => "legion",
                        "key" => "lg",
                        "__typename" => "GameVersion"
                    ],
                    [
                        "name" => "Wrath of the Lich King",
                        "slug" => "wrath-of-the-lich-king",
                        "key" => "wotlk",
                        "__typename" => "GameVersion"
                    ]
                ],
                "Regions" => [
                    ["name" => "Европа","slug" => "europe","key" => "eu","__typename" => "Region"]
                ],
                "Realms" => $server
            ]
        ];
    }

    /**
     * @param $id
     * @return Model|Builder|object|null
     */
    private static function getOnlinePlayers($id)
    {
        return DB::connection('auth')->table('realmlist')->where('id', $id)->first();
    }
}
