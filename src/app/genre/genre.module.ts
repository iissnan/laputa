import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreComponent } from './genre.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class GenreModule { }
