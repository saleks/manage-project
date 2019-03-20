<?php

namespace App\Http\Controllers\API;

use App\Models\Comment;
use App\Models\Programme;
use App\Models\Project;
use App\Models\Task;
use App\Services\ProgrammeService;
use App\Services\ProjectService;
use App\Services\TaskService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        $programme = Programme::with(['projects', 'projects.tasks', 'projects.tasks.comments', 'projects.tasks.comments.user'])
//            ->where('user_id', auth()->id())
//            ->get();
        $programmes = Programme::get();
        $projects = Project::with(['status'])->get();
        $tasks = Task::get();
        $comments = Comment::with(['user'])->get();

        $response = [
            'programmes' => $programmes,
            'projects' => $projects,
            'tasks' => $tasks,
            'comments' => $comments,
            'status' => 'success'
        ];
        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!auth()->check()) {
            return response()->json('Unauthenticated.', 401);
        }
        $user = auth()->user();

        switch (request()->get('type')) {
            case 'programme':
                $service = new ProgrammeService($user);
                $entity = $service->save($request);
                break;
            case 'project':
                $service = new ProjectService();
                $entity = $service->save($request);
                break;
            case 'task':
                $service = new TaskService();
                $entity = $service->save($request);
                break;
            default:
                $entity = null;
        }

        $response = [
            'data' => $entity,
            'status' => 'success'
        ];

        return response()->json($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
