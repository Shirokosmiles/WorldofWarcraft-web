<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->char('first_name')
                ->after('name')
                ->nullable();

            $table->char('last_name')
                ->after('first_name')
                ->nullable();

            $table->char('country')
                ->after('last_name')
                ->nullable();

            $table->char('day')
                ->after('country')
                ->nullable();

            $table->char('month')
                ->after('day')
                ->nullable();

            $table->char('year')
                ->after('month')
                ->nullable();

            $table->char('phone_number')
                ->after('year')
                ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(array_merge([
                'first_name',
                'last_name',
                'country',
                'day',
                'month',
                'year',
                'phone_number'
            ]));
        });
    }
};
