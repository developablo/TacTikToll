import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
})
export class CellComponent {
  @Input() card: Card | undefined = undefined;
  @Input() id: number = -1;
  @Output() selectedId = new EventEmitter<number>();
  public OnClick() {
    this.selectedId.emit(this.id);
  }
}
