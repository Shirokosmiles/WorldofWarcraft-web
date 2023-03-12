<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class VideoPaneContent extends Model
{
    use HasFactory, HasTranslations;

    public array $translatable = ['title', 'body', 'url_one_title', 'url_two_title', 'url_tree_title'];
}
