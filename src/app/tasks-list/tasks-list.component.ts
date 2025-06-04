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

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  imports: [IonList, IonListHeader, IonItem, IonLabel, IonButton, IonIcon, CommonModule],
})
export class TasksListComponent implements OnInit {
  constructor() {}
  tasks: { name: string; priority: string }[] = [];

  ngOnInit() {
    // Datos hardcodeados de ejemplo
    this.tasks = [
      { name: 'Grocery Shopping', priority: 'high' },
      { name: 'Pay Bills', priority: 'medium' },
      { name: 'Book Appointment', priority: 'low' },
      { name: 'Finish Homework', priority: 'high' },
      { name: 'Call Mom', priority: 'medium' },
      { name: 'Water Plants', priority: 'low' },
    ];
  }

   deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  clearAllTasks() {
    this.tasks = [];
  }
}
