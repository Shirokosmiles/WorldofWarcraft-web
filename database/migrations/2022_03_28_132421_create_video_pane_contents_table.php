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
        Schema::create('video_pane_contents', function (Blueprint $table) {
            $table->id();
            $table->char('title');
            $table->char('body');
            $table->char('url_one')->nullable();
            $table->char('url_one_title')->nullable();
            $table->char('url_two')->nullable();
            $table->char('url_two_title')->nullable();
            $table->char('url_tree')->nullable();
            $table->char('url_tree_title')->nullable();
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
        Schema::dropIfExists('video_pane_contents');
    }
};
