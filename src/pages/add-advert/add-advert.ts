import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardAdminPage } from '../dashboard-admin/dashboard-admin';

@IonicPage()
@Component({
  selector: 'page-add-advert',
  templateUrl: 'add-advert.html',
})
export class AddAdvertPage {

  Back(){
    this.navCtrl.push(DashboardAdminPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
