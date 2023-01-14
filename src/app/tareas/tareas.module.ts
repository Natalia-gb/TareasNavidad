import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTareaComponent } from './list-tarea/list-tarea.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddTareaComponent } from './add-tarea/add-tarea.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ListTareaComponent,
    MainPageComponent,
    AddTareaComponent,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CardModule,
    TableModule,
    ToolbarModule,
    ButtonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class TareasModule { }
