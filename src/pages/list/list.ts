import { Component } from "@angular/core";
import {UserProvider} from '../../services/users';
import { NavParams, NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { NgZone  } from '@angular/core';
import { Events } from 'ionic-angular';
import { Page } from "ionic-angular/umd/navigation/nav-util";
import { VoirProfil } from "./voirprofil";
@Component({
    selector: 'users-page',
    templateUrl:'list.html'
    
})
export class Userlist{
    userlist:any;
    user : any;
    pushPage:Page;
    public navCtrl: NavController;
    constructor(private users: UserProvider, public navParams: NavParams
        ){
           
        this.users.all().subscribe((userTabel:any)=>
        {
            //if(userTabel.hits.hits._source.login==localStorage.getItem('login'))
           this.userlist = userTabel.hits.hits;
       //console.log(userTabel._source.login);
       //console.log(localStorage.getItem('login'));
    });
    this.pushPage=VoirProfil;
}
logOff()
{
localStorage.clear();
console.log("good");
window.location.reload();
  }



}