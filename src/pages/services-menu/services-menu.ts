import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminMenuPage } from '../admin-menu/admin-menu';
import { AddAdvertPage } from '../add-advert/add-advert';

@IonicPage()
@Component({
  selector: 'page-services-menu',
  templateUrl: 'services-menu.html',
})
export class ServicesMenuPage {

  serviceClose(){
    this.navCtrl.setRoot(AdminMenuPage);
  }

  adminAdd(){
    this.navCtrl.push(AddAdvertPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
