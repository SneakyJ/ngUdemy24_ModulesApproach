import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

// @Input({required: true}) name! - (!) tells TS that we ENSURE that name property WILL NEVER BE 'undefined'
// @Input() name? - (?) tells TS that we AWARE that name property CAN BE 'undefined'

export class TasksComponent {
  @Input() name?: string;
}
