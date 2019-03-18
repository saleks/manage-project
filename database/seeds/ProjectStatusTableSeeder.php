<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'Active'],
            ['name' => 'Completed'],
            ['name' => 'Archived'],
            ['name' => 'Deleted'],
            ['name' => 'Drafts'],
        ];

        DB::table('project_statuses')->insert($data);
    }
}
