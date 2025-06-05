import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { Task } from '../types/task.model';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  imports: [IonList, IonListHeader, IonItem, IonLabel, IonButton, IonIcon, CommonModule, AddTaskComponent],
})

export class TasksListComponent implements OnInit {
  constructor() { }
  tasks: Task[] = []

  ngOnInit() {
    const stored = localStorage.getItem('tasks');
    this.tasks = stored ? JSON.parse(stored) : [];

  }

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  clearAllTasks() {
    this.tasks = [];
    localStorage.removeItem('tasks');
  }

  getPriorityText(priority: string): string {
    switch (priority) {
      case '3': return 'Alta';
      case '2': return 'Media';
      case '1': return 'Baja';
      default: return 'Nula';
    }
  }
}
