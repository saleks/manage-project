<?php

namespace App\Services;


use App\Models\Project;
use App\Models\Task;

class TaskService
{
    public  function __construct()
    {
    }

    public function save($request)
    {
        $project = Project::where('id', $request['project_id'])->first();

        $task = new Task();
        $task->fill($request['entity']);

        return $project->tasks()->save($task);
    }
}