import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public modalCtrl: ModalController,public toastCtrl: ToastController) {
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
  empate() {
    let toast = this.toastCtrl.create({
      message: 'Empate',
      duration: 1000
    });
    toast.present();
  }
  win() {
    let toast = this.toastCtrl.create({
      message: 'GANASTE',
      duration: 1000,
      position:'middle'
    });
    toast.present();
  }
  loser() {
    let toast = this.toastCtrl.create({
      message: 'PERDISTE',
      duration: 1000,
      position:'middle'
    });
    toast.present();
  }
  random(){
    for (var i = 0; i < 5; i++) {  
     //setTimeout(function() {
      this.PPT = 0;
      this.PPT = Math.floor(Math.random() * 3);                    
      this.ran = this.fotito[this.PPT];                    
      console.info(this.ran)      
      
      //}, 10);              
    }   
    
  }
  select(opcion) {    
    this.random();
    //$(".content").fadeOut(1500);
    //$(".content").fadeIn(1500);
    this.storage.ready().then(() => {
      // set a key/value      
      switch (opcion) {
        case 0:
          if (this.PPT == 0) {
            this.empate();
            this.resultado['EMPATE']=this.resultado['EMPATE']+1;            
          } else if (this.PPT == 1) {
            this.loser();
            this.resultado['LOSER']=this.resultado['LOSER']+1;
          } else {
            this.win();
            this.resultado['WIN']=this.resultado['WIN']+1;
          }
          break;
        case 1:
          if (this.PPT == 0) {
            this.win();
            this.resultado['WIN']=this.resultado['WIN']+1;
          } else if (this.PPT == 1) {
            this.empate();
            this.resultado['EMPATE']=this.resultado['EMPATE']+1;
          } else {
            this.loser();
            this.resultado['LOSER']=this.resultado['LOSER']+1;
          }
          break;
        case 2:
          if (this.PPT == 0) {
            this.loser();
            this.resultado['LOSER']=this.resultado['LOSER']+1;
          } else if (this.PPT == 1) {
            this.win();
            this.resultado['WIN']=this.resultado['WIN']+1;
          } else {
            this.empate();
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
    let toast = this.toastCtrl.create({
      message: 'QUE TOCA GIL',
      duration: 3000
    });
    toast.present();     
       })
  }
}
