import { Component ,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';//STORAGE FOR IONIC

import { Jugada } from "../../classes/jugada";
import { Game } from '../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  jugadas : Jugada[];
  formulario : FormGroup;
  errorEnFormulario: boolean    
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,private storage: Storage) {
     this.jugadas = new Array();
     this.formulario = formBuilder.group({
        nombre: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });

    this.storage.ready().then(() => {
    this.storage.get('jugadas').then((val) => {
        if(val === null){
          return;
        }
        this.jugadas = JSON.parse(val);
      });
    });
    
  }

  irGame(){
    //SI EL FORM ES VALIDO    
    if (this.formulario.valid) {
      //CREACIÓN DE JUGADA Y AGREGADO DE JUGADA EN ARRAY DE JUGADAS
      new Jugada(this.formulario.value.nombre).AgregarJugada(this.jugadas);
      //PREPARACIÓN DEL ALMACENAMIENTO
      this.storage.ready().then(() => {
        //GUARDADO DE LAS JUGADAS EN BASE DE DATOS
        this.storage.set('jugadas', JSON.stringify(this.jugadas)).then(() => {
          //REDIRECCION A PAGINA DE GAME (SETEO COMO PAGINA INICIAL)
          this.navCtrl.setRoot(Game, {}, {animate: true, direction: "forward"});
        });      
      });
    }
    //SETEO DE VARIABLE ERROR SI EL FORM NO ES VALIDO
    else{
      this.errorEnFormulario = true;
    }
  }
  
}
