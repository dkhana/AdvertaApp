import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  Back(){
    this.navCtrl.push(ProfilePage);
  }

  cancelEdit(){
    this.navCtrl.push(ProfilePage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
