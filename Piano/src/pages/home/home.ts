import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as $ from 'jquery'
import { Piano } from '../piano/piano';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formLogin: FormGroup;
  errorFormLogin: boolean;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.errorFormLogin = false;
    this.formLogin = formBuilder.group({
      nombre: ['Pablo', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });     
  }

  iniciar(){
    
    if(this.formLogin.valid){      
      this.errorFormLogin = false;
      this.navCtrl.push(Piano); 
    }
    else{      
      this.errorFormLogin = true;
    }
  }

}
