<?php

namespace App\Models\Game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banned extends Model
{
    use HasFactory;

    protected $connection = 'auth';

    protected $table = 'account_banned';

    protected $casts = [
        'bandate' => 'datetime',
        'unbandate' => 'datetime',
    ];

    public $timestamps = false;
}
