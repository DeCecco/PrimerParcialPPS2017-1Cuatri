import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the HelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  slides: {};
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
      {
        title: "Gracias por descargarte Piedra Papel o Tijera!",
        image: "assets/img/inicio.png",
        description: "En este mini tutorial aprenderás como jugar. Deslizate hacia la derecha para conocer mas.",
      },
      {
        title: "¿Cómo empezar?",
        description: "Lo primero que debes hacer es ingresar tu nombre. Seguido de esto presiona el boton 'Jugar'.",
        image: "",
      },
      {
        title: "Juego",
        description: "<p>Las reglas son simples, la piedra vence a la tijera rompiéndola, la tijera vence al papel cortándolo y el papel vence a la piedra envolviéndola.</p><p>Selecciona el que mas te guste y empieza a jugar al <b>PPT</b></p>  .",
        image: "assets/img/ppt.png",        
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
  jugar() {
    let profileModal = this.modalCtrl.create(HomePage);
    profileModal.present();
  };

}
