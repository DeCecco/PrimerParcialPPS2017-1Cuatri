import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database';

import { Resultado } from '../resultado/resultado';
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
  foto: string[];
  ran: string;
  resultado: string[];    
  jugadas: FirebaseListObservable<any>;
  tasks: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public modalCtrl: ModalController,public toastCtrl: ToastController, public fireDatabase: AngularFireDatabase) {
    this.foto = Array();
    this.resultado = Array();
    this.foto[0] = 'assets/img/piedra.png';
    this.foto[1] = 'assets/img/papel.png';
    this.foto[2] = 'assets/img/tijera.png';
    this.resultado['EMPATE']=0;
    this.resultado['LOSER']=0;
    this.resultado['WIN']=0;
    this.jugadas = this.fireDatabase.list('/jugadas');
    this.tasks = this.fireDatabase.list('/tasks');
  }

  ionViewDidLoad() {
    //this.jugadas.    
    this.tasks.push({
      title: "Nueva tarea",
      done: false
    });
     this.fireDatabase
      .list("tasks", {
        query: {
          limitToLast: 10
        }
      })
      .subscribe(matches => {
       console.info(matches);
      });
    console.info(this.tasks);
    /*  this.jugadas.forEach(snapshot => {
            console.log(snapshot.key, snapshot.val());
                this.items.push({
                id: snapshot.key,
                name: snapshot.val().name
            });*/
    console.log('ionViewDidLoad Juego');
    
  }
  empate() {
    let toast = this.toastCtrl.create({
      message: 'EMPATASTE',
      duration: 1000,
      position:'middle'
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
      this.ran = this.foto[this.PPT];                                
      //}, 10);              
    }   
    
  }
  select(opcion) {    
    this.random();    
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
      //$(".content").fadeOut(1500);
      var d = new Date();    
      var mes= d.getMonth()+1;
      var dia =d.getDay();
      var anio= d.getFullYear();
      this.resultado['fecha']=dia+'/'+mes+'/'+anio;
      
      this.storage.get('nombre').then((val) => {        
        this.resultado['nombre']=val;                            
        this.storage.set('respuestas', this.resultado);  
        this.jugadas.push({
          jugada: this.resultado
        });        
      })            
    });

  }

  resul(){
    this.navCtrl.push(Resultado);    
  }
}
