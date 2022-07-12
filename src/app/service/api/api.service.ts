import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";
import { switchMap } from 'rxjs/operators';
import { StripeService } from 'ngx-stripe';
import { HandleErrorService } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private stripeService: StripeService,private handleErrorService : HandleErrorService) { }


  url= "https://emartshop.herokuapp.com/";

  checkout(cartData: any) {

    type session = {
      id: string;
    };


    return this.http
      .post<session>(`${this.url}create-checkout-session`, {
        data: cartData,
      })
      .pipe(
        switchMap(session => {
          console.log('session.id', session.id);
          return this.stripeService.redirectToCheckout({
            sessionId: session.id,
          });
        })
      )
      .subscribe(
        response => {
          console.log(
            'POST completed sucessfully. The response received ' + response
          );
        },
        error => {
          console.log('Post failed with the errors', error);
        },
        () => {
          console.log('Post Completed');
        }
      );
  }
  

  login(data:any): Observable<any>{
   return this.http.post<any>(`${this.url}login`,{
      data:data
    }) .pipe(
      catchError((err) => {
        return this.handleErrorService.handleError(err);
        // return throwError(err);    //Rethrow it back to component
      })
    )
  }
}
