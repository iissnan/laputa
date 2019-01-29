import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../shared/shared.module';
import { AnalysisRoutingModule } from './analysis-routing.module';

import { AnalysisComponent } from './analysis.component';


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    RouterModule,
    AnalysisRoutingModule,
    NgxChartsModule,
    SharedModule,
  ]
})
export class AnalysisModule { }
