import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardAdminPage } from '../dashboard-admin/dashboard-admin';
import { ServicesMenuPage } from '../services-menu/services-menu';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-admin-menu',
  templateUrl: 'admin-menu.html',
})
export class AdminMenuPage {

  close(){
    this.navCtrl.push(DashboardAdminPage);
  }

  Services(){
    this.navCtrl.push(ServicesMenuPage);
  }

  adLogout(){
    this.navCtrl.push(LoginPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
