export class CuentaCreditoModel {
  Nombre: string;
  Cuenta: string;
  Prefijo: string;
  CodigoProducto: string;
  TipoProducto: string;

  clear() {
    this.Nombre = '';
    this.Cuenta = '';
    this.Prefijo = '';
    this.CodigoProducto = '';
    this.TipoProducto = '';
  }
}