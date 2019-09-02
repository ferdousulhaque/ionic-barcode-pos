import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageProvider} from '../../providers/storage/storage';
import { SingleProductPage } from '../singleproduct/singleproduct';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  listProducts: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public sp: StorageProvider) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.getProducts();
  }

  getProducts(){
    this.sp.storageReady().then(() => {
      this.sp.getProducts().then((val) => {
        this.listProducts = JSON.parse(val);
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
  }

  singleProduct(data){
    this.navCtrl.setRoot(SingleProductPage, {'data': data});
  }

}
