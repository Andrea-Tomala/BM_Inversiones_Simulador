export class ReferenciasPersonalesModel {
    Direccion: string;
    IdReferenciaPersonal: number;
    NombresApellidos: string;
    Parentesco: string;
    Telefono: string;
    TipoTelefono: string;
  
    clear() {
      this.Direccion = '';
      this.IdReferenciaPersonal = 0;
      this.NombresApellidos = '';
      this.Parentesco = '';
      this.Telefono = '';
      this.TipoTelefono = '';
    }
  }
  