export class ActualizarInversionEventoModel {
    ProcesoEvento: string;
    TipoIdentificacion: string;
    NumeroId: string;
    NombresCliente: string;
    Canal: string;
    Monto: number;
    FechaEvento: Date;
    FechaEmision: Date;
    FechaVencimiento: Date;
    TipoRenovacion: string;
    CuentaCredito: string;
  
    clear() {
      this.ProcesoEvento = '';
      this.TipoIdentificacion = '';
      this.NumeroId = '';
      this.NombresCliente = '';
      this.Canal = '';
      this.Monto = 0;
      this.FechaEvento = new Date();
      this.FechaEmision = new Date();
      this.FechaVencimiento = new Date();
      this.TipoRenovacion = '';
      this.CuentaCredito = '';
    }
  }