import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { xcConfig } from '../configs/xc.api.config';
import { Category } from '../models/category.model';
import { LiveTV, Movie, Serie } from '../models'
@Injectable({ providedIn: 'root' })
export class XtreamCodeAPIService {
  constructor(private httpClient: HttpClient) { }
  sendRequest(username: string, password: string, action?: string) {
    var url = null;
    if (action == null) {
      url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}`
    } else {
      url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}&action=${action}`
    }
    const request = new HttpRequest("GET", url)
    return this.httpClient.request(request)
  }

  sendLoginRequest(username: string, password: string) {
    const url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}`
    return this.httpClient.get(url)
  }

  sendCategoryRequest(username: string, password: string, category_name: string) {
    const url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}&action=${category_name}`
    return this.httpClient.get<Category[]>(url)
  }

  sendLiveTVStreamRequest(username: string, password: string) {
    const url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}&action=get_live_streams`
    return this.httpClient.get<LiveTV[]>(url)
  }

  sendVodStreamRequest(username: string, password: string) {
    const url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}&action=get_vod_streams`
    return this.httpClient.get<Movie[]>(url)
  }

  sendSerieStreamRequest(username: string, password: string) {
    const url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}&action=get_series`
    return this.httpClient.get<Serie[]>(url)
  }
}