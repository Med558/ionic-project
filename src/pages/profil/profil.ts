import { Component } from "@angular/core";
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

    
    constructor(public navCtrl: NavController,private users : UserProvider,private pub : UserProvider,private alertCtrl:AlertController,private formBuilder: FormBuilder){
      /*  this.userName=localStorage.getItem('name');
              this.userPrenom=localStorage.getItem('prenom');
              this.userTel=localStorage.getItem('tel');
            this.userEmail=localStorage.getItem('email');
            this.userImage=localStorage.getItem('image');*/

            

            this.users.userprofil().subscribe((userTabel:any)=>
            {
                
        
                this.loginlist = userTabel.hits.hits;
                
                this.userName=this.loginlist[0]._source.name;
              this.userPrenom=this.loginlist[0]._source.prenom;
              this.userTel=this.loginlist[0]._source.tel;
            this.userEmail=this.loginlist[0]._source.email;
            this.userImage=this.loginlist[0]._source.image;
        });
            this.f = this.formBuilder.group({
                id: ['', [Validators.required,Validators.min(1)]],
                publication:['',Validators.required]
  
       
      })
              
                    
                  
            
       

}


 
addpub(){
    this.pub.addpub(this.f.value).subscribe((result:any)=>{
    
     console.log("succes");
   
    
    });
       
   
     }

        
            
        
        
        
       
            
      //  this.loginlist[0]._source.password
    
  

}
