import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { RpsService } from '../../services/rps.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent implements OnInit {
  public cells: Card[] = [];
  public isPlayerOneCurrentPlayer: boolean = true;
  public selectedWeapon: string = '';
  private roundResult: string = '';

  constructor(private rpsService: RpsService) {}

  ngOnInit(): void {
    this.setInitialBoard();
  }

  private setInitialBoard(): void {
    for (let i = 0; i < 9; i++) {
      this.cells.push(new Card(i, -1, '', ''));
    }
  }

  // public setBoardAfterMove(id: number) {
  //   const affectedCell: Card | undefined = this.cells.find(
  //     (card: Card) => card.id === id
  //   );
  //   if (this.selectedWeapon) {
  //     if ((affectedCell as Card).value) {
  //       this.calculateCellWinner(
  //         this.selectedWeapon,
  //         (affectedCell as Card).value
  //       );
  //     } else {
  // (affectedCell as Card).user = this.isPlayerOneCurrentPlayer ? 1 : 2;
  // (affectedCell as Card).value = this.selectedWeapon;
  // (affectedCell as Card).color = this.isPlayerOneCurrentPlayer
  //   ? 'red'
  //   : 'blue';
  // console.log(this.calculateOverallWinner(this.cells));
  // this.togglePlayer();
  //     }

  //   }
  // }

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

  public setBoardAfterMove(id: number) {
    // TODO display status message after every match
    const affectedCell = this.cells.find((card: Card) => card.id === id);
    if (this.selectedWeapon) {
      if (affectedCell?.value) {
        if (this.selectedWeapon === affectedCell.value) {
          // TODO display draw message
          return;
        }
        this.rpsService
          .getMatchResult(this.selectedWeapon, (<Card>affectedCell).value)
          .subscribe((res: any) => {
            if (this.selectedWeapon === res.winner) {
              affectedCell!.user = this.isPlayerOneCurrentPlayer ? 1 : 2;
              affectedCell!.value = this.selectedWeapon;
              affectedCell!.color = this.isPlayerOneCurrentPlayer
                ? 'red'
                : 'blue';
              console.log(this.calculateOverallWinner(this.cells));
              this.togglePlayer();
            }
          });
      } else {
        affectedCell!.user = this.isPlayerOneCurrentPlayer ? 1 : 2;
        affectedCell!.value = this.selectedWeapon;
        affectedCell!.color = this.isPlayerOneCurrentPlayer ? 'red' : 'blue';
        console.log(this.calculateOverallWinner(this.cells));
        this.togglePlayer();
      }
    }
  }
}
