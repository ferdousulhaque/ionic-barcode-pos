import { Injectable } from '@angular/core';

/*
  Generated class for the GettersetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GettersetterProvider {

  total: number = 0;
  count: number = 0;
  vat: number = 0;

  constructor() {
    
  }

  getTotal(){
    return this.total;
  }

  setTotal(total){
    this.total = total;
  }

  getCount(){
    return this.count;
  }

  setCount(count){
    this.count = count;
  }

  getVat(){
    return this.vat;
  }

  setVat(vat){
    this.vat = vat;
  }

}
