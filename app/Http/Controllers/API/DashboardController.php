<?php

namespace App\Http\Controllers\API;

use App\Models\Comment;
use App\Models\Programme;
use App\Models\Project;
use App\Models\Task;
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
