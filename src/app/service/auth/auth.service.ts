import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  ls = new SecureLS();
  isLoggedIn: string = this.ls.get('isLoggedIn') || 'false';
  language: string = this.ls.get('language') || 'en';
  // isLoggedIn : string  = localStorage.getItem('isLoggedIn') || 'false';

  constructor() {
    this.checkLogin();
  }
  login(): void {
    this.ls.set('isLoggedIn', 'true');
    // localStorage.setItem('isLoggedIn', 'true');
    this.checkLogin();
  }

  logout(): void {
    this.ls.set('isLoggedIn', 'false');
    // localStorage.setItem('isLoggedIn', 'false');
    this.checkLogin();
  }

  checkLogin(): void {
    this.isLoggedIn = this.ls.get('isLoggedIn') || 'false';
    // this.isLoggedIn = localStorage.getItem('isLoggedIn')   || "false";
  }

  setLanguage(language:string){
    this.ls.set("language",language );
  }
}
