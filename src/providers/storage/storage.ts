//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  //public http: HttpClient,
  products: any = [];

  constructor(
              private storage: Storage) {
    //console.log('Hello StorageProvider Provider');
    //storage.set('products', {});

    // Or to get a key/value pair
    


  }

  addProduct(data){
    return new Promise((resolve, reject) => {
      
      this.storage.get('products').then(val => {
        this.products = JSON.parse(val);
        //console.log(this.products);
        this.products.push(data);
        this.storage.set('products', JSON.stringify(this.products));
      }) 
      
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
    data.foreach((val)=> {
      if(val.code == old_code){

      }
    })
  }

  deleteProduct(data){
    return new Promise ((resolve) => {
        this.getProducts().then((products) => {
        let arr = [];
        let arr2 = [];
        arr = JSON.parse(products);
        arr2 = arr.filter((val) => {
          return (val.code != data.code && val.name != data.name);
        })
        
        this.storage.set('products', JSON.stringify(arr2));
        resolve();
      });
    });
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
