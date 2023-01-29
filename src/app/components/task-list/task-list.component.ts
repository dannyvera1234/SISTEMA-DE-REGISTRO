import { ITask, Levels } from './../../models/interfaces/Task.interfece';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent  implements OnInit{

  //TODO: reformular como una lista de tareas
    task1: ITask = {
      title: 'task1',
      description:'Descrioption1',
      completed: false,
      level:Levels.Info
    }

    task2: ITask = {
      title: 'task2',
      description:'Descrioption1',
      completed: true,
      level:Levels.Urgent
    }

    constructor(){}

    ngOnInit():void{

    }
}
