export class SeguridadReqModel {
    Ip: string;
    TokenSeccion: string;
    Identificacion: string;
  
    clear() {
      this.Ip = '';
      this.TokenSeccion = '';
      this.Identificacion = '';
    }
  }