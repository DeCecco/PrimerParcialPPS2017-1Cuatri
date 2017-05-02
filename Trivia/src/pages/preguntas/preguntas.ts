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
  imagen:string;
  bandera:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pregunta='¿En que año se estrenó volver al futuro?';
    this.respuestas=[{value:'1983',correcto:false},{value:'1985',correcto:true},{value:'1990',correcto:false}];
    this.imagen='http://localhost/UTN/PrimerParcialPPS2017-1Cuatri/Trivia/delorean.jpg';
     
  }
  
  seleccion(E){    
    if(this.bandera){
     setTimeout(()=>{
      this.pregunta='¿Cuál de estos actores NO participo en la pelicula TITANIC?';    
      this.respuestas=[{value:'Steven Seagal',correcto:true},{value:'Steven Seagal',correcto:false},{value:'Kate Winslet',correcto:false}];
      this.imagen='http://localhost/UTN/PrimerParcialPPS2017-1Cuatri/Trivia/titanic.jpg';
    }, 200);
  }else
  {
    this.bandera=true;
    setTimeout(()=>{
      this.pregunta='¿Qué pelicula parodian los simpsons en esta escena?';    
      this.respuestas=[{value:'El eterno resplandor de una mente sin recuerdos',correcto:false},{value:'El resplandor',correcto:true},{value:'Resplandeciente',correcto:false}];
      this.imagen='http://localhost/UTN/PrimerParcialPPS2017-1Cuatri/Trivia/simpsons.jpg';
    }, 200);
  }
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad Preguntas');
  }

}
