<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(RolesTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(ProgrammeTableSeeder::class);
         $this->call(ProjectStatusTableSeeder::class);
         $this->call(ProjectTableSeeder::class);
         $this->call(TaskTableSeeder::class);
         $this->call(CommentTableSeeder::class);
    }
}
