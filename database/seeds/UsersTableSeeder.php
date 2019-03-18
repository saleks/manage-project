<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = new User();
        $admin->first_name = 'Jack';
        $admin->last_name = 'Sparrow';
        $admin->email = 'admin@example.com';
        $admin->password = bcrypt('secret');
        $admin->save();

        $admin_role = Role::where('name', Role::ADMIN)->first();
        $admin->attachRole($admin_role);

        factory(App\Models\User::class, 10)->create()->each(function ($user) {
            $array_roles = [
                Role::where('name', Role::ADMIN_ASSISTANT)->first(),
                Role::where('name', Role::MEMBER)->first(),
                Role::where('name', Role::USER)->first(),
            ];
            $rand_key = array_rand($array_roles, 1);
            $user->attachRole($array_roles[$rand_key]);
        });
    }
}
