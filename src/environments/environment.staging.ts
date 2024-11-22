// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: '/api',
  brandName: 'BAGS Reference',
  siteUrl: 'http://localhost:4281',
  keycloakConfig: {
    clientId: 'bags-frontend',
    realm: 'bags',
    url: 'https://bagsref.byteproducts.com/auth'
  },
  sessionTimeout: 1440,
  defaultCountry: 'NGA',
  userId: "QFESL6QlQNYdpja6Y",
  serviceId: "service_kq9l60o", 
  applicationRequestTemplateId: "template_36eq4e5",
  teamRequestTemplateId: "template_2x16jxl"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
