import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import { TodoService } from './shared/todos.service';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = 'https://github.com/steelx';
  title: string;

  constructor(private api: ApiService, private todoService: TodoService) {
    this.title = this.api.title;
    this.todoService.loadTodos();
  }
}
