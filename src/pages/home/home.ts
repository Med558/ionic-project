import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserProvider} from '../../services/users';
import {Page} from 'ionic-angular/umd/navigation/nav-util';
import {Userlist} from '../list/list';
import 'rxjs/add/operator/map';
import { NativeGeocoder, NativeGeocoderForwardResult,NativeGeocoderOptions  } from '@ionic-native/native-geocoder';
import { Http } from '@angular/http';
import {HttpHeaders} from "@angular/common/http";

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    

    constructor(private users: UserProvider,private http: Http,private nativeGeocoder: NativeGeocoder){
        

  
}


 
  }
  
  


  
