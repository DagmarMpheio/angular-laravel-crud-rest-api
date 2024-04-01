import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpclient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getData() {
    return this.httpclient.get('http://localhost:8000/api/tarefas/');
  }

  insertData(data: any) {
    return this.httpclient.post('http://localhost:8000/api/tarefas/', data);
  }

  getTaskByID(id: any) {
    return this.httpclient.get('http://localhost:8000/api/tarefas/' + id);
  }

  updateData(id: any, data: any) {
    return this.httpclient.put('http://localhost:8000/api/tarefas/' + id, data);
  }

  deleteData(id:any) {
    return this.httpclient.delete('http://localhost:8000/api/tarefas/'+id);
  }
}
