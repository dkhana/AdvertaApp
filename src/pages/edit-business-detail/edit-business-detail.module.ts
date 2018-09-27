import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBusinessDetailPage } from './edit-business-detail';

@NgModule({
  declarations: [
    EditBusinessDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBusinessDetailPage),
  ],
})
export class EditBusinessDetailPageModule {}
