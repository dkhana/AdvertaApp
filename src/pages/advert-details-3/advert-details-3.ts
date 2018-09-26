import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-advert-details-3',
  templateUrl: 'advert-details-3.html',
})
export class AdvertDetails_3Page {

  Back(){
    this.navCtrl.push(DashboardPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
