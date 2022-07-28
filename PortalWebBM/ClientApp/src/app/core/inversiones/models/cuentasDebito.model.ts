export class CuentasDebitoModel {
    Nombre: string;
    Cuenta: string;
    Prefijo: string;
    CodigoProducto: string;
    TipoProducto: string;
    Monto: number;
  
    clear() {
      this.Nombre = '';
      this.Cuenta = '';
      this.Prefijo = '';
      this.CodigoProducto = '';
      this.TipoProducto = '';
      this.Monto = 0;
    }
  }