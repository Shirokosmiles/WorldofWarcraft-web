<?php

namespace App\Models\Game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use function PHPUnit\Framework\isNull;

class Account extends Model
{
    use HasFactory;

    protected $connection = 'auth';

    protected $table = 'account';

    protected $fillable = [
        'username', 'battlenet_account', 'battlenet_index',
        'email', 'reg_mail', 'salt', 'verifier', 'expansion'
    ];

    protected $hidden = [
        'salt',
        'verifier',
        'battlenet_account',
        'battlenet_index',
    ];

    protected $casts = [
        'joindate' => 'datetime',
        'last_login' => 'datetime',
    ];

    const CREATED_AT = 'joindate';
    const UPDATED_AT = 'last_login';

    public function status(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Banned::class, 'id', 'id')->whereActive(1);
    }

    public function expansion_name(): string
    {
        return match ($this->expansion) {
            1 => 'World of Warcraft®: The Burning Crusade®',
            2 => 'World of Warcraft®: Wrath of the Lich King®',
            3 => 'World of Warcraft®: Cataclysm®',
            4 => 'World of Warcraft®: Mists of Pandaria®',
            5 => 'World of Warcraft®: Warlords of Draenor®',
            6 => 'World of Warcraft®: Legion®',
            7 => 'World of Warcraft®: Battle for Azeroth®',
            8 => 'World of Warcraft®: Shadowlands®',
            default => 'World of Warcraft®: Classic®',
        };
    }
}
