import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaEducacionComponent } from './componentes/experiencia-educacion/experiencia-educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

//"Importamos el módulo httpClientModule, que sirve para realizar llamadas http a los servidores"
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaEducacionComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
