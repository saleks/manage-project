<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
    const SYSTEM = 'system';
    const ADMIN = 'admin';
    const ADMIN_ASSISTANT = 'admin_assistant';
    const MEMBER = 'member';
    const USER = 'user';
}
