import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/model/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  ngOnInit(): void {
  }

@Input() task: ITask | undefined;

delete(){console.log("Delete Task ",this.task?.title);}

}
