import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs";
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
  puntos: number;
  record: number[];
  grab: boolean;
  nombre: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('platillo', 'assets/sound/platillo.mp3');
    this.nativeAudio.preloadSimple('tambor', 'assets/sound/tambor.mp3');
    this.nativeAudio.preloadSimple('redoble', 'assets/sound/redoble.mp3');
    this.nativeAudio.preloadSimple('redoble2', 'assets/sound/redoble2.mp3');
    this.puntos = 0;
    this.record = Array();
    this.nombre = this.navParams.get("nombre");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Piano');
  }

  sonido(x) {
    switch (x) {
      case 1:
        this.nativeAudio.play('platillo');
        this.vibration.vibrate(50);
        this.puntos += 1;
        if (this.grab) { this.record.push(x) }
        break;
      case 2:
        this.nativeAudio.play('tambor');
        this.vibration.vibrate(50);
        this.puntos += 2;
        if (this.grab) { this.record.push(x) }
        break;
      case 3:
        this.nativeAudio.play('redoble');
        this.vibration.vibrate(50);
        this.puntos += 3;
        if (this.grab) { this.record.push(x) }
        break;
      case 4:
        this.nativeAudio.play('redoble2');
        this.vibration.vibrate(50);
        this.puntos += 4;
        if (this.grab) { this.record.push(x) }
        break;
    }
    console.info(this.puntos);
  }
  grabar() {
    this.puntos = 0;
    this.grab = true;
    console.info(this.puntos);
  }
  ver() {
    Observable.create((observer) => {
          let timeout = null;
          
            timeout = setTimeout(() => {
              observer.next(null);
              observer.complete();
              return () => {
                if (timeout) {
                  clearTimeout(timeout);
                  console.info('0da')
                }
              };
            },1000);          
        });
        
    this.record.forEach(element => {
        console.info(element)
        switch (element) {
          case 1:
            this.nativeAudio.play('platillo');
            break;
          case 2:
            this.nativeAudio.play('tambor');
            break;
          case 3:
            this.nativeAudio.play('redoble');
            break;
          case 4:
            this.nativeAudio.play('redoble2');
            break;
        }
      
    });
  }

}
