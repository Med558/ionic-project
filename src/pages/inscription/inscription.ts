import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserProvider} from '../../services/users';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {

  private f:FormGroup;

  constructor(public navCtrl: NavController ,private alertCtrl:AlertController,private formBuilder: FormBuilder,private users:UserProvider) {
this.f = this.formBuilder.group({
              id: ['', [Validators.required,Validators.min(1)]],
              login: ['', Validators.required],
              nom: ['', Validators.required],
              prenom: ['', Validators.required],
              tel: ['', Validators.required],
              email: ['', Validators.email],
              password: ['', Validators.required],
              avatar:['',Validators.required]

     
    })
  
 } 
 
 logForm(){
 this.users.add(this.f.value).subscribe((result:any)=>{
 
  this.navCtrl.push(LoginPage);

 
 });
    

  }
  
  }
   



