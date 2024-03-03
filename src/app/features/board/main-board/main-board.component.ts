import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent implements OnInit {
  public cells: Card[] = [];
  public isPlayerOneCurrentPlayer: boolean = true;
  public selectedWeapon: string = '';

  ngOnInit(): void {
    this.setInitialBoard();
  }

  private setInitialBoard(): void {
    for (let i = 0; i < 9; i++) {
      this.cells.push(new Card(i, -1, '', ''));
    }
  }

  public setBoardAfterMove(id: number) {
    const affectedCell: Card | undefined = this.cells.find(
      (card: Card) => card.id === id
    );
    // TODO: first calculate if rock beats scissors beats paper
    const winner = this.calculateCellWinner(
      this.selectedWeapon,
      (affectedCell as Card).value
    );
    if ((affectedCell as Card).value === winner) {
      // Tie, wins the local
    } else if (winner) {
      (affectedCell as Card).user = this.isPlayerOneCurrentPlayer ? 1 : 2;
      (affectedCell as Card).value = this.selectedWeapon;
      (affectedCell as Card).color = this.isPlayerOneCurrentPlayer
        ? 'red'
        : 'blue';
      console.log(this.calculateOverallWinner(this.cells));
      this.togglePlayer();
    }
  }
  private togglePlayer() {
    this.isPlayerOneCurrentPlayer = !this.isPlayerOneCurrentPlayer;
  }

  private calculateOverallWinner(squares: Card[]) {
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
        // TODO: finish game here (or could the game be infinite? or with timers?), show winner on template
        return squares[a].user;
      }
    }
    return null;
  }

  private calculateCellWinner(challenger: string, oponent: string): string {
    if (challenger) {
      if (oponent) {
        switch (challenger) {
          case 'rock':
            return oponent === 'paper' ? oponent : challenger;
          case 'scissors':
            return oponent === 'rock' ? oponent : challenger;
          case 'paper':
            return oponent === 'scissors' ? oponent : challenger;
        }
      }
      return challenger;
    }
    return '';
  }
}
