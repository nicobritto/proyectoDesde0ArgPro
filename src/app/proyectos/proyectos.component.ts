import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from '../LogginServise';
import { Proyecto } from '../proyecto.model';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  proyectos: Proyecto[] = [];

  constructor(
              private proyectoServise:ProyectoService,
              private router:Router) {}
  ngOnInit(): void {
    this.proyectos=this.proyectoServise.proyectos;
  }

  agregar(){
      this.router.navigate(['proyectos/agregar']);
  }

}
