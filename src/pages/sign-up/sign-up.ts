import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  crtAcc(){
    this.navCtrl.push(LoginPage);
  }

  contGuest(){
    this.navCtrl.push(DashboardPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
