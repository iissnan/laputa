import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'laputa-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() link: string;
  @Input() current: number;
  @Input() pages: number[];

  constructor() { }

  ngOnInit() {
  }

}
