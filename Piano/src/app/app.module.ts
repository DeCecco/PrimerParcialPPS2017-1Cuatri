import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Piano } from '../pages/piano/piano';
import { AboutPage } from '../pages/about/about';
import { ResultadosPage } from '../pages/resultados/resultados';
//import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
    apiKey: "AIzaSyAFUHi6wHa9PRxxc9gzX1viBH_GtxfwNbA",
    authDomain: "piano-30d31.firebaseapp.com",
    databaseURL: "https://piano-30d31.firebaseio.com",
    projectId: "piano-30d31",
    storageBucket: "piano-30d31.appspot.com",
    messagingSenderId: "951145077513"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ResultadosPage,
    Piano
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig/*,myFirebaseAuthConfig*/),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ResultadosPage,
    Piano
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    //AuthServiceProvider,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
