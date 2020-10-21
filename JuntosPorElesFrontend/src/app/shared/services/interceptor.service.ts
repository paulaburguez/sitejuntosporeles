import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  private readonly authUurl = environment.api.url  + "/auth/login";
  constructor(
    private spinner: NgxSpinnerService,
    private api: ApiService
  ) { }

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    this.spinner.show();
    if (request.url !== this.authUurl && sessionStorage.getItem('token')) {
       request = request.clone({
         setHeaders: {
           Authorization: `Bearer ${sessionStorage.getItem('token')}`
         }
       });
    }


    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinner.hide();
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.spinner.hide();
        } else {
          this.spinner.hide();
          console.log(request.body);
          return throwError(error);
        }
      })
    );
  }
}
