import {NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { Component} from '@angular/core';
@Component({
    selector: 'users-logout',
    templateUrl:'logout.html'
    
})
export class UserLogout{
constructor( public navCtrl: NavController ){

    localStorage.clear();
console.log("good");
window.location.reload();

}
}