import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent implements OnInit {
  public cells: Card[] = [];
  private isPlayerOneCurrentPlayer: boolean = true;

  ngOnInit(): void {
    this.setInitialBoard();
  }

  private setInitialBoard(): void {
    for (let i = 0; i < 9; i++) {
      this.cells.push(new Card(i, 0, '', ''));
    }
  }

  public setBoardAfterMove(id: number) {
    const affectedCell: Card | undefined = this.cells.find(
      (card: Card) => card.id === id
    );
    (affectedCell as Card).user = this.isPlayerOneCurrentPlayer ? 1 : 2;
    (affectedCell as Card).value = 'rock';
    (affectedCell as Card).color = this.isPlayerOneCurrentPlayer
      ? 'red'
      : 'blue';
    console.log(this.calculateWinner(this.cells));
    this.togglePlayer();
  }
  private togglePlayer() {
    this.isPlayerOneCurrentPlayer = !this.isPlayerOneCurrentPlayer;
  }

  private calculateWinner(squares: Card[]) {
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
        squares[a].user === squares[b].user &&
        squares[a].user === squares[c].user
      ) {
        // TODO: first calculate if rock beats scissors beats paper
        // TODO: finish game here (or could the game be infinite? or with timers?), show winner on template
        return squares[a].user;
      }
    }
    return null;
  }
}
