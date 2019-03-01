import { QRCode } from 'qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QrCodeProvider } from '../../providers/qr-code/qr-code';
import { ImagePicker } from '@ionic-native/image-picker';


/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barCodeScanner: BarcodeScanner, private alertController: AlertController, private qrCodeProvider: QrCodeProvider, private imagePicker : ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
  }

  scan() {
    this.barCodeScanner.scan().then((result) => {
      let alrt = this.alertController.create({
        title: "We got a QR code",
        subTitle: "Qr code value: ",
        message: result.text
      })
    })
    .catch(() => {
      let alrt = this.alertController.create({
        title: "An error occurs",
        message: "Error, please try again later"

      })
    })
  }

  scanFromPicture() {
  //   this.imagePicker.getPictures({maximumImagesCount: 1}).then((results) => {
  //     for (var i = 0; i < results.length; i++) {
  //         console.log('Image URI: ' + results[i]);
  //     }
  //   }).catch((err) => 
  // {
    
  // })
  }
}
