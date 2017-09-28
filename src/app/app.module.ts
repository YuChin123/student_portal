import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TutorPage } from '../pages/tutor/tutor';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { HttpProvider } from '../providers/http/http';
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http'; 
import { IonicStorageModule } from '@ionic/storage';
import { Geofence } from '@ionic-native/geofence';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TutorPage,
    DashboardPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    IonicModule.forRoot(MyApp), 
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TutorPage,
    DashboardPage, 
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    LoginProvider,
    Geofence
  ]
})

export class AppModule {}
