import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'laputa-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() perPage = 15;
  @Input() current = 1;
  @Input() total: number;
  @Output() pageSelect = new EventEmitter<number>();

  public pages: number;

  constructor() { }

  ngOnInit() {
    this.pages = Math.ceil(this.total / this.perPage);
  }

  onPageSelect(page) {
    if (page === this.current) {
      return;
    }

    this.pageSelect.emit(page);
  }

}
