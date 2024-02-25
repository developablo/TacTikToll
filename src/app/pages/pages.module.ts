import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoardModule } from '../features/board/board.module';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [CommonModule, BoardModule],
})
export class PagesModule {}
