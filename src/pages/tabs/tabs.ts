import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { InscriptionPage } from '../inscription/inscription';
import { LoginPage } from '../login/login';
import { Userlist } from '../list/list';
import { NavParams } from 'ionic-angular';
import { UserProfil } from '../profil/profil';
import { UserLogout } from '../logout/logout';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = InscriptionPage;
  tab5Root = LoginPage;
  tab7Root = UserProfil;
  tab8Root = UserLogout;
  session: String;
  constructor() {
    this.session = localStorage.getItem('login');
  }
}
