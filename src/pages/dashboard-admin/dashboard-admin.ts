import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminMenuPage } from '../admin-menu/admin-menu';
import { AddAdvertPage } from '../add-advert/add-advert';


@IonicPage()
@Component({
  selector: 'page-dashboard-admin',
  templateUrl: 'dashboard-admin.html',
})
export class DashboardAdminPage {

  menu(){
    this.navCtrl.push(AdminMenuPage);
  }

  dbAddTop1(){
    this.navCtrl.push(AddAdvertPage);
  }

  dbEditTop1(){

  }

  dbDeleteTop1(){

  }

  dbAddTop2(){
    this.navCtrl.push(AddAdvertPage);
  }

  dbEditTop2(){

  }

  dbDeleteTop2(){

  }

  dbAddTop3(){
    this.navCtrl.push(AddAdvertPage);
  }

  dbEditTop3(){

  }

  dbDeleteTop3(){

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
