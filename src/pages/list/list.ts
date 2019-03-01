import { StorageProvider } from './../../providers/storage/storage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{input_text: string, date: string, img: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider : StorageProvider) {
    // If we navigated to this page, we will have an item available as a nav param
  

    this.storageProvider.get('history').then((datas) => {
      if(!datas){
        datas = Array<{input_text:string, date:string}>()
      }
      this.items = datas;
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
