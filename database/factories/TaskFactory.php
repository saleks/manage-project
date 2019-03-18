<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Task::class, function (Faker $faker) {
    return [
        'name' => $faker->text(20),
        'description' => $faker->text(100),
        'start_date' => $faker->date('Y-m-d'),
        'end_date' => $faker->date('Y-m-d'),
        'progress' => rand(0, 100),
        'project_id' => rand(1, 5)
    ];
});
