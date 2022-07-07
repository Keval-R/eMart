import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register',
    },
  },
  {
    path: 'forgot-password',
    component: ForgotComponent,
    data: {
      title: 'Forgot Password',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
