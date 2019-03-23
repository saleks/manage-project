<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->string('reason')->after('name')->nullable()->default(null);
            $table->string('dispatch')->after('name')->nullable()->default(null);
            $table->text('comment')->after('name')->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->removeColumn('reason');
            $table->removeColumn('dispatch');
            $table->removeColumn('comment');
        });
    }
}
