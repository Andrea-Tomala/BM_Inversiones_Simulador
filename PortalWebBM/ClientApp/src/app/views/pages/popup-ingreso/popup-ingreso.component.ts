import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Inject } from '@angular/core';
//import { ConsultarClienteNaturalResModel } from '../../../core/inversiones/models/consultarClienteNaturalRes.model';
import { ConsultaCuentasActivasResModel } from '../../../core/inversiones/models/consultaCuentasActivasRes.model';

@Component({
  selector: 'app-popup-ingreso',
  templateUrl: './popup-ingreso.component.html',
  styleUrls: ['./popup-ingreso.component.scss']
})
export class PopupIngresoComponent implements OnInit {
  public ParametrosInversiones: Array<any> = [];
  public BODY:string = "";

  constructor(
    public dialogRef: MatDialogRef<PopupIngresoComponent>,
    public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: {
      dataKey: ConsultaCuentasActivasResModel,
      body:string
    }
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.BODY = this.data.body;
  }

  bodyText() {
    return this.sanitizer.bypassSecurityTrustHtml(this.data.body);
  }

  getName(): string {
    return this.data.dataKey[0].nombre;
  } 
}
