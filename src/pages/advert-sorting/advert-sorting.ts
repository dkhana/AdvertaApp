import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardAdminPage } from '../dashboard-admin/dashboard-admin';
import { AdvertInfoPage } from '../advert-info/advert-info';
/**
 * Generated class for the AdvertSortingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advert-sorting',
  templateUrl: 'advert-sorting.html',
})
export class AdvertSortingPage {

  Back(){
    this.navCtrl.push(DashboardAdminPage);
  }

  advertinfobutton(): void {
    this.navCtrl.push(AdvertInfoPage);
  }

  items = [
    'Advert 1',
    'Advert 2',
    'Advert 3',
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertSortingPage');
  }

}
