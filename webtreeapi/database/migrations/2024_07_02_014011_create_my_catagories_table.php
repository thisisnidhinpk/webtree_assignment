<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('my_catagories', function (Blueprint $table) {
            $table->integer('catagoryid')->autoIncrement();
            $table->integer('customerid');
            $table->foreign('customerid')->references('customerid')->on('my_users')->onDelete('cascade');
            $table->string('catagory');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('my_catagories');
    }
};
