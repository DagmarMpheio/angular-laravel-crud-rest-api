<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//rota da API
Route::apiResource('tarefas', \App\Http\Controllers\TarefaController::class);
