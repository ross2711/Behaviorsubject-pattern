import { Component } from '@angular/core';
import { TodoService } from '../shared/todos.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todos$ = this.todosService.data$;
  constructor(private todosService: TodoService) {}
}
