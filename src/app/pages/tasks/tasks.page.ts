import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { AddTaskComponent } from "../../add-task/add-task.component";
import { TasksListComponent } from 'src/app/tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, RouterLink, AddTaskComponent, TasksListComponent]
})
export class TasksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
