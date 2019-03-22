<?php

namespace App\Http\Controllers\API;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth\RegisterController as Controller;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $errors = $this->validator($request->all())->errors();
        if (count($errors)) {
            return response()->json(['errors' => $errors], 401);
        }
        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);

        return response()->json(['user' => $user], 200);
    }
}
