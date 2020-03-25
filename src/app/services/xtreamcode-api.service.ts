import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { config } from '../configs/auth.config';
import { catchError, map } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { NoopAnimationPlayer } from '@angular/animations';
@Injectable({ providedIn: 'root' })
export class XtreamCodeAPIService {

    constructor(private httpClient: HttpClient) { }

    getCategories(username: string, password: string, categoryType: string) {
        let category: string = null
        if (categoryType == "livetv") {
            category = "get_live_categories"
        } else if (categoryType == "vod") {
            category = "get_vod_categories"
        } else if (categoryType == "series") {
            category = "get_series_categories"
        }
        const url = `${config.url}:${config.port}/player_api.php?username=${username}&password=${password}&action=${category}`
        const httpRequestLiveCategory1 = new HttpRequest(
            "GET",
            url,
            {},
            { reportProgress: true }
        )
        return this.httpClient.request(httpRequestLiveCategory1)
    }
    getContextbyType(username: string, password: string, type: string){
        const url = `${config.url}:${config.port}/player_api.php?username=${username}&password=${password}&action=${type}`
        const httpRequestContext = new HttpRequest("GET", url, {}, {reportProgress: true})
        return this.httpClient.request(httpRequestContext)
    }
}