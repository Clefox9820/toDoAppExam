import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonAlert,
  IonButton,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';

import type { OverlayEventDetail } from '@ionic/core';
import { CommonModule } from '@angular/common';
import { TodoTask } from '../types/task.model';

@Component({
  selector: 'tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  imports: [
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonAlert,
    CommonModule,
  ],
})
export class TasksListComponent {
  @Input() tasks: TodoTask[] = [];
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() clearAll = new EventEmitter<void>();

  taskToDelete: number | null = null;

  priorityTextMap: { [key: string]: string } = {
    '3': 'alta',
    '2': 'media',
    '1': 'baja'
  };

  priorityClassMap: { [key: string]: string } = {
    '3': 'priority-chip priority-high',
    '2': 'priority-chip priority-medium',
    '1': 'priority-chip priority-low'
  };

  //Creacion de botones de alerta de borrado de todas las tareas
  public clearAllAlertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Borrar todas',
      role: 'confirm',
      handler: () => {
        this.clearAll.emit();
      },
    },
  ];

  //Creacion de botones de alerta de borrado de una tarea
  public deleteTaskButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Eliminar',
      role: 'confirm',
      handler: () => {
        if (this.taskToDelete !== null) {
          this.taskDeleted.emit(this.taskToDelete);
          this.taskToDelete = null;
        }
      },
    },
  ];

  //Mensaje que se muestra al borrar todas las tareas
  setClearAllResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Borrar todas → role: ${event.detail.role}`);
  }

  //Se envia el index de la tarea a borrar
  setDeleteTask(index: number) {
    this.taskToDelete = index;
  }

  //Mensaje que se muestra al borrar una tarea
  setDeleteTaskResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Eliminar una tarea → role: ${event.detail.role}`);
  }
}
