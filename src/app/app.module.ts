import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    EncabezadoComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
