import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { Storage } from '@ionic/storage';//STORAGE FOR IONIC

import { Juego } from '../juego/juego';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formLogin: FormGroup;
  errorFormLogin: boolean;
  constructor(public navCtrl: NavController, private storage: Storage, public formBuilder: FormBuilder) {
    this.errorFormLogin = false;
    this.formLogin = formBuilder.group({
      nombre: ['Pablo', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
  }
  iniciar(){
     if (this.formLogin.valid) {
      this.errorFormLogin = false;          
      this.navCtrl.push(Juego);          
    }    
    else {
      this.errorFormLogin = true;
    }
  }
}
