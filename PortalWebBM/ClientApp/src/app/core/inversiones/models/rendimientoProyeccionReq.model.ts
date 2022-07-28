import {AuditoriaModel} from './auditoria.model';

export class RendimientoProyeccionReqModel {
  Auditoria: AuditoriaModel;
  IMonto: number;
  IPlazo: number;
  

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.IMonto = 0;
    this.IPlazo = 0;
   
  }
}
