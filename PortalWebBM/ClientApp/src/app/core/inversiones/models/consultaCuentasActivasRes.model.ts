export class ConsultaCuentasActivasResModel {
    nombre: string;
    prefijo: string;
    cuenta: string;
    codigoProducto: string;
    tipoProducto: string;
  
    clear() {
        this.nombre = '';
        this.prefijo = '';
        this.cuenta = '';
        this.codigoProducto = '';
        this.tipoProducto = '';
    }
  }
