import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tareas.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  constructor() { }

  nuevaTarea:Tarea = {titulo: "", descripcion: "", completada: false, fechaCreacion: new Date()}

}
