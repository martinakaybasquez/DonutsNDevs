import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrainComponent } from "./components/brain/brain.component";
import { DonutComponent } from "./components/donut/donut.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrainComponent, DonutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutsNDevs';
}

