import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';//STORAGE FOR IONIC
import { Funciones } from "../providers/funciones";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Preguntas } from '../pages/preguntas/preguntas';
import { Resultado } from '../pages/resultado/resultado';

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
    IonicStorageModule.forRoot()//STORAGE FOR IONIC
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
    SplashScreen,
    Funciones,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
