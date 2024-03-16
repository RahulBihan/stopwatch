import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StopWatchComponent } from '../stop-watch/stop-watch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StopWatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stop-watch';
}
