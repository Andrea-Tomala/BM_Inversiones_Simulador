import {AuditoriaModel} from './auditoria.model';

export class ActualizarInversionModel {
  Auditoria: AuditoriaModel;
  NumDeposito: number;
  TipoIdent: string;
  Identificacion: string;
  Titular: string;
  Monto: number;
  FechaEmision: Date;
  FechaVencimiento: Date;
  EstadoDeposito: string;
  PagoIntereses: string;
  TipoRenovacion: string;
  CuentaCredito: number;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.NumDeposito = 0;
    this.TipoIdent = '';
    this.Identificacion = '';
    this.Titular = '';
    this.Monto = 0;
    this.FechaEmision = new Date();
    this.FechaVencimiento = new Date();
    this.EstadoDeposito = '';
    this.PagoIntereses = '';
    this.TipoRenovacion = '';
    this.CuentaCredito = 0;
  }
}