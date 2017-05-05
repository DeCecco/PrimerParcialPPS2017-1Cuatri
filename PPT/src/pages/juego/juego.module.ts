import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Juego } from './juego';

@NgModule({
  declarations: [
    Juego,
  ],
  imports: [
    IonicPageModule.forChild(Juego),
  ],
  exports: [
    Juego
  ]
})
export class JuegoModule {}
