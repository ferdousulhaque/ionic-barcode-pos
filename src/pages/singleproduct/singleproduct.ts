import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';

@Component({
  selector: 'page-single-product',
  templateUrl: 'singleproduct.html'
})
export class SingleProductPage {

  prodCodeOld: any = "";
  prodCodeNew: any = "";
  prodName: any = "";
  prodPrice: number = 0;
  listProduct: any;

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public navParams: NavParams,
              public sp: StorageProvider
              ) {
    this.prodCodeOld = this.navParams.get("code");
  }

  updateProduct(){
    const data = {
      "code": this.prodCodeNew,
      "name": this.prodName,
      "price": this.prodPrice
    };

    console.log(data);

    /* this.sp.updateProduct(data, this.prodCodeOld).then(()=>{
      alert("Product Added Successfully")
    }) */
  }

  deleteproduct(){
    this.sp.deleteProduct(this.prodCodeOld);
  }
}
