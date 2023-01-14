import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tareas.interface';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-list-tarea',
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.css']
})
export class ListTareaComponent{

  constructor(private servicio:TareasService) { }
  fechaActual:Date = new Date();
  ordenarPor:string = "";

  get tareas(){
    return this.servicio.getTareas();
  }

  editarTarea(i:number):void{
    let titulo = this.servicio.arrayTareas[i].titulo;
    let descripcion = this.servicio.arrayTareas[i].descripcion;
    let nuevoTitulo = prompt("Editar título", titulo);
    let nuevaDescripcion = prompt("Editar descripción", descripcion);

    if(nuevoTitulo !== null && nuevoTitulo !== "" && nuevaDescripcion !== null && nuevaDescripcion !== ""){
      this.servicio.arrayTareas[i].titulo = nuevoTitulo;
      this.servicio.arrayTareas[i].descripcion = nuevaDescripcion;
    }
  }

  eliminarTarea(i:number):void{
    this.servicio.arrayTareas.splice(i, 1);
  }

  completado(i:number):void{
    this.servicio.arrayTareas[i].completada = !this.servicio.arrayTareas[i].completada;
  }

  vaciar():void{
    let vaciar = confirm("¿Estás seguro/a de que quieres vaciar la lista?");
    if(vaciar){
      this.servicio.arrayTareas.splice(0);
    }else{
      console.log("Acción cancelada");
    }
  }

  // Método para ordenar las tareas
  onChangeOrder(valor:string){
    this.ordenarPor = valor;
  }

  ponerEnMayus(i:number){
    let tituloMayus = this.servicio.arrayTareas[i].titulo.toUpperCase();
    let descripcionMayus = this.servicio.arrayTareas[i].descripcion.toUpperCase();
    this.servicio.arrayTareas[i].titulo = tituloMayus;
    this.servicio.arrayTareas[i].descripcion = descripcionMayus;
  }

  ponerEnMinus(i:number){
    let tituloMinus = this.servicio.arrayTareas[i].titulo.toLowerCase();
    let descripcionMinus = this.servicio.arrayTareas[i].descripcion.toLowerCase();
    this.servicio.arrayTareas[i].titulo = tituloMinus;
    this.servicio.arrayTareas[i].descripcion = descripcionMinus;
  }
}
