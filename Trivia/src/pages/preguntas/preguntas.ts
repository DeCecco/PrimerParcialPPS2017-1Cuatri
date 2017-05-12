import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/* si da error correr lo siguiente para actualizar el core
npm uninstall --save @ionic-native/core
npm install --save @ionic-native/core@latest
*/
import { Firebase } from '@ionic-native/firebase';

import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';


import { Resultado } from '../resultado/resultado';
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
  armado:string[];  
  FF:{};  
  rFinal:string[];
  imagen:string;
  bandera:boolean;
  cantR:number=0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private vibration: Vibration,private nativeAudio: NativeAudio,/*private af: AngularFire,*/private firebase: Firebase) {
    this.pregunta='¿En que año se estrenó volver al futuro?';
    this.respuestas=[{value:'1983',correcto:false},{value:'1985',correcto:true},{value:'1990',correcto:false}];
    this.imagen='assets/img/delorean.jpg';    
    this.rFinal= Array(); 
    this.FF= Array(); 
    this.nativeAudio.preloadSimple('win', 'assets/sounds/win.mp3'); 
    this.nativeAudio.preloadSimple('error', 'assets/sounds/error.mp3'); 
    
  }
  
  seleccion(E){
    this.firebase.getToken()
  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));
  this.firebase.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));
    if(E.correcto){
      console.warn(E.correcto);        
      this.nativeAudio.play('win');
      this.vibration.vibrate(1000);
    }else{
      this.nativeAudio.play('error');      
      this.vibration.vibrate(2000);
    }
    this.armado=Array();           
    this.armado['pregunta']=this.pregunta;
    this.armado['respuesta']=E;
    this.armado['imagen']=this.imagen;            
    
    
    this.FF[this.cantR]=this.armado;   
    this.cantR++;    
    if(this.bandera){
     setTimeout(()=>{
      this.pregunta='¿Cuál de estos actores NO participo en TITANIC?';    
      this.respuestas=[{value:'Steven Seagal',correcto:true},{value:'Leonardo DiCaprio',correcto:false},{value:'Kate Winslet',correcto:false}];
      this.imagen='assets/img/titanic.jpg';          
    }, 200);
    }else
    {
      this.bandera=true;
      setTimeout(()=>{
        this.pregunta='¿Qué pelicula parodian los simpsons?';    
        this.respuestas=[{value:'El eterno resplandor de una mente sin recuerdos',correcto:false},{value:'El resplandor',correcto:true},{value:'Resplandeciente',correcto:false}];
        this.imagen='assets/img/simpsons.jpg';                  
      }, 200);
    }
    if(this.cantR==3){      
      this.storage.ready().then(() => {
       // set a key/value
        this.storage.set('respuestas', this.FF);         
             
        this.navCtrl.push(Resultado);
      });
    }
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad Preguntas');
  }

}
