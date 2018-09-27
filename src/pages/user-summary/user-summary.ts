import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DashboardAdminPage } from '../dashboard-admin/dashboard-admin';
import { UserDetailPage } from '../user-detail/user-detail';
import { BusinessDetailPage } from '../business-detail/business-detail';

/**
 * Generated class for the UserSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-summary',
  templateUrl: 'user-summary.html',
})
export class UserSummaryPage {

  Back(){
    this.navCtrl.push(DashboardAdminPage);
  }

  userdetailbutton(): void {
    this.navCtrl.push(UserDetailPage);
  }

  businessdetailbutton(): void {
    this.navCtrl.push(BusinessDetailPage);
  }

  category: string = "user";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSummaryPage');
  }

}
