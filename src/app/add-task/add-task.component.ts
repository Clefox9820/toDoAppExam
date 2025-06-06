import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  IonItem,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonInput,
  IonButton,
  IonHeader,
  IonAlert, IonText
} from '@ionic/angular/standalone';

import { TodoTask } from '../types/task.model';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonTitle, IonButtons, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  imports: [IonText,
    IonAlert,
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonInput,
    IonButton,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonIcon

  ],
})
export class AddTaskComponent implements OnInit {
  @Output() dismiss = new EventEmitter<void>();

  @Output() taskAdded = new EventEmitter<TodoTask>();

  alertOpen = false;

  task: TodoTask = {
    id: 0,
    description: '',
    priority: '3',
  };

  ngOnInit() { }

  addTask() {
    if (!this.task.description.trim() || !this.task.priority) {
      this.alertOpen = true;
      return;
    }

    const newTask: TodoTask = {
      ...this.task,
      id: Date.now(),
    };

    this.taskAdded.emit(newTask);

    const lastPriority = this.task.priority;
    this.task = {
      id: 0,
      description: '',
      priority: lastPriority,
    };
    this.dismiss.emit();

  }

}
