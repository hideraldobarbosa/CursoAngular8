import { Store } from './../../todo.store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TasksService } from '../../todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
  subscription: Subscription;
  
  constructor(private tasksService: TasksService, private store : Store) {}

  ngOnInit() {  
    this.todolist$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));  
      
    this.subscription = this.tasksService.getTodoList$.subscribe();
  }  

  onToggle(event){
    this.tasksService.toggle(event);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}