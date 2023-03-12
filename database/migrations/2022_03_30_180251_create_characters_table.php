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
        Schema::create('characters', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('account')->nullable();
            $table->integer('index')->default(1);
            $table->bigInteger('guid')->nullable();
            $table->integer('isActive');
            $table->char('name');
            $table->smallInteger('class');
            $table->char('class_text');
            $table->char('class_key');
            $table->smallInteger('race');
            $table->char('race_text');
            $table->char('race_key');
            $table->smallInteger('gender');
            $table->integer('level');
            $table->integer('realmId')->default(0);
            $table->integer('totaltime')->default(0);
            $table->integer('logout_time')->default(0);
            $table->integer('totalHonorPoints')->default(0);
            $table->integer('totalKills')->default(0);
            $table->integer('health')->default(0);
            $table->integer('power1')->default(0);
            $table->integer('power2')->default(0);
            $table->integer('power3')->default(0);
            $table->integer('power4')->default(0);
            $table->integer('power5')->default(0);
            $table->integer('power6')->default(0);
            $table->integer('power7')->default(0);
            $table->integer('chosenTitle')->default(0);
            $table->integer('talentGroupsCount')->default(0);
            $table->integer('activeTalentGroup')->default(0);
            $table->char('realmName')->nullable();
            $table->char('realmSlug')->nullable();
            $table->char('faction')->nullable();
            $table->char('faction_text')->nullable();
            $table->integer('guildId')->nullable();
            $table->char('guildName')->nullable();
            $table->char('guildUrl')->nullable();
            $table->timestamps();

            $table->fulltext('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters');
    }
};
