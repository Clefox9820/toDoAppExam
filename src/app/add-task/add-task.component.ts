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
  ],
})
export class AddTaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  taskName = '';
  priority = 'medium';

  addTask() {
    localStorage.setItem("myCat", "Tom");

  }
}
