import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserProvider} from '../../services/users';
import { UserProfil } from '../profil/profil';
import {PubProvider} from '../../services/pub';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  private f:FormGroup;
    userId:string;

userNom:string;
userPrenom:string;
userEmail:string;
userTel:string;
userImage:string;
userLogin:string;
userPassword:string;
userAdresse:string;

  constructor(public navCtrl: NavController ,private formBuilder: FormBuilder,private users:UserProvider,
  public alertCtrl: AlertController,public navParams: NavParams,private pub:PubProvider) {

    this.pub.delete(this.navParams.get('id')).subscribe((result:any)=>{
      window.location.reload();
    });


this.users.edit(this.navParams.get('id')).subscribe((result:any)=>{
  this.userId=result._id;
  this.userLogin=localStorage.getItem('login');

  this.userNom=result._source.name;
  this.userPrenom=result._source.prenom;
  this.userEmail=result._source.email;
  this.userTel=result._source.tel;
    this.userAdresse=result._source.adresse;

    this.userPassword=result._source.password;

  this.userImage=result._source.image;

});
this.f = this.formBuilder.group({
              id: ['', Validators.required],

              login: ['', Validators.required],
              nom: ['', Validators.required],
              prenom: ['', Validators.required],
              tel: ['', Validators.required],
              email: ['', Validators.email],
              password: ['', Validators.required],
              adresse:['',Validators.required],
              avatar:['',Validators.required]


    
    })
  
 } 
 logForm(){
 this.users.add(this.f.value).subscribe((result:any)=>{
 let alert = this.alertCtrl.create({

    
 title: 'Modification',
            
subTitle: 'SUCCESS',
   
         buttons: ['Ok']
        });
                // window.location.reload();

      alert.present();
                // window.location.reload();

 });
  }
}

