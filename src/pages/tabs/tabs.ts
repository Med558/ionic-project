import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { InscriptionPage } from '../inscription/inscription';
import { LoginPage } from '../login/login';
import { Userlist } from '../list/list';
import { NavParams } from 'ionic-angular';
import { UserProfil } from '../profil/profil';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = InscriptionPage;
  tab5Root = LoginPage;
  tab6Root = Userlist;
  tab7Root = UserProfil
  session: String;
  constructor() {
    this.session = localStorage.getItem('login');
  }
}
