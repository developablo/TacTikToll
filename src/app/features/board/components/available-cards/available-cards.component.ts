import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RpsService } from '../../services/rps.service';

@Component({
  selector: 'available-cards',
  templateUrl: './available-cards.component.html',
  styleUrl: './available-cards.component.scss',
})
export class AvailableCardsComponent implements OnInit {
  @Output() selectedWeapon = new EventEmitter<string>();
  public weapons: string[] = [];
  constructor(private rpsService: RpsService) {}
  ngOnInit(): void {
    this.rpsService
      .getAllObjects()
      .subscribe((res: any) =>
        res.forEach((obj: string) => this.weapons.push(obj))
      );
  }
  public onSelection(weapon: string): void {
    this.selectedWeapon.emit(weapon);
  }
}
