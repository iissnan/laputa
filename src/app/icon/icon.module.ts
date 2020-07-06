import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
  ]
})
export class IconModule {

  constructor(library: FaIconLibrary) {
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
      faXbox,
      faPlaystation,
      faAppStore,
      faSteam,
      faFortAwesomeAlt,
    ];
    library.addIcons(...icons);
  }

}
