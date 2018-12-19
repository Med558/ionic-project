import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../services/users';
import { Userlist } from '../list/list';
@Component({
  selector: 'page-contact',
  templateUrl: 'login.html'
})
export class LoginPage {
    loginForm : FormGroup ;
    loginlist:any;
  constructor(public navCtrl: NavController,private formBuilder:FormBuilder,private users : UserProvider) {
    this.loginForm = this.formBuilder.group({
       
        password:['',Validators.required],
        login:['',Validators.required]
   
      });

  }
  login(){
    this.users.login(this.loginForm.value).subscribe((userTabel:any)=>
    {
        

        this.loginlist = userTabel.hits.hits;
        //alert(this.loginlist[0]._source.tel);
        //alert(this.loginlist.length);
        if(this.loginlist.length == 0){

       
            console.log("invalide login");
           // alert("erreur");
        }
        else{
            localStorage.setItem('login',this.loginlist[0]._source.login);
            console.log("true");
           // if(this.loginlist[0]._source.password==users.password){
            this.navCtrl.push(Userlist);
          //  }
        }
            
          
    
});

}

}