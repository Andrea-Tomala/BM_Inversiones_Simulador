import {AuditoriaModel} from './auditoria.model';

export class OtpReqModel {
  Auditoria: AuditoriaModel;
  Identificacion: string;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.Identificacion = '';
  }
}