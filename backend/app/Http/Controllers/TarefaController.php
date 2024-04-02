<?php

namespace App\Http\Controllers;

use App\Models\Tarefa;
use Illuminate\Http\Request;

class TarefaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tarefas = Tarefa::all();
        return response()->json($tarefas);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        //por padrao uma tarefa tem status de pendente
        $request['status'] = 'Pendente';

        $tarefa = Tarefa::create($request->all());
        return dd($tarefa);
        //return response()->json($tarefa, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tarefa = Tarefa::find($id);
        return response()->json($tarefa);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tarefa = Tarefa::find($id);

        if (!$tarefa) {
            return response()->json(['message' => 'Tarefa não encontrada'], 404);
        }

        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        //por padrao uma tarefa tem status de pendente
        $request['status'] = 'Pendente';

        $tarefa->update($request->all());
        return response()->json($tarefa, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tarefa = Tarefa::find($id);
        if (!$tarefa) {
            return response()->json(['message' => 'tarefa não encontrada'], 404);
        }

        $tarefa::destroy($id);
        return response()->json(['message' => 'Tarefa excluída com sucesso'], 204);
    }
}
