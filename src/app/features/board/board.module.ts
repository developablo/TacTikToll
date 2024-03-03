import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { AvailableCardsComponent } from './available-cards/available-cards.component';

@NgModule({
  declarations: [CellComponent, MainBoardComponent, AvailableCardsComponent],
  imports: [CommonModule],
  exports: [MainBoardComponent],
})
export class BoardModule {}
