import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-delete-tarea',
  templateUrl: './delete-tarea.component.html',
  styleUrls: ['./delete-tarea.component.css']
})
export class DeleteTareaComponent{

  constructor(private servicio:TareasService) { }

  eliminarTarea(i:number):void{
    this.servicio.arrayTareas.splice(i, 1);
  }

  vaciar():void{
    let vaciar = confirm("¿Estás seguro/a de que quieres vaciar la lista?");
    if(vaciar){
      this.servicio.arrayTareas.splice(0);
    }else{
      console.log("Acción cancelada");
    }
  }

}
