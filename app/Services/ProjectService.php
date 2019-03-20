<?php
/**
 * Created by PhpStorm.
 * User: salex
 * Date: 20.03.19
 * Time: 10:43
 */

namespace App\Services;


use App\Models\Programme;
use App\Models\Project;
use App\Models\ProjectStatus;
use App\Models\User;

class ProjectService
{
    protected $user;

    public  function __construct()
    {
    }

    public function save($request)
    {
        $programme = Programme::where('id', $request['programme_id'])->first();
        $status = ProjectStatus::where('name', $request['entity']['status'])->first();

        $project = new Project();
        $project->name = $request['entity']['name'];
        $project->status_id = $status->id;

        return $programme->projects()->save($project);
    }
}