import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';//STORAGE FOR IONIC

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Juego } from '../pages/juego/juego';
import { Resultado } from '../pages/resultado/resultado';
import { About } from '../pages/about/about';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
