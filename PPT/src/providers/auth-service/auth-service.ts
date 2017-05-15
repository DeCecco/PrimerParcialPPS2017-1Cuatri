import { Injectable } from '@angular/core';
//import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import { Http } from '@angular/http';
import firebase from 'firebase';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthServiceProvider {
public fireAuth: any;
public userData: any;
  constructor(public http: Http) {
  this.fireAuth = firebase.auth();
  this.userData = firebase.database().ref('/userData');
    console.log('Hello AuthServiceProvider Provider');
  }

}
