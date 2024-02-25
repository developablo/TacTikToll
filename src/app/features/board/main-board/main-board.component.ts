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
    console.log(this.calculateWinner(this.cells));
    this.togglePlayer();
  }
  private togglePlayer() {
    this.currentPlayer = !this.currentPlayer;
  }

  private calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
