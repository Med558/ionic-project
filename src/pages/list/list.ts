import { Component } from "@angular/core";
import {UserProvider} from '../../services/users';
import { NavParams, NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
@Component({
    selector: 'users-page',
    templateUrl:'list.html'
    
})
export class Userlist{
    userlist:any;
    user : any;
    //public navCtrl: NavController;
    constructor(private users: UserProvider, public navParams: NavParams, public navCtrl: NavController
        ){
        this.users.all().subscribe((userTabel:any)=>
        {
            
            this.userlist = userTabel.hits.hits;
       
    });
    
}
logOff()
{
localStorage.clear();
console.log("good");
this.navCtrl.pop();

  }



}