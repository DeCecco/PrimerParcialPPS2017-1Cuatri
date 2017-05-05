import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { Storage } from '@ionic/storage';//STORAGE FOR IONIC

import { About } from '../about/about';
import { Preguntas } from '../preguntas/preguntas';
import { Funciones } from "../../providers/funciones";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})
export class HomePage {
  formLogin: FormGroup;
  errorFormLogin: boolean;
  funciones:Funciones;
  
  constructor(public navCtrl: NavController, private storage: Storage, public formBuilder: FormBuilder) {
    this.errorFormLogin = false;
    this.formLogin = formBuilder.group({
      nombre: ['Pablo', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
    /*this.storage.ready().then(() => {
      this.storage.get('jugadas').then((val) => {
        if (val === null) {
          return;
        }
      });
    });*/
  }
 
  iniciar() {    
    if (this.formLogin.valid) {
      this.errorFormLogin = false;
      this.storage.ready().then(() => {      
      this.navCtrl.push(Preguntas);          
       
      });
    }    
    else {
      this.errorFormLogin = true;
    }
  }

  about() {
    this.navCtrl.push(About);
  }

}
