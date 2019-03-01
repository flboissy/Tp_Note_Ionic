import { ImagePicker } from '@ionic-native/image-picker';
import { ScannerPage } from './../pages/scanner/scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeGeneratorPage } from './../pages/qr-code-generator/qr-code-generator';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';
import { StorageProvider } from '../providers/storage/storage';
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    ScannerPage,
    ListPage,
    QrCodeGeneratorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    QRCodeModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScannerPage,
    ListPage,
    QrCodeGeneratorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    StorageProvider,
    BarcodeScanner,
    SocialSharing,
    ImagePicker
  ]
})
export class AppModule {}
