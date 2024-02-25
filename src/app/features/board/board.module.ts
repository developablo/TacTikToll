import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { MainBoardComponent } from './main-board/main-board.component';

@NgModule({
  declarations: [CellComponent, MainBoardComponent],
  imports: [CommonModule],
  exports: [MainBoardComponent],
})
export class BoardModule {}
