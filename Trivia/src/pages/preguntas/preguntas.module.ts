import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Preguntas } from './preguntas';

@NgModule({
  declarations: [
    Preguntas,
  ],
  imports: [
    IonicPageModule.forChild(Preguntas),
  ],
  exports: [
    Preguntas
  ]
})
export class PreguntasModule {}
