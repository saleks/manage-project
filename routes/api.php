<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['namespace' => 'API'], function () {
    Route::group(['prefix' => 'auth','middleware' => 'guest'], function () {
        Route::post('login', 'AuthController@login');
    });
    Route::group(['middleware' => 'jwt.refresh', 'prefix' => 'auth' ], function () {
        Route::post('refresh', 'AuthController@refresh');
    });

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::group(['prefix' => 'auth'], function () {
            Route::post('user', 'AuthController@user');
            Route::post('logout', 'AuthController@logout');
        });
        Route::resource('dashboard', 'DashboardController');
    });
});