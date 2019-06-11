import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { InscriptionPage } from '../pages/inscription/inscription';
import { LoginPage } from '../pages/login/login';
import {UserProvider} from '../services/users';
import { HttpClientModule } from '@angular/common/http'; 
import { Userlist } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { NativeGeocoder,NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import 'rxjs/add/operator/map';
import { GeocoderProvider } from '../providers/geocoder/geocoder';
import { UserProfil } from '../pages/profil/profil';
import { EditPage } from '../pages/edit/edit';
import { PubProvider } from '../services/pub';
import { UserLogout } from '../pages/logout/logout';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Splash } from '../pages/splash/splash';



@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    InscriptionPage,
    LoginPage,
    Userlist,
    UserProfil,
    UserLogout,
    Splash,
    EditPage
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
    ContactPage,
    HomePage,
    TabsPage,
    Splash,
    InscriptionPage,
    LoginPage,
    Userlist,
    UserProfil,
    EditPage,
    UserLogout
  ],
  providers: [
    StatusBar,
     UserProvider,
     PubProvider,
     

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeGeocoder,
    GeocoderProvider,
  ]
})
export class AppModule {}
