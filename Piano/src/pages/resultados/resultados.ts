import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the ResultadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  //sonidos: FirebaseListObservable<any>;
  listado: string[];
  img: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fireDatabase: AngularFireDatabase, private nativeAudio: NativeAudio) {
    //this.sonidos = this.fireDatabase.list('/sonidos');
    this.listado = Array();
    this.img = Array();
    this.nativeAudio.preloadSimple('platillo', 'assets/sound/platillo.mp3');
    this.nativeAudio.preloadSimple('tambor', 'assets/sound/tambor.mp3');
    this.nativeAudio.preloadSimple('redoble', 'assets/sound/redoble.mp3');
    this.nativeAudio.preloadSimple('redoble2', 'assets/sound/redoble2.mp3');
    this.img[0] = 'assets/img/tecla0.jpg';
    this.img[1] = 'assets/img/tecla1.jpg';
    this.img[2] = 'assets/img/tecla3.jpg';
    this.img[3] = 'assets/img/tecla4.jpg';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
    this.fireDatabase
      .list("sonidos", {
        query: {
          limitToLast: 3
        }
      })
      .subscribe(matches => {

        this.listado = matches;
        matches.forEach(element => {
          console.info(element);
        });
      });
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  play(R) {
    R.forEach(element => {
    console.info(this.img[0]);  
    this.img[0] = 'assets/img/tecla0.jpg';
    console.info(this.img[0]);
    this.img[1] = 'assets/img/tecla1.jpg';
    this.img[2] = 'assets/img/tecla3.jpg';
    this.img[3] = 'assets/img/tecla4.jpg';
      this.sleep(500);
      console.info(element)
      switch (element) {
        case 1:
          this.nativeAudio.play('platillo');
          this.img[0] = 'assets/img/tecla00.jpg';    
          break;
        case 2:
          this.nativeAudio.play('tambor');
          this.img[1] = 'assets/img/tecla11.jpg';
          break;
        case 3:
          this.nativeAudio.play('redoble');
          this.img[2] = 'assets/img/tecla33.jpg';
          break;
        case 4:
          this.nativeAudio.play('redoble2');
          this.img[2] = 'assets/img/tecla44.jpg';
          break;
      }
    });

  }
}
