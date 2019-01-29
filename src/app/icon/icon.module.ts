import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faAngleDown,
  faAngleUp,
  faAngleRight,
  faGamepad,
  faThList,
  faHome,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

import {
  faCheckCircle,
  faTimesCircle,
  faUser,
  faThumbsUp,
  faThumbsDown,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';

import {
  faNintendoSwitch,
  faXbox,
  faPlaystation,
  faAppStore,
  faSteam,
  faFortAwesomeAlt,
} from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    FontAwesomeModule,
  ]
})
export class IconModule {

  constructor() {
    const icons = [
      faStar,
      faAngleDown,
      faAngleUp,
      faAngleRight,
      faGamepad,
      faThList,
      faHome,

      // Regular Icons
      faCheckCircle,
      faTimesCircle,
      faUser,
      faThumbsUp,
      faThumbsDown,
      faChartBar,
      faChartPie,

      // Brands Icons
      faNintendoSwitch,
      faXbox,
      faPlaystation,
      faAppStore,
      faSteam,
      faFortAwesomeAlt,
    ];
    library.add(...icons);
  }

}
