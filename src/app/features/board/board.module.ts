import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { AvailableCardsComponent } from './components/available-cards/available-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { RpsService } from './services/rps.service';

@NgModule({
  declarations: [CellComponent, MainBoardComponent, AvailableCardsComponent],
  providers: [importProvidersFrom(HttpClientModule), RpsService],
  imports: [CommonModule, HttpClientModule],
  exports: [MainBoardComponent],
})
export class BoardModule {}
