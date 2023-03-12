<?php


namespace App\Models\Forum;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $primaryKey = "id";

    public function ideas()
    {
        return $this->hasMany(Idea::class);
    }

    public function forums()
    {
        return $this->hasMany(self::class, 'parent_id');
    }
}
