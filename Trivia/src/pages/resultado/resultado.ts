import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
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
  resultado: string;
  nombre: string;
  jugadas: FirebaseListObservable<any>;
  inicio:string;
  result: string[];
  constructor(public fireDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.jugadas = this.fireDatabase.list('/jugadas');
    this.inicio = this.navParams.get("inicio");    
    this.result=Array();
  }

  ionViewDidLoad() {    
    console.info(this.inicio)
    if(this.inicio=='jugar'){
    this.storage.ready().then(() => {
      // Or to get a key/value pair
      this.storage.get('respuestas').then((val) => {
        this.resultado = val;

        this.storage.get('nombre').then((val) => {
          this.resultado['name'] = val;

          this.jugadas.push({
            resultado: this.resultado

          });
        })
      })
    });
    }else{
       this.fireDatabase
          .list("jugadas", {
            query: {
              limitToLast: 10
            }
          })
          .subscribe(matches => {
            console.info(matches);
            this.result = matches;
            matches.forEach(element => {
              console.log(element);              
            });
          });
    }
    console.log('ionViewDidLoad Resultado');
  }

}
