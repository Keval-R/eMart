import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotComponent],
  imports: [ReactiveFormsModule, CommonModule, AuthRoutingModule],
})
export class AuthModule {}
