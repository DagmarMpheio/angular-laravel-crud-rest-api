import { Component, OnInit  } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-edit-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './edit-tarefa.component.html',
  styleUrl: './edit-tarefa.component.css'
})
export class EditTarefaComponent  implements OnInit {
  tasks:any;

  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.getTasksdata();
  }

  getTasksdata() {
    this.dataService.getData().subscribe(res =>{
      this.tasks = res;
    });
  }
}
