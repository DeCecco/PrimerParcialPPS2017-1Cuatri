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
  slides:{};
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
    {
      title: "Gracias por descargarte Trivia!",
      image: "assets/img/splash.png",
      description: "En este mini tutorial aprenderás como jugar. Deslizate hacia la derecha para conocer mas.",      
    },
    {
      title: "¿Cómo empezar?",
      description: "Lo primero que debes hacer es ingresar tu nombre. Seguido de esto presiona el boton 'INICIAR TRIVIA'.",
      image: "",
    },
    {
      title: "Preguntas",
      description: "<p>Se realizaran un maximo de 3 preguntas con 3 opciones para cada una de ellas. Selecciona la que a ti te parece correcta.</p><p>Gracias por jugar <b>Trivia</b></p>  .",      
      image:"assets/img/preg2.jpg",
    }
];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
  jugar(){
    let profileModal = this.modalCtrl.create(HomePage);
     profileModal.present();
  };
}
