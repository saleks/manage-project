<?php

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $system = new Role();
        $system->name         = Role::SYSTEM;
        $system->display_name = 'System'; // optional
        $system->description  = 'System'; // optional
        $system->save();

        $admin = new Role();
        $admin->name         = Role::ADMIN;
        $admin->display_name = 'Admin'; // optional
        $admin->description  = 'Able to create Programme and Project'; // optional
        $admin->save();

        $admin_assistent = new Role();
        $admin_assistent->name         = Role::ADMIN_ASSISTANT;
        $admin_assistent->display_name = 'Admin Assistant'; // optional
        $admin_assistent->description  = 'Able to create Project'; // optional
        $admin_assistent->save();

        $member = new Role();
        $member->name         = Role::MEMBER;
        $member->display_name = 'Member'; // optional
        $member->description  = 'Able to access projects which they are listed as a member and edit'; // optional
        $member->save();

        $user = new Role();
        $user->name         = Role::USER;
        $user->display_name = 'User'; // optional
        $user->description  = 'Access projects but only readonly'; // optional
        $user->save();
    }
}
