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
  listProducts: Array<{code: string, name: string, price: string}>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public sp: StorageProvider) {
    /* this.sp.getProducts().then((val) => {
      this.listProducts = JSON.parse(val)
    }) */
  }

  ionViewDidLoad() {
    this.getProducts();
  }

  getProducts(){
    this.sp.getProducts().then((val) => {
      this.listProducts = JSON.parse(val)
    })
  }

  singleProduct(code){
    this.navCtrl.push(SingleProductPage, {'code': code});
  }

}
