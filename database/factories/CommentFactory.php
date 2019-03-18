<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Comment::class, function (Faker $faker) {
    return [
        'body' => $faker->text,
        'user_id' => rand(1, 10),
        'task_id' => rand(1, 20)
    ];
});
