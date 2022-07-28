import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
/* import { ThemeModule } from './views/theme/theme.module'; */
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { PopupNormativaComponent } from './views/pages/popup-normativa/popup-normativa.component';
import { PopupIngresoComponent } from './views/pages/popup-ingreso/popup-ingreso.component';
import { PopupCuentaComponent } from './views/pages/popup-cuenta/popup-cuenta.component';
import { ValidacionComponent } from './views/pages/validacion/validacion.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { SimulacionComponent } from './views/pages/simulacion/simulacion.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: 
  [
    AppComponent,
    PopupNormativaComponent,
    PopupIngresoComponent,
    PopupCuentaComponent,
    ValidacionComponent,
    SimulacionComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    /* ThemeModule, */
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    NgxCurrencyModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  entryComponents: 
  [
    PopupNormativaComponent,
    PopupIngresoComponent,
    PopupCuentaComponent,
    ValidacionComponent
  ],
  providers: 
  [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
     CookieService
  ],
  bootstrap: 
  [
    AppComponent
  ],
})
export class AppModule {}
