import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoneResetPage } from '../done-reset/done-reset';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  confirmpassword() {
    this.navCtrl.push(DoneResetPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
