import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdvertSortingPage} from '../advert-sorting/advert-sorting';


/**
 * Generated class for the AdvertInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advert-info',
  templateUrl: 'advert-info.html',
})
export class AdvertInfoPage {

  Back(){
    this.navCtrl.push(AdvertSortingPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertInfoPage');
  }

}
