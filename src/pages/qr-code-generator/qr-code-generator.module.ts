import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodeGeneratorPage } from './qr-code-generator';

@NgModule({
  declarations: [
    QrCodeGeneratorPage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodeGeneratorPage),
  ],
})
export class QrCodeGeneratorPageModule {}
