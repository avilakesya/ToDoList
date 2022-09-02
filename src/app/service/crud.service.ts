import { Tarefa } from './../model/tarefa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  urlBase : string;

  constructor(private http : HttpClient ) {
    this.urlBase = "http://localhost:3000/tarefas";
  }

  addTask(tarefa: Tarefa ) : Observable<Tarefa>{
    return this.http.post<Tarefa>(this.urlBase, tarefa)
  }

  getTask() : Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.urlBase)
  }

  deleteTask(tarefa: Tarefa ) : Observable<Tarefa>{
    return this.http.delete<Tarefa>(this.urlBase+'/'+tarefa.id)
  }

  editTask(tarefa: Tarefa ) : Observable<Tarefa>{
    return this.http.put<Tarefa>(this.urlBase+'/'+tarefa.id, tarefa)
  }
}
