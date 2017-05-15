import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';//STORAGE FOR IONIC

//import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Juego } from '../pages/juego/juego';
import { Resultado } from '../pages/resultado/resultado';
import { About } from '../pages/about/about';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
    apiKey: "AIzaSyDukZIhFmK6JZ2hTj1ua8OtQqsCurQl6hI",
    authDomain: "piedra-papel-o-tijera.firebaseapp.com",
    databaseURL: "https://piedra-papel-o-tijera.firebaseio.com",
    projectId: "piedra-papel-o-tijera",
    storageBucket: "piedra-papel-o-tijera.appspot.com",
    messagingSenderId: "252982669223"
};
/*
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}*/
//firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Juego,
    Resultado,
    About
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Firebase,
    AngularFireModule.initializeApp(firebaseConfig/*,myFirebaseAuthConfig*/),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()//STORAGE FOR IONIC
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Juego,
    Resultado,
    About
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
