import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPasswordPage } from '../reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-check-email',
  templateUrl: 'check-email.html',
})
export class CheckEmailPage {

  check(){
    this.navCtrl.push(ResetPasswordPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
