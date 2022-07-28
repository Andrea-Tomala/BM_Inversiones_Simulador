export class ReferenciasBancariasModel {
  IdReferenciaBancaria: number;
  InstitucionFinanciera: string;
  NumeroTarjeta: string;
  TipoProducto: string;
  TipoTarjeta: string;

  clear() {
    this.IdReferenciaBancaria = 0;
    this.InstitucionFinanciera = '';
    this.NumeroTarjeta = '';
    this.TipoProducto = '';
    this.TipoTarjeta = '';
  }
}
