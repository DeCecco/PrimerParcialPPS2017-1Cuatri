import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadosPage } from './resultados';

@NgModule({
  declarations: [
    ResultadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultadosPage),
  ],
  exports: [
    ResultadosPage
  ]
})
export class ResultadosPageModule {}
