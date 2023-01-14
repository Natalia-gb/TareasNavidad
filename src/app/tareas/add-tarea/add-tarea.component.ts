import { Component, Input } from '@angular/core';
import { Tarea } from '../interfaces/tareas.interface';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent{

  constructor(private servicio : TareasService) { }
  @Input() nuevaTarea:Tarea = {titulo: "", descripcion: "", completada: false, fechaCreacion: new Date()};

  agregarTarea():void{
    this.servicio.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = {titulo: "", descripcion: "", completada: false, fechaCreacion: new Date()};
  }

}
