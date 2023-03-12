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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('author_id');
            $table->char('name');
            $table->char('excerpt')->nullable();
            $table->text('body')->nullable();
            $table->char('image');
            $table->char('slug');
            $table->char('meta_description')->nullable();
            $table->char('meta_keywords')->nullable();
            $table->enum('status', ['PUBLISHED','DRAFT','PENDING']);
            $table->integer('featured')->default(0);
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
        Schema::dropIfExists('posts');
    }
};
