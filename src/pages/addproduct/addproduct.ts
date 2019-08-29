import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';

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
              public sp: StorageProvider
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

    this.sp.addProduct(data).then(()=>{
      alert("Product Added Successfully")
    })
  }
}
