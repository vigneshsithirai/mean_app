import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('==================================');
        const token: string = localStorage.getItem('token');
        // add it if we have one

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request);
    }
}
