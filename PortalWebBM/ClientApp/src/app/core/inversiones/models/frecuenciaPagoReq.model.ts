import {AuditoriaModel} from './auditoria.model';

export class FrecuenciaPagoReqModel {
  Auditoria: AuditoriaModel;
  Plazo: number;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.Plazo = 0;
  }
}
