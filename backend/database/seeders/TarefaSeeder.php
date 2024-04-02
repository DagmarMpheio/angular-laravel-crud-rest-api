<?php

namespace Database\Seeders;

use App\Models\Tarefa;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TarefaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //reset a tabela tarefas
        DB::statement('SET FOREIGN_KEY_CHECKS=0'); // para mysql
        //DB::statement('PRAGMA foreign_keys = OFF;'); // para sqlite
        DB::table('tarefas')->truncate(); //apagar todos os dados da tabela

        //gerar 5 tarefas
        $faker = Factory::create();

        for ($i = 0; $i < 5; $i++) {
            $tarefa = Tarefa::create([
                'name' => $faker->text(50),
                'description' => $faker->text(),
                'status' => 'Pendente',
            ]);
        }
    }
}
