import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent {

  constructor(private servicio:TareasService) { }

  editarTarea(i:number):void{
    let titulo = this.servicio.arrayTareas[i].titulo;
    let descripcion = this.servicio.arrayTareas[i].descripcion;
    let nuevoTitulo = prompt("Editar título: ", titulo);
    let nuevaDescripcion = prompt("Editar descripción: ", descripcion);

    if(nuevoTitulo != null && nuevaDescripcion != null && nuevoTitulo != "" && nuevaDescripcion != ""){
      this.servicio.arrayTareas[i].titulo = nuevoTitulo;
      this.servicio.arrayTareas[i].descripcion = nuevaDescripcion;
    }
  }


}
