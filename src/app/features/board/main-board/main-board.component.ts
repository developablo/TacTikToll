import { Component } from '@angular/core';

@Component({
  selector: 'main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent {
  public cells: string[] = ['', '', '', '', '', '', '', '', ''];
}
