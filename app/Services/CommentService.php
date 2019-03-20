<?php

namespace App\Services;


use App\Models\Comment;
use App\Models\Task;
use App\Models\User;

class CommentService
{
    protected $user;
    public  function __construct(User $user)
    {
        $this->user = $user;
    }

    public function save($request)
    {
        $task = Task::where('id', $request['task_id'])->first();

        $comment = new Comment();
        $comment->body = $request['entity']['body'];
        $comment->user_id = $this->user->id;
        $newComment = $task->comments()->save($comment);
        $newComment->load('user');
        return $newComment;
    }
}