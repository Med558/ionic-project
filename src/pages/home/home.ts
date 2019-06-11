import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserProvider} from '../../services/users';
import {Page} from 'ionic-angular/umd/navigation/nav-util';
import {Userlist} from '../list/list';
import {LoginPage} from '../login/login';
import {PubProvider} from '../../services/pub';

import 'rxjs/add/operator/map';
import { NativeGeocoder, NativeGeocoderForwardResult,NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Http } from '@angular/http';
import {HttpHeaders} from "@angular/common/http";

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    userlist:any;
    user : any;
    //public navCtrl: NavController;
    pushPage:Page;
    @ViewChild('map') mapElement:ElementRef;
map:any;
header : HttpHeaders;
publist:any;
userImage:string;

    constructor(private users: UserProvider,private http: Http,private nativeGeocoder: NativeGeocoder, public navCtrl: NavController,private pub:PubProvider)
    {

    this.pub.all().subscribe((pubTabel:any)=>
        {
            
            this.publist = pubTabel.hits.hits;
       
    });
        this.users.all().subscribe((userTabel:any)=>
        {
            
            this.userlist = userTabel.hits.hits;

    });
        this.pushPage=Userlist;

  
}



 
ionViewDidLoad(){
  this.displayGoogleMap();
  this.getMarkers();
  }
  
  displayGoogleMap()
{
  let latLng = new google.maps.LatLng(35.853470,10.582924);

  let mapOption={

    center:latLng,
    zoom:7,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }
this.map = new google.maps.Map(this.mapElement.nativeElement,mapOption);
}

getMarkers(){

  this.http.get('assets/data/markers.json').map((res)=>res.json())
  .subscribe(data=>{
    this.addMarkersMap(data);
 
  })
}
  addMarkersMap(markers){
    
    for (let marker of markers){
     var loc = {lat: marker.Latitude , lng: marker.Longitude}
     console.log(loc);
     marker=new google.maps.Marker({
       position : loc,
       map: this.map
     })
  }
  }
  
  

   
}
