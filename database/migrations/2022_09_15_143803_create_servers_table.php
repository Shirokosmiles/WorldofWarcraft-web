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
        Schema::create('servers', function (Blueprint $table) {
            $table->id();
            $table->integer('server_id')->nullable();
            $table->char('name');
            $table->char('slug');
            $table->char('type');
            $table->char('type_server');
            $table->char('ip');
            $table->char('port');
            $table->char('Auth');
            $table->char('Characters');
            $table->char('World');
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
        Schema::dropIfExists('servers');
    }
};
