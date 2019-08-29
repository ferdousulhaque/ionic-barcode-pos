//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  //public http: HttpClient,

  constructor(
              private storage: Storage) {
    //console.log('Hello StorageProvider Provider');
    //storage.set('products', {});

    // Or to get a key/value pair
    


  }

  addProduct(data){
    let products = [];

    products.push(data);

    return new Promise((resolve, reject) => {
      this.storage.set('products', JSON.stringify(products));
      resolve();
      if(reject){
        resolve()
      }
    });
  }

  getProducts(){
    return this.storage.get('products');
  }

  updateProduct(data, old_code){

  }

  deleteProduct(code){
    //products = this.storage.get('products');
    
  }

  /* addProduct(data){
    let products = [];
    this.storage.get('products').then((val) => {
      //products = JSON.parse(val);
      console.log(val);
    });
    //products.push(data);
    //console.log(JSON.stringify(products));
    //console.log(JSON.parse(JSON.stringify(products)));
    this.storage.set('products', JSON.stringify(products)).then(() =>{
      this.storage.get('products').then((val) => {
        console.log(JSON.parse(val));
      });
    });
  } */

}
