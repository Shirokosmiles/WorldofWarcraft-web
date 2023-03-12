<?php

namespace App\Models\Web;

use App\Models\User;
use App\Trait\Search;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Post extends Model
{
    use HasFactory, HasTranslations, Search;

    protected array $searchable = [
        'name',
        'excerpt',
        'body',
    ];

    protected $guarded = [];

    protected $primaryKey = 'id';

    public array $translatable = ['name', 'excerpt', 'body', 'meta_description', 'meta_keywords'];

    public function author(): \Illuminate\Database\Eloquent\Relations\hasOne
    {
        return $this->hasOne(User::class, 'id', 'author_id');
    }
}
