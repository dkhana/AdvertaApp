import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { CheckEmailPage } from '../check-email/check-email';

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  reset(){
    this.navCtrl.push(CheckEmailPage);
  }

  cancelreset(){
    this.navCtrl.push(LoginPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
