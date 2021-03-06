import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserProvider} from '../../services/users';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {

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
  public alertCtrl: AlertController,public navParams: NavParams) {



this.users.edit(this.navParams.get('id')).subscribe((result:any)=>{
  this.userId=result._id;
  this.userLogin=result._source.login

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
    
 title: 'Inscription',
            
subTitle: 'SUCCESS',
   
         buttons: ['Ok']
        });
     
      alert.present();
        this.navCtrl.push(LoginPage);

 });

  }
  


  
  }
   



