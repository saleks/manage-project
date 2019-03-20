<?php

namespace App\Services;


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

    }
}