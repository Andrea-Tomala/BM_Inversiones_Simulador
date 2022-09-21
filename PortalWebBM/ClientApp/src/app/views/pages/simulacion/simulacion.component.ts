import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupNormativaComponent } from '../popup-normativa/popup-normativa.component';
import { CurrencyPipe } from '@angular/common';
import { DataForm } from 'src/assets/interfaces/dataForm';
import { HttpClient } from '@angular/common/http';
import { InversionesService } from '../../../core/inversiones/services/inversiones.service';
import { RendimientoProyeccionReqModel } from '../../../core/inversiones/models/rendimientoProyeccionReq.model';
import { RendimientoCalculoInversionReqModel} from '../../../core/inversiones/models/rendimientoCalculoInversionReq.model';
import { ProyeccionModel } from 'src/app/core/inversiones/models/proyeccion.model';
import { AuditoriaModel } from 'src/app/core/inversiones/models/auditoria.model';
import { RendimientoProyeccionResModel } from 'src/app/core/inversiones/models/rendimientoProyeccionRes.model';
import { ParametrosModel } from 'src/app/core/inversiones/models/parametros.model';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { CalcularInversionResModel } from "src/app/core/inversiones/models/calcularInversionRes.model";

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.scss']
})
export class SimulacionComponent implements OnInit {
  public TITLE_PANEL: Array<any> = [
    "Para continuar con la inversión llene los campos a continuación",
    "Verificar las cuentas de las que se realizará el débito del monto a invertir",
    "Para agregar varias cuentas indique el monto a debitar",
  ];
  validateForm: FormGroup;
  monto: any;
  plazo: any;
  hideProyeccion: boolean = false;
  normativaShowed: boolean = false;
  proyecciones: ProyeccionModel[];
  slides: any = [[]];
  spinner: boolean = false;
  boton: boolean = false;
  public ParametrosInversiones: Array<any> = [];
  public LimiteMonto: number;
  public LimitePlazo: number;
  public MinimoMonto: number;
  public MinimoPlazo: number;
  flagProyeccionesSaltoIGanar: boolean = false;
  flagProyeccionesSaltoIRecibir: boolean = false;
  calcularProyeccion: boolean = true;
  plazoRecalculated: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private inversionService: InversionesService,
    public father: AppComponent) {
    this.validateForm = this.formBuilder.group({
      monto: [null, [Validators.required]],
      plazo: ['', [Validators.required, Validators.min(30)]],
      tasa: [],//{value:'', disabled: true}
      interesGanar: [],
      impuesto: [],
      interesRecibir: [],
      total: []
    });

  }

  ngOnInit(): void {
    this.validateForm.controls.tasa.disable();
    this.validateForm.controls.interesGanar.disable();
    this.validateForm.controls.impuesto.disable();
    this.validateForm.controls.interesRecibir.disable();
    this.validateForm.controls.total.disable();

  }

  mostrarNormativa() {
    if (!this.normativaShowed) {
      this.normativaShowed = true;
      this.openDialog();
    }
  }

  openDialog() {
    let normativa = this.father.textoNormativa;
    const dialogRef = this.dialog.open(PopupNormativaComponent, {
      data: {
        title: "NORMATIVA",
        body: normativa
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public obtenerParametro(nombre: string): string {
    let parametro: ParametrosModel = this.ParametrosInversiones.find(parametro => parametro.nombreParametro === nombre);
    return parametro == null ? "" : parametro.valor;
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  /*   vMonto(ee: any) {
      this.monto = this.validateForm.get('monto')?.value;
      console.log(this.monto);
      this.validateForm.get('plazo')?.reset();
      this.validateForm.get('tasa')?.reset();
      this.validateForm.get('interesGanar')?.reset();
      this.validateForm.get('impuesto')?.reset();
      this.validateForm.get('interesRecibir')?.reset();
      this.validateForm.get('total')?.reset();
      this.hideProyeccion = false;
    } */
  vMonto(ee: any) { //Brick
    let montoChanged: boolean = this.monto != Number(this.validateForm.get('monto')?.value);
    this.monto = Number(this.validateForm.get('monto')?.value);
    console.log(this.monto);
    //this.validateForm.get('plazo')?.reset();
    this.validateForm.get('tasa')?.reset();
    this.validateForm.get('interesGanar')?.reset();
    this.validateForm.get('impuesto')?.reset();
    this.validateForm.get('interesRecibir')?.reset();
    this.validateForm.get('total')?.reset();
    this.hideProyeccion = false;

    if (this.validateForm.controls.monto.value > this.father.LimiteMonto) {
      this.validateForm.controls.monto.setErrors({
        serverError: this.father.mensaje_LimiteMonto + " " + '$'+ this.father.LimiteMonto
      });
    } else {
      if (this.validateForm.controls.monto.value < this.father.MinimoMonto) {
        this.validateForm.controls.monto.setErrors({
          serverError: this.father.mensaje_minLimiteMonto + " " + '$' + this.father.MinimoMonto
        });
      } else {
        this.validateForm.controls.monto.setErrors(null);
        if (this.validateForm.get('monto')?.valid && this.validateForm.get('plazo')?.valid) {
          this.calculoInversion(montoChanged);          
          this.hideProyeccion = true;
        }
      }
    }
  }

  onlyNumbers($event) {
    console.log($event.keycode);
    if ($event.keyCode <= 45 || $event.keyCode > 57 || $event.keyCode == 47 || $event.keyCode == 46) {
      return false;
    }
    return true;
  }
  /*   vPlazo(event: any) {
      this.plazo = event.target.value;
      console.log(this.plazo);
      this.hideProyeccion = false;
      const dataEnviada = new RendimientoProyeccionReqModel();
      dataEnviada.clear();
      //this.modelPost.Auditoria = null;
      dataEnviada.IMonto = parseFloat(this.monto);
      dataEnviada.IPlazo = parseFloat(this.plazo);
      if (this.validateForm.get('monto')?.valid && this.validateForm.get('plazo')?.valid) {
        this.calculo();
        this.openDialog();
        this.hideProyeccion = true;
      }
    } */

  vPlazo(event: any) { // Brick
    this.plazo = Number(event.target.value);
    console.log(this.plazo);
    this.hideProyeccion = false;
    if (this.validateForm.controls.plazo.value > this.father.LimitePlazo) {
      this.validateForm.controls.plazo.setErrors({
        serverError: this.father.mensaje_LimitePlazo + ' ' + this.father.LimitePlazo + ' días'
      });
    } else {
      if (this.validateForm.controls.plazo.value < this.father.MinimoPlazo) {
        this.validateForm.controls.plazo.setErrors({
          serverError: this.father.mensaje_LimitePlazoMin + ' ' + this.father.MinimoPlazo + ' días'
        });
      } else {
        this.validateForm.controls.plazo.setErrors(null);
        if (this.validateForm.get('monto')?.valid && this.validateForm.get('plazo')?.valid) {
          this.calculoInversion(false);
          this.hideProyeccion = true;
        }
      }
    }
  }

  get formValues() { return this.validateForm.controls; }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.validateForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  public consultarParametrosInversiones() {
    this.inversionService.GetParametros().subscribe((data: any) => {
      console.log(data);
      this.ParametrosInversiones = data;
      let parametroLimiteMonto = this.obtenerParametro(environment.getParametroLimiteMonto());
      this.LimiteMonto = parametroLimiteMonto == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_MONTO_MAX")?.valor ?? "INV_MONTO_MAX" : Number(parametroLimiteMonto);
      let parametroLimitePlazo = this.obtenerParametro(environment.getParametroLimitePlazo());
      this.LimitePlazo = parametroLimitePlazo == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_PLAZO_MAX")?.valor ?? "INV_PLAZO_MAX" : Number(parametroLimitePlazo);
      let parametroMinimoMonto = this.obtenerParametro(environment.getParametroMinimoMonto());
      this.MinimoMonto = parametroMinimoMonto == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_MONTO_MIN")?.valor ?? "INV_MONTO_MIN" : Number(parametroMinimoMonto);
      let parametroMinimoPlazo = this.obtenerParametro(environment.getParametroMinimoPlazo());
      this.MinimoPlazo = parametroMinimoPlazo == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_PLAZO_MIN")?.valor ?? "INV_PLAZO_MIN" : Number(parametroMinimoPlazo);
    },
      error => {
      });
  }

  radioChange(event: any) {
    let plazo = event.value;
    console.log('Plazo: ' + event.value);
    var proyeccion = this.proyecciones.find(obj => { return obj.plazo == plazo });
    if (proyeccion != null) {
      /*this.validateForm.get('plazo')?.setValue(proyeccion.plazo);
      this.validateForm.get('tasa')?.setValue(proyeccion.tasa);
      this.validateForm.get('interesGanar')?.setValue(proyeccion.interesGanar);
      this.validateForm.get('impuesto')?.setValue(proyeccion.impuesto);
      this.validateForm.get('interesRecibir')?.setValue(proyeccion.interesRecibir);
      this.validateForm.get('total')?.setValue(proyeccion.totalRecibir);*/
      this.validateForm.get('plazo')?.setValue(proyeccion.plazo);
      this.calculoInversion(false);
    }
  }

  calculoInversion(calcular: boolean) { //
    const rpRequest: RendimientoCalculoInversionReqModel = new RendimientoCalculoInversionReqModel();
    rpRequest.IMonto = Number(this.monto);
    rpRequest.IPlazo = Number(this.plazo);
    rpRequest.Identificacion = this.father.SIM_IDENTIFICACION_VALUE;
    rpRequest.ITipoIdentificacion = this.father.SIM_TIPO_IDENTIFICACION_VALUE;
    rpRequest.PagoInt = String(this.father.idCatalogoVencim);
    rpRequest.Auditoria = new AuditoriaModel();
    rpRequest.Auditoria.Cliente = "SimuladorInversiones";
    rpRequest.Auditoria.NutOrigen = "none";
    rpRequest.Auditoria.PuntoAcceso = "127.0.0.1";
    rpRequest.Auditoria.TipoPuntoAcceso = 0;
    rpRequest.Auditoria.UsuarioFinal = rpRequest.Auditoria.Cliente;
    this.spinner = true;
    this.boton = false
    this.inversionService.CalcularInversion(rpRequest).subscribe((data: CalcularInversionResModel) => {
      
      this.boton = true;
      this.spinner = false;
      console.log(data);

      if (!this.normativaShowed) {
        this.normativaShowed = true;
        this.openDialog();
      }

      this.validateForm.get('tasa')?.setValue(this.getTwoDecimalNumber(Number(data.Tasa)));
      this.validateForm.get('tasa')?.disable();
      this.validateForm.get('interesGanar')?.setValue(this.getTwoDecimalNumber(Number(data.InteresGanar)));
      this.validateForm.get('interesGanar')?.disable();
      this.validateForm.get('impuesto')?.setValue(this.getTwoDecimalNumber(Number(data.Impuesto)));
      this.validateForm.get('impuesto')?.disable();
      this.validateForm.get('interesRecibir')?.setValue(this.getTwoDecimalNumber(Number(data.InteresRecibir)));
      this.validateForm.get('interesRecibir')?.disable();
      this.validateForm.get('total')?.setValue(this.getTwoDecimalNumber(Number(data.TotalPag)));
      this.validateForm.get('total')?.disable();

      if(this.plazo != Number(data.DiasPlazoFinal)){
        this.plazoRecalculated = true;
      }else {
        this.plazoRecalculated = false;
      }
      if(this.calcularProyeccion || calcular) {
        this.calculo();
      }

      this.plazo = Number(data.DiasPlazoFinal);
      this.validateForm.get('plazo')?.setValue(Number(data.DiasPlazoFinal));
    },
      error => {
        console.error(error.error);
      });
}

  calculo() { //Brick
      const rpRequest: RendimientoProyeccionReqModel = new RendimientoProyeccionReqModel();
      rpRequest.IMonto = Number(this.monto);
      rpRequest.IPlazo = Number(this.plazo);
      
      rpRequest.Auditoria = new AuditoriaModel();
      rpRequest.Auditoria.Cliente = "SimuladorInversiones";
      rpRequest.Auditoria.NutOrigen = "none";
      rpRequest.Auditoria.PuntoAcceso = "127.0.0.1";
      rpRequest.Auditoria.TipoPuntoAcceso = 0;
      rpRequest.Auditoria.UsuarioFinal = rpRequest.Auditoria.Cliente;
      this.spinner = true;
      //this.boton = false
      this.inversionService.RendimientoProyeccion(rpRequest).subscribe((data: RendimientoProyeccionResModel) => {
        
        console.log(data);
        this.calcularProyeccion = false;
        //this.boton = true;
        this.spinner = false;

        this.slides = [[]];
        this.proyecciones = [];
        this.proyecciones = data.proyecciones;
        this.flagProyeccionesSaltoIGanar = document.getElementById("labelInteresGanar").clientHeight > document.getElementById("labelTasa").clientHeight;
        this.flagProyeccionesSaltoIRecibir = document.getElementById("labelInteresRecibir").clientHeight > document.getElementById("labelTasa").clientHeight;

        if (document.getElementById("myCarousel").clientWidth < 200) {
          this.slides = this.chunk(this.proyecciones, 1);
        } else if (document.getElementById("myCarousel").clientWidth < 350) {
          this.slides = this.chunk(this.proyecciones, 2);
        } else if (document.getElementById("myCarousel").clientWidth < 440) {
          this.slides = this.chunk(this.proyecciones, 3);
        } else if (document.getElementById("myCarousel").clientWidth < 600) {
          this.slides = this.chunk(this.proyecciones, 4);
        } else {
          this.slides = this.chunk(this.proyecciones, 6);
        }
      },
        error => {
          console.error(error.error);
        });
    
  }


  siguiente() {
    this.router.navigateByUrl('validacion');
    this.dataSave();
  }

  dataSave() {
    this.http.get<DataForm>('assets/json/dataForm.json').subscribe(data => {
      data.monto = this.validateForm.get('monto')?.value;
      data.plazo = this.validateForm.get('plazo')?.value;
      data.tasa = this.validateForm.get('tasa')?.value;
      data.interesGanar = this.validateForm.get('interesGanar')?.value;
      data.impuesto = this.validateForm.get('impuesto')?.value;
      data.interesRecibir = this.validateForm.get('interesRecibir')?.value;
      data.total = this.validateForm.get('total')?.value;
      console.log('form save:' + JSON.stringify(data));
      localStorage.setItem('form save', JSON.stringify(data));
    });
  }

  getTwoDecimalNumber(money: number): string {
		return Number(money).toFixed(2);
	}

}
