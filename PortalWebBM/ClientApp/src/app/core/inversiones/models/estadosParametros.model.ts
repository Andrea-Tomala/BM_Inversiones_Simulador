export class EstadosParametrosModel {
  IdEstado: number;
  Estado: string;

  clear() {
    this.IdEstado = 0;
    this.Estado = '';
  }
}