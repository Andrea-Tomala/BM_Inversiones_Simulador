export class ParametrosModel {
    idParametro: number;
    nombreParametro: string;
    tipoParametro: string;
    valor: string;
    descripcion: string;
    estadoParametro: string;
    usuario: string;
    idTipoParametro: number;
    idEstado: number;
  
    clear() {
      this.idParametro = 0;
      this.nombreParametro = '';
      this.tipoParametro = '';
      this.valor = '';
      this.descripcion = '';
      this.estadoParametro = '';
      this.usuario = '';
      this.idTipoParametro = 0;
      this.idEstado = 0;
    }
  }
