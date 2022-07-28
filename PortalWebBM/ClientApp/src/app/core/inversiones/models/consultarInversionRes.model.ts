export class ConsultarInversionResModel {
  numDeposito: number;
  titular: string;
  monto: number;
  fechaEmision: Date;
  fechaVencimiento: Date;
  estadoDeposito: string;
  pagoIntereses: string;
  tipoRenovacion: string;
  cuentaCredito: number;
  descEstadoDeposito: string;

  clear() {
    this.titular = '';
    this.estadoDeposito = '';
    this.pagoIntereses = '';
    this.tipoRenovacion = '';
    this.numDeposito = 0;
    this.monto = 0;
    this.cuentaCredito = 0;
    this.descEstadoDeposito = '';
  }
}
