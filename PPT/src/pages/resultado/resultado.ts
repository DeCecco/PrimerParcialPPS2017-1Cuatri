import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';


import { ModalPage } from '../modal/modal';
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
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {    
  }

  ionViewDidLoad() {
      
    console.log('ionViewDidLoad Resultado');    
  }
  
  openModal(characterNum) {
    let obj ={id:characterNum};
    let modal = this.modalCtrl.create(ModalPage,obj);
    modal.present();
    /*let modal = Modal.create(MyModal);

        this.nav.present(modal);*/
  }


}


