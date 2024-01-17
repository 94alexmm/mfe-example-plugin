import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MfeBarChartComponent } from './mfe-bar-chart/mfe-bar-chart.component';
import { MfeLineChartComponent } from './mfe-line-chart/mfe-line-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MfeBarChartComponent, MfeLineChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mfe-host';
}
