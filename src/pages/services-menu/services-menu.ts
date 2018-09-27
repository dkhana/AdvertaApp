import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminMenuPage } from '../admin-menu/admin-menu';
import { AddAdvertPage } from '../add-advert/add-advert';
import { RemoveAdvertPage } from '../remove-advert/remove-advert';
import { AdvertSortingPage } from '../advert-sorting/advert-sorting';


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

  adminRemove(){
    this.navCtrl.push(RemoveAdvertPage);
  }

  adminView(){
    this.navCtrl.push(AdvertSortingPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
