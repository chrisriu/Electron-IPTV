import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { config } from '../configs/auth.config';
import { catchError, map } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { NoopAnimationPlayer } from '@angular/animations';
@Injectable({ providedIn: 'root' })
export class XtreamCodeAPIService {
    constructor(private httpClient: HttpClient) { }
    sendRequest(username: string, password: string, action?: string){
        var url = null;
        if (action == null){
            url = `${config.url}:${config.port}/player_api.php?username=${username}&password=${password}`
        } else {
            url = `${config.url}:${config.port}/player_api.php?username=${username}&password=${password}&action=${action}`
        }
        const request = new HttpRequest("GET", url)
        return this.httpClient.request(request)
    }
}