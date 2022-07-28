export class AuditoriaModel {
    Cliente: string;
    NutOrigen: string;
    PuntoAcceso: string;
    TipoPuntoAcceso: number;
    UsuarioFinal: string;
  
    clear() {
      this.Cliente = '';
      this.NutOrigen = '';
      this.PuntoAcceso = '';
      this.TipoPuntoAcceso = 0;
      this.UsuarioFinal = '';
    }
  }