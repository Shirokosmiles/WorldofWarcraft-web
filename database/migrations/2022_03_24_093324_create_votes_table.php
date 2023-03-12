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
        Schema::create('mmotop_votes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('votes_id')->nullable();
            $table->char('voted_at')->nullable();
            $table->char('name')->nullable();
            $table->char('balance')->nullable();
            $table->char('vote')->nullable();
            $table->char('ip')->nullable();
            $table->integer('complete')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mmotop_votes');
    }
};
