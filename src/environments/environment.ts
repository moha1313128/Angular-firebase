// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCJ_YQHrRX2nvirQYo7AcMIIC-tV0tbpEk",
    authDomain: "social-app-e6c9f.firebaseapp.com",
    databaseURL: "https://social-app-e6c9f.firebaseio.com",
    projectId: "social-app-e6c9f",
    storageBucket: "social-app-e6c9f.appspot.com",
    messagingSenderId: "580242421505",
    appId: "1:580242421505:web:1ca7ed2144c86d24404d00",
  },
  modes: {
    POPUP: "popup",
    REDIRECT: "redirect",
  },
  providers: {
    GOOGLE: "google",
    FACEBOOK: "facebook",
    TWITTER: "twitter",
    GITHUB: "github",
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
