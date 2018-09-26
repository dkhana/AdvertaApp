import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SliderPage } from '../pages/slider/slider';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AdvertDetails_1Page } from '../pages/advert-details-1/advert-details-1';
import { WhatsNewPage } from '../pages/whats-new/whats-new';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { AdminMenuPage } from '../pages/admin-menu/admin-menu';
import { AddAdvertPage } from '../pages/add-advert/add-advert';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { CheckEmailPage } from '../pages/check-email/check-email';
import { DoneResetPage } from '../pages/done-reset/done-reset';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AdvertDetails_3Page } from '../pages/advert-details-3/advert-details-3';
import { DashboardAdminPage } from '../pages/dashboard-admin/dashboard-admin';
import { ServicesMenuPage } from '../pages/services-menu/services-menu';

@NgModule({
  declarations: [
    MyApp,
    SliderPage,
    SignUpPage,
    LoginPage,
    DashboardPage,
    DashboardAdminPage,
    AdvertDetails_1Page,
    AdvertDetails_3Page,
    WhatsNewPage,
    ProfilePage,
    EditProfilePage,
    AdminMenuPage,
    AddAdvertPage,
    ForgetPasswordPage,
    CheckEmailPage,
    DoneResetPage,
    ResetPasswordPage,
    ServicesMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SliderPage,
    SignUpPage,
    LoginPage,
    DashboardPage,
    DashboardAdminPage,
    AdvertDetails_1Page,
    AdvertDetails_3Page,
    WhatsNewPage,
    ProfilePage,
    EditProfilePage,
    AdminMenuPage,
    AddAdvertPage,
    ForgetPasswordPage,
    CheckEmailPage,
    DoneResetPage,
    ResetPasswordPage,
    ServicesMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
