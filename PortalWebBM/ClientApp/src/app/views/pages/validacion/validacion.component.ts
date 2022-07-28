import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuditoriaModel } from 'src/app/core/inversiones/models/auditoria.model';
import { ConsultarClienteNaturalReqModel } from 'src/app/core/inversiones/models/consultarClienteNaturalReq.model';
import { ConsultarClienteNaturalResModel } from 'src/app/core/inversiones/models/consultarClienteNaturalRes.model';
import { InversionesService } from 'src/app/core/inversiones/services/inversiones.service';
import { PopupCuentaComponent } from '../popup-cuenta/popup-cuenta.component';
import { PopupIngresoComponent } from '../popup-ingreso/popup-ingreso.component';
import { environment } from '../../../../environments/environment';
import { ConsultaCuentasActivasReqModel } from 'src/app/core/inversiones/models/consultaCuentasActivasReq.model';
import { ConsultaCuentasActivasResModel } from 'src/app/core/inversiones/models/consultaCuentasActivasRes.model';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.scss']
})
export class ValidacionComponent implements OnInit {
  public datosUsuario: ConsultaCuentasActivasResModel[] = [];
  validateForm: any;
  cedula: any;
  public TITLE_PANEL: Array<any> = [
    "Para continuar con su inversión, ingrese la siguiente información",
    "Verificar las cuentas de las que se realizará el débito del monto a invertir",
    "Para agregar varias cuentas indique el monto a debitar",
  ];
  noDNI = [
    '1111111111',
    '2222222222',
    '3333333333',
    '4444444444',
    '5555555555',
    '6666666666',
    '7777777777',
    '8888888888',
    '9999999999',
    '0000000000',
  ];
  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              public father: AppComponent,
              private inversionService: InversionesService) { 
              
    this.validateForm = this.formBuilder.group({
      identificacion: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(10)]]
    })
  }

  ngOnInit(): void {
  }


  openDialog2() {
    let textoCuentaValida = this.father.textoCuentaValidada;
    const dialogRef = this.dialog.open(PopupIngresoComponent, {
      data: {
        dataKey: this.datosUsuario,
        body: textoCuentaValida
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.href = this.father.urlLoginValido
    });
  }

  onlyNumbers($event) {
    console.log($event.keycode);
    if ($event.keyCode <= 45 || $event.keyCode > 57 || $event.keyCode == 47 || $event.keyCode == 46) {
      return false;
    }
    return true;
  }

  validadorDeCedula(cedula: string) {
    let cedulaCorrecta = false;
    if (cedula.length === 10)
    {
      const tercerDigito = parseInt(cedula.substring(2, 3), 0);
      if (tercerDigito < 6) {
        const coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        const verificador = parseInt(cedula.substring(9, 10), 0);
        let suma = 0;
        let digito = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digito = parseInt(cedula.substring(i, i + 1), 0) * coefValCedula[i];
          suma += ((parseInt((digito % 10)+'', 0) + (parseInt((digito / 10)+'', 0))));
        }
        suma= Math.round(suma);
        if ((Math.round(suma % 10) === 0) && (Math.round(suma % 10) === verificador)) {
          cedulaCorrecta = true;
        } else if ((10 - (Math.round(suma % 10))) === verificador) {
          cedulaCorrecta = true;
        } else {
          cedulaCorrecta = false;
        }
      } else {
        cedulaCorrecta = false;
      }
    } else {
      cedulaCorrecta = false;
    }
    return cedulaCorrecta;
  }

  dniCheck() {
    this.validateForm.controls.identificacion.markAsTouched();
    if(this.validateForm.controls.identificacion.valid){
      if(this.validateForm.controls.identificacion.value.length === 10){
        if(this.noDNI.includes(String(this.validateForm.controls.identificacion.value))) {
          this.validateForm.controls.identificacion.setErrors({
            serverError: 'Ingrese un número de cédula válido '
          });
        } else {
          if(this.validadorDeCedula(this.validateForm.controls.identificacion.value)){
            this.validateForm.controls.identificacion.setErrors({
              serverError: null
            });
            this.validateForm.controls.identificacion.updateValueAndValidity();
          } else {
            this.validateForm.controls.identificacion.setErrors({
              serverError: 'Ingrese un número de cédula válido '
            });
          }
        }
      }else{
        this.validateForm.controls.identificacion.setErrors({
          serverError: null
        });

        this.validateForm.controls.identificacion.updateValueAndValidity();
      }
    }

  }

  openDialog3() {
    let textoCuentaInvalida = this.father.textoCuentaInvalida;
    const dialogRef = this.dialog.open(PopupCuentaComponent, {
      data: {
        body: textoCuentaInvalida
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.href = this.father.urlAperturaCuenta;
    });
  }

  identification(){
    this.cedula =  this.validateForm.get('identificacion').value;
    if(this.validateForm.get('identificacion').valid){
      const rpRequest: ConsultaCuentasActivasReqModel = new ConsultaCuentasActivasReqModel();
      rpRequest.Auditoria = new AuditoriaModel();
      rpRequest.Auditoria.Cliente = "SimuladorInversiones";
      rpRequest.Auditoria.NutOrigen = "none";
      rpRequest.Auditoria.PuntoAcceso = "127.0.0.1";
      rpRequest.Auditoria.TipoPuntoAcceso = 0;
      rpRequest.Auditoria.UsuarioFinal = rpRequest.Auditoria.Cliente;
      rpRequest.Identificacion = this.cedula;
      rpRequest.TipoIdentificacion = "N";
      this.inversionService.ConsultarCuentasActivas(rpRequest).subscribe((data: ConsultaCuentasActivasResModel[]) => {
        if(data.length == 0){
          this.openDialog3();
        }else{
          this.datosUsuario = data;
          this.openDialog2();
        }
      },
      error => {
        this.openDialog3();
        console.error(error);
      });
    } else {
      console.log('invalid')
    }

  }
  get formValues() { return this.validateForm.controls; }
  
  validateCI(ced) {
    let total = 0;
    const length = 10;
    const longcheck = length - 1;
    if (ced !== '' && length === 10) {
        for (let i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                const char = ced.charAt(i);
                let aux = +char * 2;
                if (aux > 9) { aux -= 9; }
                total += aux;
            } else {
                // tslint:disable-next-line: radix
                total += parseInt(ced.charAt(i));
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        if (+(ced.charAt(length - 1)) === total) {
            return true;
        }
        return false;
    }
  }
}
