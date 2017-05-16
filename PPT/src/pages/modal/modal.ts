import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

import { HomePage } from '../home/home';
/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  id: string = this.navParams.get('id');
  resultado: string[];
  chose:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fireDatabase: AngularFireDatabase) {
    this.resultado = Array();
    this.chose=this.id['select'];
  }

  inicio(){
    this.navCtrl.push(HomePage);          
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');    
    switch (this.id['select']) {
      case 0:
        this.fireDatabase
          .list("gano", {
            query: {
              limitToLast: 10
            }
          })
          .subscribe(matches => {
            
            this.resultado = matches;
            matches.forEach(element => {
            });
          });
        break;
      case 1:
        this.fireDatabase
          .list("perdio", {
            query: {
              limitToLast: 10
            }
          })
          .subscribe(matches => {
            
            this.resultado = matches;
            matches.forEach(element => {
            });
          });
        break;
      case 2:
        this.fireDatabase
          .list("empate", {
            query: {
              limitToLast: 10
            }
          })
          .subscribe(matches => {
            
            this.resultado = matches;
            matches.forEach(element => {
            });
          });
        break;
    }
  }

}
