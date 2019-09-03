import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-single-product',
  templateUrl: 'singleproduct.html'
})
export class SingleProductPage {

  prodCodeOld: any;
  product: any;

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public navParams: NavParams,
              public sp: StorageProvider,
              private toastCtrl: ToastController
              ) {
    this.product = this.navParams.get("data");
    this.prodCodeOld = this.product.code;
  }

  scanQR(){
    this.barcodeScanner.scan().then(barcodeData => {
        //this.prodCode = barcodeData.text;
        this.navCtrl.setRoot(SingleProductPage,{code: barcodeData.text})
    }).catch(err => {
        console.log('Error', err);
    });
  }

  updateProduct(){
    const data = {
      "code": this.product.code,
      "name": this.product.name,
      "price": this.product.price
    };

    this.sp.updateProduct(data, this.prodCodeOld).then(()=>{
      setTimeout(() => {
        let toast = this.toastCtrl.create({
          message: "Product Updated !!",
          duration: 2000
        });
        toast.present();
        this.navCtrl.setRoot(ListPage);
      }, 1000)
    })
  }

  deleteproduct(data){
    this.sp.storageReady().then(() => {
      this.sp.deleteProduct(data);
      setTimeout(() => {
        let toast = this.toastCtrl.create({
          message: "Product Deleted !!",
          duration: 2000
        });
        toast.present();
        this.navCtrl.setRoot(ListPage);
      }, 1000)
    }).catch(err => {
      console.log(err)
    });
  }
}
