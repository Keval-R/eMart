import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/service/auth/auth.service';
import { CartService } from '@app/service/cart/cart.service';
import {
  faPhone,
  faCartShopping,
  faUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  icon1 = faPhone;
  icon2 = faCartShopping;
  icon3 = faUser;
  icon4 = faRightFromBracket;
  language =  this.authService.language;
  constructor(
    private authService: AuthService,
    private router: Router,
    public cartService: CartService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang(this.language);
  }

  emptyCart = true;

  viewContact() {
    this.router.navigate(['/contact']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  viewCart() {
    this.router.navigate(['/cart']);
  }

  setLanguage(target:any){
    this.translate.use(target.value);
    this.authService.setLanguage(target.value);
  }
}
