import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../services/users';
import { Userlist } from '../list/list';
import { InscriptionPage } from '../inscription/inscription';
import { NgZone  } from '@angular/core';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    loginForm: FormGroup ;
    toinscritForm: FormGroup;
    loginlist:any;
  constructor(public navCtrl: NavController,private formBuilder:FormBuilder,private users : UserProvider) {
     
    this.loginForm = this.formBuilder.group({
       
        password:['',Validators.required],
        login:['',Validators.required]
   
      });

      this.toinscritForm = this.formBuilder.group({
      
   
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
            
           if(this.loginlist[0]._source.password==this.loginForm.value.password){
            localStorage.setItem('login',this.loginlist[0]._source.login);
           
            console.log("true");
            this.navCtrl.push(HomePage);
            window.location.reload();

          }else{alert("password invalide")}
        }
            
          
    
});

}

toinscription(){
  this.users.login(this.toinscritForm.value).subscribe((userTabel:any)=>
  {
    this.navCtrl.push(InscriptionPage);
        
  
  });
}


}
