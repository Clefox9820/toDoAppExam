import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  IonItem,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonInput,
  IonButton,
  IonHeader,
} from '@ionic/angular/standalone';

import { Task } from '../types/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  imports: [
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonInput,
    IonButton,
    IonHeader,
    FormsModule
  ],
})
export class AddTaskComponent implements OnInit {
  @Output() taskAdded = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() { }

  task: Task = {
    id: 0,
    description: '',
    priority: '0'
  };

  addTask() {
    const newTask: Task = {
      ...this.task,
      id: Date.now()
    };

    const existing = localStorage.getItem('tasks');
    const tasks: Task[] = existing ? JSON.parse(existing) : [];

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    this.taskAdded.emit(newTask);

    this.task = {
      id: 0,
      description: '',
      priority: '0'
    };

  }
}
