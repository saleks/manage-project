<?php

namespace App\Services;


use App\Models\Programme;
use App\Models\User;

class ProgrammeService
{
    protected $user;

    public  function __construct(User $user)
    {
        $this->user = $user;
    }

    public function save($request)
    {
        $programme = new Programme();
        $programme->fill($request['entity']);

        return $this->user->programmes()->save($programme);
    }
}