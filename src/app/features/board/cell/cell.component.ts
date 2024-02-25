import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
})
export class CellComponent {
  @Input() card: string = '';
  @Input() id: number = -1;
  @Output() selectedId = new EventEmitter<number>();
  public OnClick() {
    this.selectedId.emit(this.id);
  }
}
