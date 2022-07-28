export class EventoReqModel {
    Opcion: number;
    TipoIdentificacion: string;
    Identificacion: string;
    NumeroDeposito: number;
  
    clear() {
      this.Opcion = 0;
      this.TipoIdentificacion = '';
      this.Identificacion = '';
      this.NumeroDeposito = 0;
    }
  }