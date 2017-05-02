import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { Storage } from '@ionic/storage';//STORAGE FOR IONIC

import { About } from '../about/about';
import { Preguntas } from '../preguntas/preguntas';
//import { Jugada } from "../../classes/jugada";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formLogin: FormGroup;
  errorFormLogin: boolean;

  constructor(public navCtrl: NavController, private storage: Storage, public formBuilder: FormBuilder) {
    //this.jugadas = new Array();
    this.errorFormLogin = false;
    //UTILIZACIÓN DE CONSTRUCTOR DE FORMULARIOS CON VALIDACIONES
    this.formLogin = formBuilder.group({
      nombre: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
    //PREPARACIÓN DEL ALMACENAMIENTO
    this.storage.ready().then(() => {
      this.storage.get('jugadas').then((val) => {
        if (val === null) {
          return;
        }
        // this.jugadas = JSON.parse(val);
      });
    });
  }

  iniciar() {
    //SI EL FORM ES VALIDO
    if (this.formLogin.valid) {
      //CREACIÓN DE JUGADA Y AGREGADO DE JUGADA EN ARRAY DE JUGADAS
      new Jugada(this.formLogin.value.nombre).AgregarJugada(this.jugadas);
      //PREPARACIÓN DEL ALMACENAMIENTO
      this.storage.ready().then(() => {
        //GUARDADO DE LAS JUGADAS EN BASE DE DATOS
        this.storage.set('jugadas', JSON.stringify(this.jugadas)).then(() => {
          //REDIRECCION A PAGINA DE GAME (SETEO COMO PAGINA INICIAL)
          this.navCtrl.setRoot(Game, {}, { animate: true, direction: "forward" });
        });
      });
    }
    //SETEO DE VARIABLE ERROR SI EL FORM NO ES VALIDO
    else {
      this.errorFormLogin = true;
    }
  }

  irAbout() {
    this.navCtrl.push(About);
  }

}
