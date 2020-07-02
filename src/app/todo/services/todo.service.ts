import { Injectable } from '@angular/core';
import { Todo } from './../Model/todo';
import { LoggerService } from './../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {
    this.todos = [
      new Todo(1, 'lundi', 'sport'),
      new Todo(2, 'mardi', 'Angular'),
    ];
  }
  // Récupérer la liste des todos
  getTodos(): Todo[] {
    return this.todos;
  }
  // Ajouter un todo
  addTodo(name: string, content: string) {
    const idTodo = this.todos[this.todos.length - 1].id + 1;
    let newTodo = new Todo(idTodo, name, content);
    this.todos.push(newTodo);
  }
  //logger la liste des todos
  loggerTodos() {
    this.loggerService.logger(this.todos);
  }
  //Supprimer un todo
  deleteTodo(todo: Todo) {
    //On va commencer par chercher le todo à supprimer
    const indice = this.todos.indexOf(todo);
    if (indice > -1) {
      this.todos.splice(indice, 1);
    } else {
      alert('élément innexistant');
    }
  }
}
