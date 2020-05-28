import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tmdbConfig } from '../configs/tmdb.api.config';

@Injectable({ providedIn: 'root' })
export class TMDbAPIService {
  constructor(private httpClient: HttpClient, ) { }
  public getMovieByID(movieID: number) {
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/movie/${movieID}?api_key=${tmdbConfig.api_key}&language=en-US`
    return this.httpClient.get(url)
  }

  public searchMovieByTitle(query: String){
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/search/movie?api_key=${tmdbConfig.api_key}&query=${query}`
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).toPromise().then(res=>{
        resolve(res)
      }, err => {
        reject(err);
      })
    })
  }

  public searchTVByTitle(query: string){
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/search/tv?api_key=${tmdbConfig.api_key}&query=${query}`
    return this.httpClient.get(url)
  }

  public getMovieDetailById(id: string){
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/movie/${id}?api_key=${tmdbConfig.api_key}`
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).toPromise().then(res=>{
        resolve(res)
      }, err => {
        reject(err);
      })
    })
  }

  public getMovieCastsById(id: string){
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/movie/${id}/credits?api_key=${tmdbConfig.api_key}`
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).toPromise().then(res=>{
        resolve(res)
      }, err => {
        reject(err);
      })
    })
  }

  public getCastInfoByCreditId(credit_id: string){
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/credit/${credit_id}?api_key=${tmdbConfig.api_key}`
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).toPromise().then(res=>{
        resolve(res)
      }, err=>{
        reject(err);
      })
    })
  }

  public getPersonInfoByPersonId(person_id){
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/person/${person_id}?api_key=${tmdbConfig.api_key}`
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).toPromise().then(res=>{
        resolve(res)
      }, err=>{
        reject(err);
      })
    })
  }
}
