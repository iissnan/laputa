import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [ GameListComponent ],
  imports: [
    CommonModule
  ],
  exports: [ GameListComponent ],
})
export class SharedModule { }
