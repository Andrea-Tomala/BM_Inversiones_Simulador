import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [],
})
export class FooterComponent implements OnInit {
  numeroContacto: string;
  constructor() {}

  ngOnInit(): void {
    // this.numeroContacto = this.configS.getValue("NUM_CALL_CENTER");
  }
}
