import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private vibration: Vibration,private flashlight: Flashlight) {

  }

  flash(){    
    this.flashlight.switchOn();
  }
  flashOff(){
    this.flashlight.switchOff();
  }
  vib(){
    this.vibration.vibrate(1000);
  }

}
