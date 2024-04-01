import { Routes } from '@angular/router';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { EditTarefaComponent } from './components/edit-tarefa/edit-tarefa.component';

export const routes: Routes = [
    {path: '', component:TarefaComponent},
    {path: 'edit/:id', component:EditTarefaComponent}
];
