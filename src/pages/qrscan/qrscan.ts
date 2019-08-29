import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-qrscan',
  templateUrl: 'qrscan.html'
})
export class QRScanPage {

  //barcode: 

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner) {

    this.barcodeScanner.scan().then(barcodeData => {
          alert('Barcode data'+ barcodeData.text);
      }).catch(err => {
          console.log('Error', err);
      });
  }
}
