import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ListPage } from '../pages/list/list';
import { AddProductPage } from '../pages/addproduct/addproduct';
import { SingleProductPage } from '../pages/singleproduct/singleproduct';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { GettersetterProvider } from '../providers/gettersetter/gettersetter';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    ListPage,
    AddProductPage,
    SingleProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    ListPage,
    AddProductPage,
    SingleProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    BarcodeScanner,
    IonicStorageModule,
    ToastController,
    GettersetterProvider
  ]
})
export class AppModule {}
