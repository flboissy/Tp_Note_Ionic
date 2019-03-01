import { Storage } from '@ionic/storage';
import { StorageProvider } from './../../providers/storage/storage';
import { QRCodeComponent } from 'angularx-qrcode';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';




/**
 * Generated class for the QrCodeGeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-generator',
  templateUrl: 'qr-code-generator.html',
})
export class QrCodeGeneratorPage {
  @ViewChild('qrcode') qrcode: QRCodeComponent;
  qrString: string
  public srcImage: string
  public isGenerated: boolean
  private element: ElementRef

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private socialSharing: SocialSharing,private storageProvider : StorageProvider) {
  }

  ionViewDidLoad() {
  }

  generate() {
    this.srcImage = this.qrString;
    this.isGenerated = true;
    this.storageProvider.get('history').then((val) => {
      if(!val){
        val = Array<{input_text:string, date:string}>();
      }
      let date = new Date();
      const newValue = {
        "Input_text": this.qrString,
        "Date": date.getDate() + "/" + (date.getMonth()  + 1)  + "/" + date.getFullYear()
      }
      val.push(newValue);
      this.storageProvider.set('history',val);
    })
  }

  share(){
    const hostElem = this.qrcode.el.nativeElement;
    let img64 = hostElem.children[1].src;
    this.socialSharing.share(null,null,img64,null);
  }

}
