<?php

use App\Models\Programme;
use Illuminate\Database\Seeder;

class ProgrammeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\Models\User::where('email', 'admin@example.com')->first();
        $programme = new Programme();
        $programme->name = 'Programme 1';

        $user->programmes()->save($programme);
    }
}
