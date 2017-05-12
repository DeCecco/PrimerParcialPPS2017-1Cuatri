import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the Piano page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-piano',
  templateUrl: 'piano.html',
})
export class Piano {

  constructor(public navCtrl: NavController, public navParams: NavParams,private vibration: Vibration,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('platillo', 'assets/sound/platillo.mp3'); 
    this.nativeAudio.preloadSimple('tambor', 'assets/sound/tambor.mp3'); 
    this.nativeAudio.preloadSimple('redoble', 'assets/sound/redoble.mp3'); 
    this.nativeAudio.preloadSimple('redoble2', 'assets/sound/redoble2.mp3'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Piano');    
  }

  sonido(x){
    switch(x){
      case 1:
        this.nativeAudio.play('platillo');
        this.vibration.vibrate(50);
      break;
      case 2:
        this.nativeAudio.play('tambor');
        this.vibration.vibrate(50);
      break;
      case 3:
        this.nativeAudio.play('redoble');
        this.vibration.vibrate(50);
      break;
      case 4:
        this.nativeAudio.play('redoble2');
        this.vibration.vibrate(50);
      break;
    }

  }

}
