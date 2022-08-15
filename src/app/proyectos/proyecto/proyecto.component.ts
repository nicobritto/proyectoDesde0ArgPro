import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../../proyecto.model';
import { ProyectoService } from '../../proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input() proyecto:Proyecto;
  @Input()indice:number;



  constructor(private proyectoServise:ProyectoService) { }

  ngOnInit(): void {
  }

  emitirSaludado(){
      this.proyectoServise.saludar.emit(this.indice);
  }


}
