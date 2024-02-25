import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CellComponent } from './features/board/cell/cell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CellComponent],
})
export class AppComponent {
  title = 'TacTikToll';
}
