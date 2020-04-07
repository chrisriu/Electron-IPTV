import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { tmdbConfig } from '../configs/tmdb.api.config';
@Injectable({ providedIn: 'root' })
export class TMDbAPIService {
  constructor(private httpClient: HttpClient, ) { }
  getMovieByID(movieID: number) {
    const url = `${tmdbConfig.url}/${tmdbConfig.v_api}/movie/${movieID}?api_key=${tmdbConfig.api_key}&language=en-US`
    return this.httpClient.get(url)
  }

  getMovieByTitle(movieTitle: string, language?: string, page?: number, include_adult?: boolean, region?: string, year?: number, primary_release?: number) {
    var url = `${tmdbConfig.url}/${tmdbConfig.v_api}/search/movie?api_key=${tmdbConfig.api_key}&query=${movieTitle}`

    var queryLanguage: string
    var queryPage: string
    var queryAdult: string
    var queryRegion: string
    var queryYear: string
    var queryPrimaryYear: string

    console.log("Language", language)
    console.log("Page", page)
    console.log("Adult", include_adult)
    console.log("Region", region)
    console.log("Year", year)
    console.log("Primary Release", primary_release)


    if (language != null) {
      queryLanguage = "&language=" + language
      url += queryLanguage
    }

    if (page != 0) {
      queryPage = "&page=" + page
      url += queryPage
    }

    if (include_adult != null) {
      queryAdult = "&include_adult=" + include_adult
      url += queryAdult
    }

    if (region != null) {
      queryRegion = "&region=" + region
      url += queryRegion
    }

    if (year != null) {
      queryYear = "&year=" + year
      url += queryYear
    }

    if (primary_release != null) {
      queryPrimaryYear = "&primary_release_year=" + primary_release
      url += queryPrimaryYear
    }

    console.log("url", url)
    return this.httpClient.get(url)
  }
}