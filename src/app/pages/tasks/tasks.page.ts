import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton, IonModal } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { AddTaskComponent } from "../../add-task/add-task.component";
import { TasksListComponent } from 'src/app/tasks-list/tasks-list.component';
import { TodoTask } from 'src/app/types/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, RouterLink, AddTaskComponent, TasksListComponent, IonModal]
})
export class TasksPage implements OnInit {

  constructor() { }

  tasks: TodoTask[] = [];

  //Obtener lista de tasks
  ngOnInit() {
    const stored = localStorage.getItem('tasks');
    this.tasks = stored ? (JSON.parse(stored) as TodoTask[]) : [];
  }

  //Añadir nueva tarea
  handleTaskAdded(task: TodoTask) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  //Borrar tarea
  handleTaskDeleted(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  //Borrar todas las tareas
  handleClearAll() {
    this.tasks = [];
    localStorage.removeItem('tasks');
  }

  //Cerrar modal
  dismissModal() {
    const modal = document.querySelector('ion-modal');
    modal?.dismiss();
  }

}
