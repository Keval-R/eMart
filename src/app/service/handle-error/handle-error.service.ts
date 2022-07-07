import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor( public toastr: ToastrService) { }

  handleError(error: HttpErrorResponse) {
    console.log("error",error)
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.showError("Network error.");
    } else {
     //api error
     this.showError(error.status);
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  showError(msg:any){
    this.toastr.error(msg,'Error',{
      timeOut: 3000,
    });
  }
}

