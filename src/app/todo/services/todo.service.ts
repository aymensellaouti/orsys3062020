import { Injectable } from '@angular/core';
import { Todo } from './../Model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() {
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
}
