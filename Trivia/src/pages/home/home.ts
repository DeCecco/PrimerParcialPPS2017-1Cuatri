import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { Storage } from '@ionic/storage';//STORAGE FOR IONIC


import { About } from '../about/about';
import { Preguntas } from '../preguntas/preguntas';
import { Funciones } from "../../providers/funciones";
import { Resultado } from '../resultado/resultado';
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
      nombre: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });

  }
 
  iniciar() {    
    if (this.formLogin.valid) {
      this.errorFormLogin = false;
      this.storage.ready().then(() => {   
      this.storage.set('nombre', this.formLogin.value.nombre);
      this.navCtrl.push(Preguntas);                 
      });
    }    
    else {
      this.errorFormLogin = true;
    }
  }
  historial(){
    this.navCtrl.push(Resultado, { inicio:'home'})
  }
  about() {
    this.navCtrl.push(About);
  }

}
