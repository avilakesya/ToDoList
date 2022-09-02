import { CrudService } from './../../service/crud.service';
import { Tarefa } from './../../model/tarefa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  tarefaObj: Tarefa = new Tarefa();
  tarefaArr: Tarefa[] = [];

  addTarefaValue: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.tarefaObj = new Tarefa();
    this.tarefaArr = [];
    this.getTarefa();
  }

  getTarefa() {
    this.crudService.getTask().subscribe(
      (res) => {
        this.tarefaArr = res;
      },
      (err) => {
        alert('Não foi possível obter a lista de tarefas!!!');
      }
    );
  }

  addTarefa() {
    this.tarefaObj.titulo = this.addTarefaValue;
    this.crudService.addTask(this.tarefaObj).subscribe(
      (res) => {
        this.ngOnInit();
        this.addTarefaValue = '';
      },
      (err) => {
        alert(err);
      }
    );
  }

  editTarefa() {
    this.crudService.editTask(this.tarefaObj).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('Não deu para atualizar a tarefa!!!');
      }
    );
  }

  deleteTarefa(tarefa: Tarefa) {
    this.crudService.deleteTask(tarefa).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('Não deu para deletar a tarefa!!!');
      }
    );
  }
}
