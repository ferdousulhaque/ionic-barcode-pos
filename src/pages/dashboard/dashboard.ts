import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanPage } from '../qrscan/qrscan';
import { AddProductPage } from '../addproduct/addproduct';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController) {

  }

  qrscan(){
    this.navCtrl.push(QRScanPage);
  }

  addproduct(){
    this.navCtrl.push(AddProductPage);
  }

  showproduct(){
    this.navCtrl.push(ListPage);
  }

}
