export const environment = {
  production: true,
  controller: false,

  nominatimLoca: false,

  contrrollerURL: "Main",
  serviceURL: "http://192.168.33.12:81/api",

  urlNominatimLocal: "http://localhost:8080",
  urlNominatimRemote: "https://nominatim.openstreetmap.org",

  getServiceUrl() {
    return this.controller ? this.contrrollerURL : this.serviceURL;
  },

  getNominatimUrl() {
    return this.nominatimLoca
      ? this.urlNominatimLocal
      : this.urlNominatimRemote;
  },
};
