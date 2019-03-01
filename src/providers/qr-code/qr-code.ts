import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsQR from "jsqr";


/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {


  constructor(public http: HttpClient) {
    console.log('Hello QrCodeProvider Provider');
  }

  generateFromBase64(dataURI: string, width: number, height : number) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8ClampedArray(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }

  }

}
