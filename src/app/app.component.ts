import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { WartelisteComponent } from './warteliste/warteliste.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WartelisteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'warteliste-app';
}
