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
  respuestas:{};
  rFinal:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pregunta='¿En que año se estrenó volver al futuro?';
    this.respuestas=[{value:'1983',correcto:false},{value:'1985',correcto:true},{value:'1990',correcto:false}];
     
  }
  seleccion(E){        
    this.pregunta='¿Cuál de estos actores NO participo en la pelicula TITANIC?';
    this.respuestas=[{value:'Leonardo DiCaprio',correcto:false},{value:'Steven Seagal',correcto:true},{value:'Kate Winslet',correcto:false}];
    
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad Preguntas');
  }

}
