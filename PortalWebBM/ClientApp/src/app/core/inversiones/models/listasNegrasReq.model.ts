import { AuditoriaModel } from "./auditoria.model";

export class ListasNegrasReqModel {
    Auditoria: AuditoriaModel;
    TipoIdentificacion: string;
    Identificacion: string;
    Nombre: string;
  
    clear() {
      this.Auditoria = new AuditoriaModel();
      this.TipoIdentificacion = '';
      this.Identificacion = '';
      this.Nombre = '';
    }
  }