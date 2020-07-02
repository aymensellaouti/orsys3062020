import { Component, OnInit } from '@angular/core';
import { Todo } from './../Model/todo';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  name: string = '';
  content: string = '';
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    //Donne moi mes todos
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(this.name, this.content);
    this.name = '';
    this.content = '';
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
