import { Injectable } from '@angular/core';
import { Tarea } from './interfaces/tareas.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }
  arrayTareas:Tarea[] = [];

  getTareas():Tarea[]{return this.arrayTareas}
  agregarTarea(entrada:Tarea):void{
    this.arrayTareas.push(entrada);
  }
}
