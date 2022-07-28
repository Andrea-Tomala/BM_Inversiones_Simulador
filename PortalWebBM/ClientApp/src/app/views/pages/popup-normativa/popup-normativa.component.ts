import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-popup-normativa',
  templateUrl: './popup-normativa.component.html',
  styleUrls: ['./popup-normativa.component.scss']
})
export class PopupNormativaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupNormativaComponent>,
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
