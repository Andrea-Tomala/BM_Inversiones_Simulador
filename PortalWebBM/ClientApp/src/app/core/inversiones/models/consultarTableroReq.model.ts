import {AuditoriaModel} from './auditoria.model';

export class ConsultarTableroReqModel {
  Auditoria: AuditoriaModel;

  clear() {
    this.Auditoria = new AuditoriaModel();
  }
}