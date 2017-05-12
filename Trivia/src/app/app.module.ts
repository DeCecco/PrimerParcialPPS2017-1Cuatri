import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';//STORAGE FOR IONIC
import { Funciones } from "../providers/funciones";


import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Preguntas } from '../pages/preguntas/preguntas';
import { Resultado } from '../pages/resultado/resultado';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig={
    apiKey: "AIzaSyDSVUTEWTkXpipeRKdQGDltk-_VIwIJQ2o",
    authDomain: "trivia-b1415.firebaseapp.com",
    databaseURL: "https://trivia-b1415.firebaseio.com",
    projectId: "trivia-b1415",
    storageBucket: "trivia-b1415.appspot.com",
    messagingSenderId: "770136377225"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Preguntas,
    About,
    Resultado
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    IonicStorageModule.forRoot(),//STORAGE FOR IONIC
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Preguntas,
    About,
    Resultado
  ],
  providers: [
    StatusBar,
    Vibration,
    NativeAudio,
    SplashScreen,
    Funciones,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
