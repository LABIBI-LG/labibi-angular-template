import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { v4 } from 'uuid';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiHeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-From-Channel': environment.channel,
                'X-Client-TraceId': v4(),
                'X-Client-Date': new Date().toISOString()
            },
        });
        return next.handle(req);
    }
}
