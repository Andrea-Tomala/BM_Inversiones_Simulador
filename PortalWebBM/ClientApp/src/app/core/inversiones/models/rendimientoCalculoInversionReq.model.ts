import {AuditoriaModel} from './auditoria.model';

export class RendimientoCalculoInversionReqModel {
  Auditoria: AuditoriaModel;
  IMonto: number;
  IPlazo: number;
  Identificacion: string;
  ITipoIdentificacion: string;
  PagoInt: string;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.IMonto = 0;
    this.IPlazo = 0;
    this.Identificacion = '';
    this.ITipoIdentificacion = '';
    this.PagoInt = '';
  }
}
