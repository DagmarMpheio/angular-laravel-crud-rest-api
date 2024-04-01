import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Task } from '../../task';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [ FormsModule, RouterModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css',
})
export class TarefaComponent implements OnInit {
  tasks: any;
  task = new Task();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getTasksdata();
  }

  getTasksdata() {
    this.dataService.getData().subscribe((res) => {
      this.tasks = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.tasks).subscribe((res) => {
      this.getTasksdata();
    });
  }

  deleteData(id:any){
    this.dataService.deleteData(id).subscribe(res => {
      this.getTasksdata();
    })
  }
}
