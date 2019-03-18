<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Project::class, function (Faker $faker) {
    return [
        'name' => $faker->text(20),
        'status_id' => rand(1, 3),
        'programme_id' => 1
    ];
});
