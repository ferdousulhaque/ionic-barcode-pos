import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddProductPage } from '../addproduct/addproduct';
import { ListPage } from '../list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';
import { StorageProvider} from '../../providers/storage/storage';
import { GettersetterProvider} from '../../providers/gettersetter/gettersetter';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  total: number;
  count: number;
  vat: number;

  constructor(public navCtrl: NavController,
      private barcodeScanner: BarcodeScanner,
      public alertCtrl: AlertController,
      public sp: StorageProvider,
      public getset: GettersetterProvider,
      private toastCtrl: ToastController) {
        
  }

  ionViewDidLoad(){
    this.total = this.getset.getTotal();
    this.count = this.getset.getCount();
    this.vat = this.getset.getVat();
  }

  qrscan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.sp.searchProduct(barcodeData.text).then(val => {
        if(val[0] != null){
          let toast = this.toastCtrl.create({
            message: "Found Product "+ val[0].name,
            duration: 2000
          });
          toast.present();
          this.count++;
          this.total += parseFloat(val[0].price);
          this.vat += (parseFloat(val[0].price)*0.05);
          this.getset.setTotal(this.total);
          this.getset.setCount(this.count);
          this.getset.setVat(this.vat);
        }else{
          let toast = this.toastCtrl.create({
            message: "Product Not Found!!!",
            duration: 2000
          });
          toast.present();
        }
      })
    }).catch(err => {
        console.log('Error', err);
    });
  }

  addproduct(){
    this.navCtrl.push(AddProductPage);
  }

  showproduct(){
    this.navCtrl.push(ListPage);
  }

  manual() {
    let alertPop = this.alertCtrl.create({
      title: 'Product',
      inputs: [
        {
          name: 'code',
          placeholder: 'Product Code'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Search',
          handler: data => {
            this.sp.searchProduct(data.code).then(val => {
              if(val[0] != null){
                let toast = this.toastCtrl.create({
                  message: "Found Product "+ val[0].name,
                  duration: 2000
                });
                toast.present();
                this.count++;
                this.total += parseFloat(val[0].price);
                this.vat += (parseFloat(val[0].price)*0.05);
                this.getset.setTotal(this.total);
                this.getset.setCount(this.count);
                this.getset.setVat(this.vat);
              }else{
                let toast = this.toastCtrl.create({
                  message: "Product Not Found!!!",
                  duration: 2000
                });
                toast.present();
              }
            })
          }
        }
      ]
    });
    alertPop.present();
  }

  reset(){
    this.getset.setTotal(0);
    this.getset.setCount(0);
    this.getset.setVat(0);
    let toast = this.toastCtrl.create({
      message: "POS reset to Zero",
      duration: 2000
    });
    toast.present();
  }

}
