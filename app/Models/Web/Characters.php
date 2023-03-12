<?php

namespace App\Models\Web;

use App\Trait\Search;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Characters extends Model
{
    use HasFactory, Search;

    protected array $searchable = [
        'name'
    ];

}
