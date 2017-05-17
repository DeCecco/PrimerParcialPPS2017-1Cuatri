import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs";
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
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
  showStyle: false;
  puntos: number;
  record: number[];
  grab: boolean;
  nombre: string;
  sonidos: FirebaseListObservable<any>;
  img: string[];
  constructor(public fireDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('platillo', 'assets/sound/platillo.mp3');
    this.nativeAudio.preloadSimple('tambor', 'assets/sound/tambor.mp3');
    this.nativeAudio.preloadSimple('redoble', 'assets/sound/redoble.mp3');
    this.nativeAudio.preloadSimple('redoble2', 'assets/sound/redoble2.mp3');
    this.puntos = 0;
    this.showStyle= false;
    this.record = Array();
    this.nombre = this.navParams.get("nombre");
    this.sonidos = this.fireDatabase.list('/sonidos');
    this.img = Array();
    this.img[0] = 'assets/img/tecla0.jpg';
    this.img[1] = 'assets/img/tecla1.jpg';
    this.img[2] = 'assets/img/tecla3.jpg';
    this.img[3] = 'assets/img/tecla4.jpg';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Piano');

  }
    getStyle() {
      console.info(this.showStyle)
    if(this.showStyle) {
      return "yellow";
    } else {
      return "";
    }
  }
  sonido(x) {
    switch (x) {
      case 1:
        this.nativeAudio.play('platillo');
        this.vibration.vibrate(50);
        this.puntos += 1;
        
        this.img[0]='assets/img/tecla00.jpg';
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

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  ver() {
    var d = new Date();
    var mes = d.getMonth() + 1;
    var dia = d.getDay();
    var anio = d.getFullYear();
    var fecha = dia + '/' + mes + '/' + anio;

    this.sonidos.push({
      fecha: fecha,
      nombre: this.nombre,
      puntos: this.puntos,
      record: this.record
    });
  }

}
