// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  testUser: {
    userEmail: 'test@test.com',
    userPassword: 'test1234'
  },
  api: {
    url: 'https://restcountries-v1.p.rapidapi.com',
    key: "55b393e8c0mshbeb6f23e62978afp1a125djsnd3eb267fca18"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
