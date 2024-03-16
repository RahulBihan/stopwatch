import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.scss'
})
export class StopWatchComponent implements OnInit{
  timer: number = 0;
  intervalId: any;

  ngOnInit() {}

  startTimer() {
    this.intervalId = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.intervalId);
  }

  resetTimer() {
    this.timer = 0;
    clearInterval(this.intervalId);
  }
}
