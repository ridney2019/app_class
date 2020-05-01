import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmasComponent } from './turmas.component';



@NgModule({
  declarations: [
    TurmasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TurmasComponent
  ]
})
export class TurmasModule { }
