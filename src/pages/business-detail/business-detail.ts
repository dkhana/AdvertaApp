import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserSummaryPage } from '../user-summary/user-summary';
import { EditBusinessDetailPage } from '../edit-business-detail/edit-business-detail';


/**
 * Generated class for the BusinessDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-detail',
  templateUrl: 'business-detail.html',
})
export class BusinessDetailPage {

  Back(){
    this.navCtrl.push(UserSummaryPage);
  }

  Edit(){
    this.navCtrl.push(EditBusinessDetailPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessDetailPage');
  }

}
