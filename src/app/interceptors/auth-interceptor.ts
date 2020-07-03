import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    //Il faut ajouter le token pour identifier le user
    //const params = new HttpParams().set('access_token', token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', token);
      const newReq = req.clone({headers});
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}

export const AuthentificationInterceptorProvider = {
   provide: HTTP_INTERCEPTORS,
   useClass: AuthInterceptor,
   multi: true,
  };
