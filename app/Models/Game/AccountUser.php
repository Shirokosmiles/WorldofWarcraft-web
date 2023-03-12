<?php

namespace App\Models\Game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountUser extends Model
{
    use HasFactory;

    protected $connection = 'web';

    protected $table = 'account_users';

    protected $fillable = [
        'user_id', 'account_id'
    ];
}
