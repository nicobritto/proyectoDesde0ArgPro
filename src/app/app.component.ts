import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginServise';
import { Proyecto } from './proyecto.model';
import { ProyectoService } from './proyecto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'proyectoDesdeOAngular';

  proyectos: Proyecto[] = [];

  constructor(private logginServise: LogginService,
              private proyectoServise:ProyectoService) {}
  ngOnInit(): void {
    this.proyectos=this.proyectoServise.proyectos;
  }

  proyectoAgregado(proyecto: Proyecto) {
   // this.logginServise.enviarMensajeAconsola("agregamos el proyecto con el nombre de : "+proyecto.descripcion);
    //this.proyectos.push(proyecto);
    this.proyectoServise.agregarAgregado(proyecto);
  }
}
