import { Component ,Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input() email;
  @Input() password;
  name:string; 
  constructor(public navCtrl: NavController) {
    this.name='nombre';
    console.log(this.name);
  }
  
}
