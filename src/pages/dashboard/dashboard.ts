import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AdvertDetails_3Page } from '../advert-details-3/advert-details-3';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  Profile() {
    this.navCtrl.push(ProfilePage);
  }

  l3Advert(){
    this.navCtrl.push(AdvertDetails_3Page);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
