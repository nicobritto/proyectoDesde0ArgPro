import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormularioComponent } from './proyectos/formulario/formulario.component';

const routes:Routes=[
  {path:'',component:ProyectosComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'proyectos/agregar',component:FormularioComponent},
  {path:'proyectos/:id',component:FormularioComponent}

]

@NgModule({

  imports: [RouterModule.forRoot(
    routes
  )],
  exports:[RouterModule]
})
export class AppRoutingModule {}
