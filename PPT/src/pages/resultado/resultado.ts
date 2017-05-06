import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Resultado page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class Resultado {
  resultado: string[];  
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.resultado= Array();
  }

  ionViewDidLoad() {
     this.storage.ready().then(() => {
       // Or to get a key/value pair
       this.storage.get('respuestas').then((val) => {               
         this.resultado['nombre']=val['nombre'];         
         this.resultado['empate']=val['EMPATE'];
         this.resultado['loser']=val['LOSER'];
         this.resultado['win']=val['WIN'];
         this.resultado['fecha']=val['fecha'];                
       })      
     });
    console.log('ionViewDidLoad Resultado');    
  }



}