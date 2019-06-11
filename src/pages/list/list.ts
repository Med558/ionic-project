import {UserProvider} from '../../services/users';
import { NavParams, NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { Component,ViewChild,ElementRef } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { PubProvider } from '../../services/pub';
declare var google;

@Component({
    selector: 'users-page',
    templateUrl:'list.html'
    
})
export class Userlist{
@ViewChild('map') mapElement:ElementRef;
map:any;
    userlist:any;
    user : any;

userName:string;
userLogin:string;

userPrenom:string;
userEmail:string;
userTel:string;
userAdresse:string;
userImage:string;


publist:any;
    //public navCtrl: NavController;
    constructor(private users: UserProvider, public navParams: NavParams, public navCtrl: NavController,private http: Http ,private pub:PubProvider ){

        this.users.fillForm(this.navParams.get('id')).subscribe((result:any)=>{
  this.userName=result._source.name;
  this.userLogin=result._source.login;

    this.userPrenom=result._source.prenom;
    this.userTel=result._source.tel;
        this.userAdresse=result._source.adresse;
        this.userImage=result._source.image;

  this.userEmail=result._source.email;
  this.pub.userpub(this.userLogin).subscribe((pubTabel:any)=>
        {
            
            this.publist = pubTabel.hits.hits;
       
    });

});
    
}
logOff()
{
localStorage.clear();
console.log("good");
this.navCtrl.pop();

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
    if(marker.adresse==this.userAdresse) {
     var loc = {lat: marker.Latitude , lng: marker.Longitude}
     console.log(loc);
     marker=new google.maps.Marker({
       position : loc,
       map: this.map
     })
  }
  }
  }

}