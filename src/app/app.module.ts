import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyectos/proyecto/proyecto.component';
import { FormularioComponent } from './proyectos/formulario/formulario.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LogginService } from './LogginServise';
import { ProyectoService } from './proyecto.service';
import { AppRoutingModule } from './app-routing.module';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    FormularioComponent,
    EncabezadoComponent,
    ProyectosComponent,
  ],
  imports: [BrowserModule, FormsModule,AppRoutingModule],
  providers: [LogginService, ProyectoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
