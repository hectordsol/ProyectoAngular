import { Component , OnInit} from '@angular/core';
import { ITask, Levels } from 'src/app/model/interfaces/Task.interface';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  ngOnInit(): void {
  }
task1: ITask = {
  title: "task 1",
  description: "description 1",
  completed:false,
  level: Levels.Info
}
task2: ITask = {
  title: "task 2",
  description: "description 2",
  completed:true,
  level: Levels.Urgent
}

constructor(){}
}
