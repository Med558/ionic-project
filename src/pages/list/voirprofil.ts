import { Component } from "@angular/core";
import {UserProvider} from '../../services/users';
import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: 'VoirProfil-page',
    templateUrl:'VoirProfil.html'
    
})
export class VoirProfil{
    userlist:any;
    user : any;
userName:string;
userPrenom:string;
userEmail:string;
userTel:string;
userImage:string;



    //public navCtrl: NavController;
    constructor(private users: UserProvider, public navParams: NavParams, public navCtrl: NavController
        ){

        this.users.fillForm(this.navParams.get('id')).subscribe((result:any)=>{
  this.userName=result._source.name;
    this.userPrenom=result._source.prenom;
    this.userTel=result._source.tel;
  this.userEmail=result._source.email;
  this.userImage=result._source.image;

});
       

}




}
/* import { Component } from "@angular/core";
import {UserProvider} from '../../services/users';
import { NavParams, NavController, AlertController } from "ionic-angular";
import { Userlist } from '../list/list';
import { FormGroup } from "@angular/forms";

import { FormBuilder, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
@Component({
    selector: 'UserProfil-page',
    templateUrl:'profil.html'
    
})
export class UserProfil{
    loginlist:any;
userName:string;
userPrenom:string;
userEmail:string;
userTel:string;
userImage:string;
private f:FormGroup;

    
    constructor(public navCtrl: NavController,private users : UserProvider,private userss : UserProvider,private alertCtrl:AlertController,private formBuilder: FormBuilder){
      /*  this.userName=localStorage.getItem('name');
              this.userPrenom=localStorage.getItem('prenom');
              this.userTel=localStorage.getItem('tel');
            this.userEmail=localStorage.getItem('email');
            this.userImage=localStorage.getItem('image');*/
            /*

            

            this.users.userprofil().subscribe((userTabel:any)=>
            {
                
        
                this.loginlist = userTabel.hits.hits;
                
                this.userName=this.loginlist[0]._source.name;
              this.userPrenom=this.loginlist[0]._source.prenom;
              this.userTel=this.loginlist[0]._source.tel;
            this.userEmail=this.loginlist[0]._source.email;
            this.userImage=this.loginlist[0]._source.image;
                
            this.f = this.formBuilder.group({
                
                publication:['',Validators.required]
  
       
      })
              
                    
                  
            
        });

}


 
addpub(){
    this.userss.addpub(this.f.value).subscribe((result:any)=>{
    
     console.log("succes");
   
    
    });
       
   
     }

        
            
        
        
        
       
            
      //  this.loginlist[0]._source.password
    
  

}
 */