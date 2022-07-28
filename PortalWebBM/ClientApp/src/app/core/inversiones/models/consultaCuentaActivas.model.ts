export class ConsultaCuentaActivasModel {
    TipoIdentificacion: string;
    Identificacion: string;
    Nombre: string;
    Prefijo: string;
    Cuenta: string;
    CodigoProducto: string;
    DescripcionProducto: string;
    TipoProducto: string;
    CodigoTipoCuenta: string;
    CodigoClaseCuenta: string;
  
    clear() {
        this.TipoIdentificacion = '';
        this.Identificacion = '';
        this.Nombre = '';
        this.Prefijo = '';
        this.Cuenta = '';
        this.CodigoProducto = '';
        this.DescripcionProducto = '';
        this.TipoProducto = '';
        this.CodigoTipoCuenta = '';
        this.CodigoClaseCuenta = '';
    }
  }