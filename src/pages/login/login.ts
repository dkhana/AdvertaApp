import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgetPasswordPage } from '../forget-password/forget-password';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Login() {
    this.navCtrl.push(DashboardPage);
  }

  Register(){
    this.navCtrl.push(SignUpPage);
  }

  fgtPassword(){
    this.navCtrl.push(ForgetPasswordPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
