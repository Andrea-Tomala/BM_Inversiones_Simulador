import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  outButton: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.outButton = Boolean(this.configS.getValue('BUTTON_OUT'));
  }

  out() {
    this.router.navigateByUrl('/iniciar/redirect');
  }

}
