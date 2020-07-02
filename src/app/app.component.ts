import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { TodoService } from './todo/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService
  ) {}
  ngOnInit(): void {
    this.loggerService.logger('Je suis app Component');
  }
  loggerTodo() {
    this.todoService.loggerTodos();
  }
}
