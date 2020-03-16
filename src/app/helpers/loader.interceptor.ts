import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { XtreamCodeAPIService } from '../services/xtreamcode-api.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];
    constructor(private xtreamCodeAPIService: XtreamCodeAPIService) { }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req)
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.xtreamCodeAPIService.isLoading.next(this.requests.length>0)
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requests.push(req);
        console.log("No of requests--->" + this.requests.length);
        this.xtreamCodeAPIService.isLoading.next(true);
        return Observable.create(observer => {
            const subscription = next.handle(req)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            this.removeRequest(req);
                            observer.next(event);
                        }
                    },
                    err => {
                        alert('error returned');
                        this.removeRequest(req);
                        observer.error(err);
                    },
                    () => {
                        this.removeRequest(req);
                        observer.complete();
                    });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}