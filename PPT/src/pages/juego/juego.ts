import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Juego page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class Juego {
  PPT: number;
  fotito: string[];
  ran: string;
  resultado: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.fotito = Array();
    this.resultado = Array();
    this.fotito[0] = 'assets/img/piedra.png';
    this.fotito[1] = 'assets/img/papel.png';
    this.fotito[2] = 'assets/img/tijera.png';
    this.resultado['EMPATE']=0;
    this.resultado['LOSER']=0;
    this.resultado['WIN']=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Juego');

  }

  select(opcion) {
    for (var i = 0; i < 100; i++) {
      this.PPT = 0;
      this.PPT = Math.floor(Math.random() * 3);
      this.ran = this.fotito[this.PPT];
      //console.info(this.ran);
    }
    this.storage.ready().then(() => {
      // set a key/value      
      switch (opcion) {
        case 0:
          if (this.PPT == 0) {
            alert('EMPATE');
            this.resultado['EMPATE']=this.resultado['EMPATE']+1;            
          } else if (this.PPT == 1) {
            alert('LOSER');
            this.resultado['LOSER']=this.resultado['LOSER']+1;
          } else {
            alert('WIN');
            this.resultado['WIN']=this.resultado['WIN']+1;
          }
          break;
        case 1:
          if (this.PPT == 0) {
            alert('WIN');
            this.resultado['WIN']=this.resultado['WIN']+1;
          } else if (this.PPT == 1) {
            alert('EMPATE');
            this.resultado['EMPATE']=this.resultado['EMPATE']+1;
          } else {
            alert('LOSER');
            this.resultado['LOSER']=this.resultado['LOSER']+1;
          }
          break;
        case 2:
          if (this.PPT == 0) {
            alert('LOSER');
            this.resultado['LOSER']=this.resultado['LOSER']+1;
          } else if (this.PPT == 1) {
            alert('WIN');
            this.resultado['WIN']=this.resultado['WIN']+1;
          } else {
            alert('EMPATE');
            this.resultado['EMPATE']=this.resultado['EMPATE']+1;
          }
          break;
      }
      console.info(this.resultado);
      this.storage.set('respuestas', this.resultado);          
    });

  }

  resul(){
    this.storage.get('respuestas').then((val) => {
         console.log(val[0]);         
       })
  }
}
