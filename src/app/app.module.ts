import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Tier2Page } from '../pages/tier2Page/tier2';
import { FormulaPage } from '../pages/formula/formula';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { AdMobFree } from '@ionic-native/admob-free';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyCf0rNwruACEzEisgmQhGP-I1xKaTPqopQ",
    authDomain: "forumulaeuploader.firebaseapp.com",
    databaseURL: "https://forumulaeuploader.firebaseio.com",
    storageBucket: "forumulaeuploader.appspot.com",
    messagingSenderId: "1051031133079"
  };

@NgModule({
  declarations: [
    MyApp,
    Tier2Page,
    FormulaPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tier2Page,
    FormulaPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
