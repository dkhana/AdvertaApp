import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAdvertPage } from './add-advert';

@NgModule({
  declarations: [
    AddAdvertPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAdvertPage),
  ],
})
export class AddAdvertPageModule {}
