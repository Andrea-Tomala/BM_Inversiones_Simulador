import {AuditoriaModel} from './auditoria.model';

export class ProyeccionReqModel {
  Auditoria: AuditoriaModel;
  Monto: number;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.Monto = 0;
  }
}