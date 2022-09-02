import { CrudService } from './../../service/crud.service';
import { Tarefa } from './../../model/tarefa';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  tarefaObj : Tarefa = new Tarefa();
  tarefaArr : Tarefa[] = [];

  addTarefaValue : string ='';

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.tarefaObj = new Task();
    this.getTask();
  }
  getTask() {
    this.crudService.getTask().subscribe
  }

  addTarefa(tarefa: Tarefa ) {
    return this.crudService.addTask(tarefa).subscribe(res => {

    }, err => {
      alert(err)
    }
    )
  }
}
