import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      //   setHeaders: {
      //     'securityKey': '©KashyapS.Patel',
      //   },
      // Access to XMLHttpRequest at 'http://localhost:3000/Customers' from origin 'http://localhost:4200'
      // has been blocked by CORS policy: Request header field securitykey is not allowed by Access-Control-Allow-Headers in preflight response.
    });
    return next.handle(req);
  }
}
