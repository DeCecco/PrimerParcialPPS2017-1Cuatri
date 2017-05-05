import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Juego page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class Juego {
  PPT:number;
  fotito:string[];
  ran:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fotito= Array();
    this.fotito[0]='assets/img/piedra.png';
    this.fotito[1]='assets/img/papel.png';
    this.fotito[2]='assets/img/tijera.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Juego');
  }
    
  select(opcion){
    this.PPT=Math.floor((Math.random() * 3) + 0);    
    console.info(this.PPT);
    switch(opcion){
      case 0:
        if(this.PPT==0){
          alert('EMPATE');
        }else if(this.PPT==1){
          alert('LOSER');
        }else{
          alert('WIN');
        }               
      break;
      case 1:
      if(this.PPT==0){
          alert('WIN');
        }else if(this.PPT==1){
          alert('EMPATE');
        }else{
          alert('LOSER');
        }  
      break;
      case 2:
      if(this.PPT==0){
          alert('LOSER');
        }else if(this.PPT==1){
          alert('WIN');
        }else{
          alert('EMPATE');
        }  
      break;
    }
    this.ran=this.fotito[this.PPT];

  }
}
