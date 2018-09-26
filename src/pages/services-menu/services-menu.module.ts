import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesMenuPage } from './services-menu';

@NgModule({
  declarations: [
    ServicesMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicesMenuPage),
  ],
})
export class ServicesMenuPageModule {}
