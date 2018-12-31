import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InscriptionPage } from '../pages/inscription/inscription';
import { LoginPage } from '../pages/login/login';
import {UserProvider} from '../services/users';
import { HttpClientModule } from '@angular/common/http'; 
import { Userlist } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { NativeGeocoder,NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import 'rxjs/add/operator/map';
import { GeocoderProvider } from '../providers/geocoder/geocoder';
import { VoirProfil } from '../pages/list/voirprofil';
import { UserProfil } from '../pages/profil/profil';
import { Publication } from '../pages/tabs/publication/publication';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InscriptionPage,
    LoginPage,
    Userlist,
    VoirProfil,
    UserProfil,
    Publication
  ],
  imports: [
    BrowserModule,
        HttpClientModule,
        HttpModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InscriptionPage,
    LoginPage,
    Userlist,
    VoirProfil,
    UserProfil,
    Publication
  ],
  providers: [
    StatusBar,
     UserProvider,
     

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeGeocoder,
    GeocoderProvider,
  ]
})
export class AppModule {}
