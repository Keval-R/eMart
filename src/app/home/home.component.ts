import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '@app/service/product/product.service';
import * as _ from 'lodash';
import { CartService } from '@app/service/cart/cart.service';
import { Title } from '@angular/platform-browser';

interface ProductField {
  ProductId: number;
  ArtNo: string;
  Provider: string;
  ProviderArtNo: string;
  Brand: string;
  Price: any;
  img: any;
  qty?: number;
  big_img?: any;
  totalPrice?: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productData: ProductField[] = [];
  cartData: ProductField[] = [];
  enableScrollZoom1 = true;
  myThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg';
  myFullresImage =
    'https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg';
  constructor(
    private route: ActivatedRoute,
    public toastr: ToastrService,
    private product: ProductService,
    private titleService: Title,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProduct();
    this.cartData = this.cartService.getData() || [];
    this.titleService.setTitle(this.route.snapshot.data['title']);
  }

  loadProduct() {
    this.productData = this.product.getAllProducts();
  }

  trackByArtNo(index: number, companyProduct: any): string {
    return companyProduct.ArtNo;
  }

  addToCart(selectedProduct: ProductField) {
    selectedProduct.qty = 1;
    const alreadyAddedProduct: any = _.find(this.cartData, function (o) {
      return o.ProductId === selectedProduct.ProductId;
    });

    if (alreadyAddedProduct) {
      alreadyAddedProduct.qty++;
      alreadyAddedProduct.totalPrice =
        alreadyAddedProduct.qty * alreadyAddedProduct.Price;
    } else {
      selectedProduct.totalPrice = selectedProduct.Price;
      this.cartData.push(selectedProduct);
    }
    this.cartService.setData(this.cartData);
  }
}
