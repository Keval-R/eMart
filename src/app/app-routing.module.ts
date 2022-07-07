import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
    data: {
      title: 'Home'
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('@app/auth/auth.module').then(m => m.AuthModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
    data: {
      title: 'Cart'
    }
  },
  {
    path: 'order-status',
    component: OrderStatusComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
    data: {
      title: 'Order status',
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
    data: {
      title: 'Contact'
    }
  },
  {
    path: '**', component: PageNotFoundComponent, data: {
      title: '404'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
