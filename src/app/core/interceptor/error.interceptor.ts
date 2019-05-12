import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Logger } from '../logger.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const log = new Logger('ErrorInterceptor');

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(error => this.errorHandler(error)));
    }

    // Customize the default error handler here if needed
    private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
        if (!environment.production) {
            // Do something with the error
            log.error('Request error', response);
        }
        throw response;
    }
}