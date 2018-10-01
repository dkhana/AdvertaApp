import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessDetailPage } from '../business-detail/business-detail';

/**
 * Generated class for the EditBusinessDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-business-detail',
  templateUrl: 'edit-business-detail.html',
})
export class EditBusinessDetailPage {

  Back(){
    this.navCtrl.push(BusinessDetailPage);
  }

  Save(){
    this.navCtrl.push(BusinessDetailPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBusinessDetailPage');
  }

}
