import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { xcConfig } from '../configs/xc.api.config';
import { Category } from '../models/category.model';
import { LiveTV, Movie, Serie } from '../models'
@Injectable({ providedIn: 'root' })
export class XtreamCodeAPIService {
  constructor(private httpClient: HttpClient) { }

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

  sendVodStreamByCategoryIDRequest(username: string, password: string, category_id: number){
    const url = `${xcConfig.url}:${xcConfig.port}/player_api.php?username=${username}&password=${password}&action=get_vod_streams&category_id=${category_id}`
    return this.httpClient.get<Movie[]>(url)
  }
}
