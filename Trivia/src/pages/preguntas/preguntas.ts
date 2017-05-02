import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Preguntas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-preguntas',
  templateUrl: 'preguntas.html',
})
export class Preguntas {
  
  pregunta:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pregunta='Primera Pregunta';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Preguntas');
  }

}
