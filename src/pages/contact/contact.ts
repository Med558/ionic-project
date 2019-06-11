import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private f:FormGroup;

  constructor(private alertCtrl:AlertController,private formBuilder: FormBuilder) {
this.f = this.formBuilder.group({

      email: ['', Validators.required],
    
      message: ['', Validators.required]

    

    });
  
 } 
 logForm(){
    console.log(this.f.value);
     let alert = this.alertCtrl.create({
    
 title: 'Messsage',
            
subTitle: 'TITLE',
   
         buttons: ['Ok']
        });
     
      alert.present();

  }
  }
   



