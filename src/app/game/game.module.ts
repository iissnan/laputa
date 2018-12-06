import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';

import { GameComponent } from './game.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ GameComponent ],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
  ]
})
export class GameModule { }
