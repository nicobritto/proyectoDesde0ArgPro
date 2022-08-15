import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LogginServise';
import { Proyecto } from './proyecto.model';

@Injectable()//al insertar un servicio dentro de otro servicio tenemos que poner el Injectable
export class ProyectoService {

  proyectos: Proyecto[] = [
    new Proyecto('Desarrolladora', 'senior Java,js,css, node,payton etc etc etc'),
    new Proyecto('Ingenioero en sistemas ', 'senior Java'),
  ];
    //creamos una variable Event Emitrer para envbiar info ael proyecto y que la reciba emitirSaludo
    saludar=new EventEmitter<number>();

    //inyectando un servicio dentro de otro servicio
    constructor(private loggiServise:LogginService){    }


  agregarAgregado(proyecto: Proyecto) {
    this.loggiServise.enviarMensajeAconsola("agregamos el proyecto "+proyecto.titulo);
      this.proyectos.push(proyecto);
  }
  encontrarProyecto(index:number){
    let proyecto:Proyecto=this.proyectos[index];
    return proyecto;
  }
  modificarProyecto(index:number,proyecto:Proyecto){
    let proyecto1=this.proyectos[index];
    proyecto1.titulo=proyecto.titulo;
    proyecto1.descripcion=proyecto.descripcion;
  }

  eliminarProyecto(index:number){
    this.proyectos.splice(index,1);
  }

}
