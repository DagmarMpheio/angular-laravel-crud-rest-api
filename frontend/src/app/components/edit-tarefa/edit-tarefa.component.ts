import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Task } from '../../task';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-tarefa',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './edit-tarefa.component.html',
  styleUrl: './edit-tarefa.component.css',
})
export class EditTarefaComponent implements OnInit {
  id: any;
  data: any;
  task = new Task();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getTaskByID(this.id).subscribe((res) => {
      this.data = res;
      this.task = this.data;
    });
  }
}
