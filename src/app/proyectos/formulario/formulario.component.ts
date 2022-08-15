import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LogginServise';
import { Proyecto } from '../../proyecto.model';
import { ProyectoService } from '../../proyecto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() proyectoCreado = new EventEmitter<Proyecto>();

  tituloInput: string = '';
  descripcionInput: string = '';
  index:number;

  constructor(
    private logginServise: LogginService,
    private proyectoService: ProyectoService,
    private router: Router,
    private route:ActivatedRoute
  ) {
    this.proyectoService.saludar.subscribe((indice: number) =>
      alert('el indice ' + indice)
    );
  }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
    if(this.index){
     let proyecto:Proyecto = this.proyectoService.encontrarProyecto(this.index);
     this.tituloInput=proyecto.titulo;
     this.descripcionInput=proyecto.descripcion;
    }
  }

  onGuardarProyecto() {
    let proyecto1 = new Proyecto(this.tituloInput, this.descripcionInput);
    if(this.index){
      this.proyectoService.modificarProyecto(this.index,proyecto1);
    }else{
      this.proyectoService.agregarAgregado(proyecto1);
    }

    this.router.navigate(['proyectos']);
  }
  eliminarProyecto(){
    if(this.index != null){
      this.proyectoService.eliminarProyecto(this.index);
    }
    this.router.navigate(['proyectos']);
  }
}
