import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Piano } from './piano';

@NgModule({
  declarations: [
    Piano,
  ],
  imports: [
    IonicPageModule.forChild(Piano),
  ],
  exports: [
    Piano
  ]
})
export class PianoModule {}
