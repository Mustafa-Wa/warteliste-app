import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warteliste',
  imports: [CommonModule],
  templateUrl: './warteliste.component.html',
  styleUrl: './warteliste.component.css'
})
export class WartelisteComponent {

  tasks: Task[] = [
    { title: 'Buch lesen1', status: 'Offen', Dauer: '4h' },
    { title: 'Buch lesen2', status: 'In Bearbeitung', Dauer: '2h' },
    { title: 'Buch lesen3', status: 'Fertig', Dauer: '1.5h' },
    { title: 'Buch lesen4', status: 'Offen', Dauer: '3h' },
    { title: 'Buch lesen5', status: 'In Bearbeitung', Dauer: '2.5h' },
    { title: 'Buch lesen6', status: 'Fertig', Dauer: '1h' },
    { title: 'Buch lesen7', status: 'Offen', Dauer: '2h' },
    { title: 'Buch lesen8', status: 'In Bearbeitung', Dauer: '2h' },
    { title: 'Buch lesen9', status: 'Fertig', Dauer: '1h' },
    { title: 'Buch lesen10', status: 'Offen', Dauer: '2.5h' }
  ];

  statusChange(event: Event, task: Task): void {
    const selectElement = event.target as HTMLSelectElement;
    task.status = selectElement.value as Task['status'];
  }


}
