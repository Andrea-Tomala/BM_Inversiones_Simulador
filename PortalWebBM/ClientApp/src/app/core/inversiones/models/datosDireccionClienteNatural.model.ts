export class DatosDireccionClienteNaturalModel {
    IdDireccion: number;
    Direccion: string;
    Referencia: string;
    Tipo: string;
    Ciudad: string;
    Provincia: number;
    Canton: number;
    Parroquia: number;
    Latitud: string;
    Longitud: string;
    TelefonoConvencional: string;
    Celular: string;
    Correo: string;
    Correo2: string;
  
    clear() {
      this.IdDireccion = 0;
      this.Direccion = '';
      this.Referencia = '';
      this.Tipo = '';
      this.Ciudad = '';
      this.Provincia = 0;
      this.Canton = 0;
      this.Parroquia = 0;
    }
  }