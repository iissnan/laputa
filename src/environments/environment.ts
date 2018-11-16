// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  contentful: {
    space: 'gtkoyktsa6dc',
    token: '70d25ca34bbde060701f03f095daae9d6ee4a4c4b18fb405154bea22e1b40107',
    locale: 'zh',
    contentTypes: {
      game: 'game',
      platform: 'platform',
      genre: 'genre',
    }
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
