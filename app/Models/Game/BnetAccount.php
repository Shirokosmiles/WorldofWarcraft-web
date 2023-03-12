<?php

namespace App\Models\Game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BnetAccount extends Model
{
    use HasFactory;

    protected $connection = 'auth';

    protected $table = 'battlenet_accounts';

    protected $fillable = ['email', 'sha_pass_hash', 'last_login'];

    public $timestamps = false;
}
