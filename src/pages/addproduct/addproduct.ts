import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-add-product',
  templateUrl: 'addproduct.html'
})
export class AddProductPage {

  prodCode: any = "";
  prodName: any = "";
  prodPrice: number = 0;
  listProduct: any;

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public navParams: NavParams,
              public sp: StorageProvider,
              public toastCtrl: ToastController
              ) {
                this.prodCode = this.navParams.get("code");
  }

  scanQR(){
    this.barcodeScanner.scan().then(barcodeData => {
        //this.prodCode = barcodeData.text;
        this.navCtrl.setRoot(AddProductPage,{code: barcodeData.text})
    }).catch(err => {
        console.log('Error', err);
    });
  }

  addproduct(){
    const data = {
      "code": this.prodCode,
      "name": this.prodName,
      "price": this.prodPrice
    };

    this.sp.storageReady().then(() => {
      this.sp.addProduct(data);
      setTimeout(()=> {
        let toast = this.toastCtrl.create({
          message: 'Added new Product',
          duration: 3000
        });
        toast.present();
        this.navCtrl.setRoot(ListPage);
      },1000)
    })
  }
}
