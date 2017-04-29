import { Component ,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //jugadas : Jugada[];
  miForm : FormGroup;
  errorEnFormulario: boolean
  @Input() email;
  @Input() password;
  name:string; 
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
     this.miForm = formBuilder.group({
        nombre: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
    
  }
  
}
