import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Resultado } from './resultado';

@NgModule({
  declarations: [
    Resultado,
  ],
  imports: [
    IonicPageModule.forChild(Resultado),
  ],
  exports: [
    Resultado
  ]
})
export class ResultadoModule {}
