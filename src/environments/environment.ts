// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiToken: 'TKL2eQDoHXc0mrBdewteIZrbaUIfM5U63AekQ1LAl7Oxn6tCgUlC3Ql0TbyQiknv',
  ninjaApi: {
    invoices: '/api/v1/invoices',
    expenses: '/api/v1/expenses',
    expensesCategories: '/api/v1/expense_categories',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
