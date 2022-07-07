import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '@app/service/cart/cart.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent implements OnInit {
  orderStatus = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.route.queryParams.subscribe((params: any) => {
      this.orderStatus = params?.status;
    });
    const cartData = this.cartService.getData();

    if (this.orderStatus === 'true') {
      this.cartService.setPreviousCartData(cartData);
      this.cartService.clearData();
    }

    setTimeout(() => {
      this.orderStatus === 'true'
        ? this.router.navigate(['home'])
        : this.router.navigate(['cart']);
    }, 5000);
  }
}
