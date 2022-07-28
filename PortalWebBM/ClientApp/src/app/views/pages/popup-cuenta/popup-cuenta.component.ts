import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-popup-cuenta',
  templateUrl: './popup-cuenta.component.html',
  styleUrls: ['./popup-cuenta.component.scss']
})
export class PopupCuentaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupCuentaComponent>,
    public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: any,
      body: string
    }) { }
  public TITLE: string = "";
  public BODY: string = "";

  ngOnInit(): void {
    this.TITLE = this.data.title;
    this.BODY = this.data.body;
  }

  bodyText() {
    return this.sanitizer.bypassSecurityTrustHtml(this.data.body);
  }

}
