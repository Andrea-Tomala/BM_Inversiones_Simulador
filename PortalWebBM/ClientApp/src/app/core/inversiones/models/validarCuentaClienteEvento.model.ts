export class ValidarCuentaClienteEventoModel {
    FechaEvento: Date;
    ProcesoEvento: string;
    TipoIdentificacion: string;
    NumeroId: string;
    NombresCliente: string;
    Canal: string;
    Oficial: string;
    Oficina: string;
  
    clear() {
      this.FechaEvento = new Date();
      this.ProcesoEvento = '';
      this.TipoIdentificacion = '';
      this.NumeroId = '';
      this.NombresCliente = '';
      this.Canal = '';
      this.Oficial = '';
      this.Oficina = '';
    }
  }