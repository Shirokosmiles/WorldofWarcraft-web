<?php

namespace App\Models;

use App\Models\Forum\Idea;
use App\Models\Game\Account;
use App\Models\Game\AccountUser;
use App\Models\Payment\History;
use App\Models\Web\Gifts;
use App\Models\Web\Outputs;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'account_id',
        'balances',
        'votes',
        'password',
        'first_name',
        'last_name',
        'country',
        'day',
        'month',
        'year',
        'phone_number',
        'type',
        'activeCharacters'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function getAvatar()
    {
        $firstCharacter = $this->email[0];

        $integerToUse = is_numeric($firstCharacter)
            ? ord(strtolower($firstCharacter)) - 21
            : ord(strtolower($firstCharacter)) - 96;
        if (!$this->profile_photo_url) {
            return 'https://www.gravatar.com/avatar/'
                .md5($this->email)
                .'?s=200'
                .'&d=https://s3.amazonaws.com/laracasts/images/forum/avatars/default-avatar-'
                .$integerToUse
                .'.png';
        }
        return $this->profile_photo_url;
    }

    protected function type(): Attribute
    {
        /* Users: 0=>User, 1=>gm, 2=>dev, 3=admin, 4=webdev */
        return new Attribute(
            get: fn ($value) =>  ["user", "admin", "gm", "dev", "webdev"][$value],
        );
    }

    public function getEmailHiddenAttribute(): string
    {
        return self::hide_email($this->email);
    }

    function hide_email($email): string
    {
        $test = explode('@', $email);
        return str_pad(substr($test[0], 0, 3),strlen($test[0]),"*").'@'.$test[1];
    }

    public function getFullNameAttribute(): string
    {
        if ($this->first_name && $this->last_name) {
            return Str::ucfirst($this->first_name).' '.Str::ucfirst($this->last_name);
        }
        return 'Не указано';
    }

    public function getFullDateAttribute(): string
    {
        if ($this->day && $this->month && $this->year) {
            return Str::ucfirst($this->day).'.'.Str::ucfirst($this->month).'.'.Str::ucfirst($this->year);
        }
        return 'Не указано';
    }

    public function getFullNameHiddenAttribute(): string
    {
        if ($this->first_name && $this->last_name) {
            return self::star_replace(Str::ucfirst($this->first_name)).' '.self::star_replace(Str::ucfirst($this->last_name));
        }
        return 'Не указано';
    }

    public function getPhoneHiddenAttribute(): string
    {
        if($this->phone_number)  {
            return self::star_replace($this->phone_number);
        }
        return 'Не прикреплен';
    }

    public function setFirstNameAttribute(string $value)
    {
        $this->attributes['first_name'] = Str::ucfirst($value);
    }

    public function setLastNameAttribute(string $value)
    {
        $this->attributes['last_name'] = Str::ucfirst($value);
    }

    public function getFullCountryAttribute(): string
    {
        if ($this->country) {
            return __('country.'.$this->country);
        }
        return 'Не указано';
    }

    function star_replace($string): string
    {
        if ($string) {
            return substr($string, 0, 2) . str_repeat("*", mb_strlen($string)-2) . substr($string, -2);
        }
        return 'Не указано';
    }

    function game(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->HasOne(Account::class, 'id', 'account_id');
    }

    public function transactions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(History::class, 'user_id', 'id');
    }

    public function gifts(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Gifts::class, 'user_id', 'id');
    }

    public function output(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Outputs::class, 'user_id', 'id');
    }

    public function isAdmin()
    {
        return in_array($this->email, [
            'fanaticus3@gmail.com'
        ]);
    }

    public function countForum(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Idea::class, 'comments');
    }
}
