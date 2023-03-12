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
        Schema::create('keys', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('type')->default(0)->comment('0 - item, 1 - votes, 2 - money');
            $table->char('key')->nullable();
            $table->char('title')->nullable();
            $table->bigInteger('item')->nullable();
            $table->smallInteger('countItem')->nullable();
            $table->smallInteger('votes')->nullable();
            $table->smallInteger('money')->nullable();
            $table->integer('status')->default(0);
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
        Schema::dropIfExists('keys');
    }
};
