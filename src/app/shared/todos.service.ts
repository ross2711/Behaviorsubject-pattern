import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

const INIT_DATA = [1, 2, 3];
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
@Injectable()
export class TodoService {
  private DataStore = new BehaviorSubject(INIT_DATA);
  data$: Observable<any> = this.DataStore.asObservable();

  constructor(private httpClient: Http) {}
  loadTodos() {
    this.httpClient
      .get(`${BASE_URL}`)
      .map(res => res.json())
      .subscribe(data => {
        this.DataStore.next(data);
      });
  }
}
