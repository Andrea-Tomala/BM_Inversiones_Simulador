export class ConsultarClienteNaturalResModel {
  //apellidosNombres: string;
    nombre: string;
    fechaNacimiento: Date;
    indicadorDatosActualizados: boolean;
    codigoOficinaOficialCredito: string;
    nombreOficialCredito: string;
    email: string;
  
    clear() {
      //this.apellidosNombres = '';
      this.nombre = '';
      this.fechaNacimiento = new Date();
      this.indicadorDatosActualizados = false;
      this.codigoOficinaOficialCredito = '';
      this.nombreOficialCredito = '';
      this.email = '';
    }
  }
