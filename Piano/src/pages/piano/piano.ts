import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs";
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
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
  active:boolean;
  segundos: string;
  constructor(public toastCtrl: ToastController,public fireDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('platillo', 'assets/sound/platillo.mp3');
    this.nativeAudio.preloadSimple('tambor', 'assets/sound/tambor.mp3');
    this.nativeAudio.preloadSimple('redoble', 'assets/sound/redoble.mp3');
    this.nativeAudio.preloadSimple('redoble2', 'assets/sound/redoble2.mp3');
    this.puntos = 0;
    this.showStyle = false;
    this.record = Array();
    this.nombre = this.navParams.get("nombre");
    this.sonidos = this.fireDatabase.list('/sonidos');
    this.img = Array();
    this.img[0] = 'assets/img/platillo.png';
    this.img[1] = 'assets/img/bombo.png';
    this.img[2] = 'assets/img/redoblante.png';
    this.img[3] = 'assets/img/tambor2.png';
    this.segundos = 'Grabar';
    this.active=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Piano');

  }
  /*getStyle() {
    console.info(this.showStyle)
  if(this.showStyle) {
    return "yellow";
  } else {
    return "";
  }
  }*/
  sonido(x) {
    switch (x) {
      case 1:
        this.nativeAudio.play('platillo');
        this.vibration.vibrate(50);
        this.puntos += 1;

        //this.img[0] = 'assets/img/tecla00.jpg';
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
    this.active=true;
    console.info(this.active)
    this.record = Array();
    this.segundos = 'Grabando';
    this.puntos = 0;
    this.grab = true;
    /*for (var index = 0; index < 10; index++) {
      this.sleep(1000);      
      this.segundos++;
    }    */
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
  ok(){
     let toast = this.toastCtrl.create({
      message: 'Grabado correctamente',
      position:'middle',
      duration: 1000
    });
    toast.present();
  }
  no(){
     let toast = this.toastCtrl.create({
      message: 'No se grabaron sonidos',
      position:'middle',
      duration: 1000
    });
    toast.present();
  }
  ver() {
    this.active=false;
    this.segundos = 'Grabar';
    var d = new Date();
    var mes = d.getMonth() + 1;
    var dia = d.getDay();
    var anio = d.getFullYear();
    var fecha = dia + '/' + mes + '/' + anio;
    console.info(this.record)

    if (this.record.length > 0) {
      this.sonidos.push({
        fecha: fecha,
        nombre: this.nombre,
        puntos: this.puntos,
        record: this.record
      });
      this.ok();
    }else{
      this.no();
    }
  }

}
