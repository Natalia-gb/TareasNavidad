import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../interfaces/tareas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(tareas: Tarea[], orderBy: string):Tarea[] {
    switch(orderBy){
      case 'titulo':{
        return tareas.sort((a, b) => (a.titulo.toLowerCase() && a.titulo.toUpperCase()) > (b.titulo.toLowerCase() && b.titulo.toUpperCase())? 1 : -1)
      }
      case 'descripcion':{
        return tareas.sort((a, b) => (a.descripcion.toUpperCase() && a.descripcion.toLowerCase()) > (b.descripcion.toUpperCase() && b.descripcion.toLowerCase())? 1 : -1)
      }
      case 'completada':{
        return tareas.sort((a, b) => (a.completada < b.completada)? -1 : 1)
      }
      default:
        return tareas;
    }
  }

}
