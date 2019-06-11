import { Component } from "@angular/core";
import {UserProvider} from '../../services/users';
import {PubProvider} from '../../services/pub';
import {Page} from 'ionic-angular/umd/navigation/nav-util';

import { NavParams, NavController, AlertController } from "ionic-angular";
import { Userlist } from '../list/list';
import { FormGroup } from "@angular/forms";

import { FormBuilder, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { InscriptionPage } from '../inscription/inscription';
import { EditPage } from '../edit/edit';

@Component({
    selector: 'UserProfil-page',
    templateUrl:'profil.html'
    
})
export class UserProfil{
    loginlist:any;
    userId:string;
userName:string;
userPrenom:string;
userEmail:string;
userTel:string;
userImage:string;
userAdresse:string;
private f:FormGroup;
private fpub:FormGroup;

    edit:Page;
    editp:Page;

    publist:any;
    constructor(public navCtrl: NavController,private users : UserProvider,private pub:PubProvider,private alertCtrl:AlertController,private formBuilder: FormBuilder){
   

            

            this.users.userprofil().subscribe((userTabel:any)=>
            {
              
                this.loginlist = userTabel.hits.hits;
                
                 this.userId=this.loginlist[0]._source.id;

                this.userName=this.loginlist[0]._source.name;
              this.userPrenom=this.loginlist[0]._source.prenom;
              this.userTel=this.loginlist[0]._source.tel;
            this.userEmail=this.loginlist[0]._source.email;
            this.userAdresse=this.loginlist[0]._source.adresse;
            this.userImage=this.loginlist[0]._source.image;
        });
            this.f = this.formBuilder.group({
                publication:['',Validators.required]
  
       
      })
              
                    
                  
                   


                   this.pub.profilpub().subscribe((pubTabel:any)=>
        {  
            
             this.publist = pubTabel.hits.hits; 
       

    });

    this.edit=EditPage;
    this.editp=EditPage;

}


 
addpubli(){
    this.pub.addpub(this.f.value).subscribe((result:any)=>{
    
            window.location.reload();

    
    });
       
   
     }

        
            
        
        
        
       
            
      //  this.loginlist[0]._source.password
    
  

}