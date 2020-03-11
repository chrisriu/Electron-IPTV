import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { config } from '../configs/auth.config';
import { catchError } from 'rxjs/operators';

export class XtreamCodeAPIService {
    constructor(private httpClient: HttpClient, private router: Router) { }

    get_liveStream_Category( username: string, password: string){
        const httpParams: HttpParams = new HttpParams().set('username', username).set('password', password).set('action', 'get_live_categories');
        const endpoint = `${config.url}:${config.port}/player_api.php`;
        return this.httpClient.get(`${endpoint}`, {params: httpParams});
    }   

    get_vodStream_Category(username: string, password: string){
        const httpParams: HttpParams = new HttpParams().set('username', username).set('password', password).set('action', 'get_vod_categories');
        const endpoint = `${config.url}:${config.port}/player_api.php`;
        return this.httpClient.get(`${endpoint}`, {params: httpParams});
    }

    get_seriesStream_Category(username: string, password: string){
        const httpParams: HttpParams = new HttpParams().set('username', username).set('password', password).set('action', 'get_series_categories');
        const endpoint = `${config.url}:${config.port}/player_api.php`;
        return this.httpClient.get(`${endpoint}`, {params: httpParams});
    }
    
}