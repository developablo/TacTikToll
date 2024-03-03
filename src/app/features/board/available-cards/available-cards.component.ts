import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'available-cards',
  templateUrl: './available-cards.component.html',
  styleUrl: './available-cards.component.scss',
})
export class AvailableCardsComponent {
  @Output() selectedWeapon = new EventEmitter<string>();
  public weapons: string[] = ['rock', 'paper', 'scissors'];

  public onSelection(weapon: string): void {
    this.selectedWeapon.emit(weapon);
  }
}
