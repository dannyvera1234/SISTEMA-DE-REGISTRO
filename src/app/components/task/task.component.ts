import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interfece';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {


  @Input()  task: ITask  | undefined;


  DeleteTask(){
    console.log("elminar tarea", this.task?.title);
  }
}
