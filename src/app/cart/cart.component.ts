import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/service/cart/cart.service';
import { ApiService } from '@app/service/api/api.service';
import * as _ from 'lodash';
import { Title } from '@angular/platform-browser';
import { parseInt } from 'lodash';
import { ActivatedRoute } from '@angular/router';

interface ProductField {
  ProductId: number;
  ArtNo: string;
  Provider: string;
  ProviderArtNo: string;
  Brand: string;
  Price: any;
  img: any;
  qty?: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private titleService: Title,
    private route: ActivatedRoute
  ) { }
  checkoutPrice: any = 0;
  cartData: any = [];
  PreviousCartData: any = [];

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.loadCartData();
  }

  loadCartData() {
    this.cartData = this.cartService.getData();
    this.PreviousCartData = this.cartService.getPreviousCartData();
    this.getcheckoutPrice();
  }

  removeOneProduct(product: ProductField) {
    _.find(this.cartData, function (o) {
      if (o.ProductId === product.ProductId) {
        o.qty = o.qty - 1;
        o.totalPrice = o.Price * o.qty;
      }
      return o.ProductId === product.ProductId;
    });
    this.cartService.setData(this.cartData);
    this.getcheckoutPrice();
  }

  removeAllProduct(product: ProductField) {
    _.remove(this.cartData, { ProductId: product.ProductId });
    this.cartService.setData(this.cartData);
    this.getcheckoutPrice();
  }

  getcheckoutPrice() {
    let checkoutPrice: any = 0;
    _.forEach(this.cartData, function (value) {
      checkoutPrice = checkoutPrice + value.totalPrice;
    });

    this.checkoutPrice = parseInt(checkoutPrice);
  }

  checkoutPage() {
    this.apiService.checkout(this.cartData);
  }

}
