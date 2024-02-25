import { Component } from '@angular/core';

@Component({
  selector: 'main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent {
  public cells: string[] = ['', '', '', '', '', '', '', '', ''];
  private currentPlayer: boolean = true;
  public setBoard(id: any) {
    this.cells[id] = this.currentPlayer ? 'X' : 'O';
    this.togglePlayer();
  }
  private togglePlayer() {
    this.currentPlayer = !this.currentPlayer;
  }
}
