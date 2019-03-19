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
        $programme->name = 'Plant Support';
        $programme2 = new Programme();
        $programme2->name = 'Product Performance';

        $user->programmes()->save($programme);
        $user->programmes()->save($programme2);
    }
}
