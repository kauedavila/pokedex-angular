import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() total$: any = null;
  @Input() page: number = 0;

  @Output() pageChange = new EventEmitter<number>();

  onPageChange(event: MouseEvent, page: number) {
    this.page = page;
    this.pageChange.emit(this.page);
  }
}
