import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Game } from './game';

@NgModule({
  declarations: [
    Game,
  ],
  imports: [
    IonicModule.forRoot(Game),
  ],
  exports: [
    Game
  ]
})
export class GameModule {}
