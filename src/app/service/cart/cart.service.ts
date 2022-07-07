import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  ls = new SecureLS();
  constructor() {}

  setData(data: any): void {
    this.ls.set('cartData', data);
  }

  getData() {
    return this.ls.get('cartData');
  }

  clearData() {
    this.ls.remove('cartData');
  }

  setPreviousCartData(data: any): void {
    this.ls.set('previousCartData', data);
  }

  getPreviousCartData() {
    return this.ls.get('previousCartData');
  }

  setCheckOutData(data: any): void {
    this.ls.set('checkoutPrice', data);
  }

  getCheckOutData() {
    return this.ls.get('checkoutPrice');
  }
}
