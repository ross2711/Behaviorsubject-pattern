import { Component } from '@angular/core';
import { TodoService } from '../shared/todos.service';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  todos$ = this.todosService.data$;
  constructor(private todosService: TodoService) {}
}
