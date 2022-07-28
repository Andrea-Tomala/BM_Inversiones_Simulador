export class CuentaSaldoModel {
    NumeroCuenta: string;
    AgenciaApertura: string;
    TipoIdentificacion: string;
    Identificacion: string;
    Nombre: string;
    CodigoProducto: string;
    DescripcionProducto: string;
    HomologacionProducto: string;
    CodigoBanco: string;
    CodigoMoneda: string;
    SimboloMoneda: string;
    DescripcionMoneda: string;
    SaldoDisponible: string;
    SaldoTotal: string;
  
    clear() {
      this.NumeroCuenta = '';
      this.AgenciaApertura = '';
      this.TipoIdentificacion = '';
      this.Identificacion = '';
      this.Nombre = '';
      this.CodigoProducto = '';
      this.DescripcionProducto = '';
      this.HomologacionProducto = '';
      this.CodigoBanco = '';
      this.CodigoMoneda = '';
      this.SimboloMoneda = '';
      this.DescripcionMoneda = '';
      this.SaldoDisponible = '';
      this.SaldoTotal = '';
    }
  }