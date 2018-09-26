import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { EditProfilePage } from '../edit-profile/edit-profile';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  Back() {
    this.navCtrl.push(DashboardPage);
  }

  Logout() {
    this.navCtrl.push(LoginPage);
  }

  Edit() {
    this.navCtrl.push(EditProfilePage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
