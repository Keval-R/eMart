import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AuthModule} from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FotterComponent } from './layout/fotter/fotter.component';
import { CartComponent } from './cart/cart.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgxStripeModule } from 'ngx-stripe';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ContactComponent } from './contact/contact.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FotterComponent,
    CartComponent,
    OrderStatusComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    NgxStripeModule.forRoot(
      'pk_test_51LFB7YSHaPW2YZDsK8YlHeC5XyNjuaCiIkELlkSUtzDS0f61y1Ee4BCqqgZoFPRSeCTW7RjdHFwK4kTna5haq7fE00inshlDHq'
    ),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    NgxImageZoomModule,
    HttpClientModule,
    // AuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
    }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http);
}