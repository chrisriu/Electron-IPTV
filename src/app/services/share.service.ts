import { IpcRenderer } from "electron";

import {
  EventEmitter,
  Injectable,
  Output,
} from "@angular/core";

import { LiveTV, LiveTVCard, Movie, MovieCard, MovieInfo, Serie, SerieCard, Radio, RadioCard} from "../models";
import { TMDbAPIService } from "./tmdb-api.service";
import { XtreamCodeAPIService } from './xc-api.service'
@Injectable()
export class ShareService {
  public currentUser: any;
  public currentServer: any;

  public currentMovieBlockRowIndex: number = 0;

  public categories: any;
  public livetvs: any;
  public movies: any;
  public series: any;
  public radios: any;

  public livetvCards: LiveTVCard[];
  public movieCards: MovieCard[];
  public serieCards: SerieCard[];
  public radioCards: RadioCard[];

  public movieInfos: MovieInfo[];

  public lastMovies: Movie[];
  public lastSeries: Serie[];
  public favLiveTVs: LiveTV[];
  public favRadios: Radio[];

  public lastMovieCards: MovieCard[];
  public lastSerieCards: SerieCard[];
  public favLiveTVCards: LiveTVCard[];
  public favRadioCards: RadioCard[];

  public sortedMovies: Object = {};
  public sortedMovieCards: Object = {};

  private ipc: IpcRenderer;

  constructor(private tmdbAPIService: TMDbAPIService, private xcAPIService: XtreamCodeAPIService) {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require("electron").ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
      console.warn("Could not load electron ipc");
    }
  }

  @Output() sideBarPosX: EventEmitter<any> = new EventEmitter();

  // Sliders title change position with sidebar Resize Event...
  public setSlideCardTitlePosX(posx) {
    if (posx == 82) {
      this.sideBarPosX.emit(82);
    } else {
      this.sideBarPosX.emit(280);
    }
  }

  public getEmittedPosX() {
    return this.sideBarPosX;
  }

  public closeApp() {
    this.ipc.send("closeApp");
  }
  public extractName(name_Year) {

    let regex = /\(\d{4}\)/;
    let yearResult = name_Year.match(regex);
    let movieName = name_Year
    if (yearResult != null){
      yearResult = yearResult[0]
      movieName = name_Year.replace(yearResult, "")
      movieName = movieName.substring(0, movieName.length-1)
    }
    return movieName;
  }

  public extractNameForAdult (nameForAdult){
    if(nameForAdult.includes("FHD") || nameForAdult.includes("FHS")){
      return nameForAdult.substring(4);
    }
    return nameForAdult;
  }

  public extractYear(name_Year) {
    let regex = /\(\d{4}\)/;
    let yearResult = name_Year.match(regex);
    if (yearResult != null){
      yearResult = yearResult[0];
      return yearResult.substring(1, yearResult.length-1)
    } else {
      return "xxxx"
    }
  }

  public extractGenres(genreIds){
    let result: string = "";
    genreIds.forEach((genreId, index) => {
      result += genreId["name"]+" / ";
    })

    return result.substring(0,result.length-3);
  }
  public exchangeSpaceByDash(str: string){
    return str.replace(/\s+/g, '-').toLowerCase();
  }

  public getLastVods(movies, count) {
    let maxIndex, maxDate, temp;
    count = movies.length < count?movies.length:count;
    let result_Object = [];
    for(var i = 0; i < count; i++){
      maxIndex = i;
      maxDate = movies[i].added;
      for(var j = i+1; j<movies.length; j++){
        if(movies[j].added > maxDate){
          maxIndex = j;
          maxDate = movies[j].added;
          temp = movies[i];
          movies[i] = movies[j];
          movies[maxIndex] = temp
        }
      }
      result_Object[i] = movies[i]
    }
    return result_Object
  }

  public getLastSeries(series, count){
    let maxIndex, maxDate, temp;
    let result_Object = [];
    count = series.length<count?series.length:count;

    for(var i = 0; i < count; i++){
      maxIndex = i;
      maxDate = series[i].added;
      for(var j = i+1; j<series.length; j++){
        if(series[j].releaseDate > maxDate){
          maxIndex = j;
          maxDate = series[j].releaseDate;
          temp = series[i];
          series[i] = series[j];
          series[maxIndex] = temp
        }
      }
      result_Object[i] = series[i]
    }
    return result_Object
  }

  public async extractMovieCards(movies){
    let movieCards = []
    let tmdbAPIInfos = []
    try{
      let moviesPromise = [];
      movies.forEach((movie, index) => {
        const extractMovieName = this.extractName(movie.name)
        if(extractMovieName && extractMovieName.length){
          moviesPromise.push(this.tmdbAPIService.searchMovieByTitle(extractMovieName))
        }
      });

      await Promise.all(moviesPromise);

      moviesPromise.forEach(async (moviePromise, index) => {
        const extractMovieName = this.extractName(movies[index].name)
        const extractMovieYear = this.extractYear(movies[index].name)
        const tmdbResults = moviePromise.__zone_symbol__value["results"];
        let movieCard = new MovieCard()
        let tmdbID;
        let tmdbBackdropUrl;
        let tmdbReleaseDate;
        for (var i=0; i<tmdbResults.length; i++){

          if(tmdbResults[i]["release_date"] == "undefined" || tmdbResults[i]["release_date"] == "" || !("release_date" in tmdbResults[i]) ){
            continue;
          }
          if(extractMovieYear === "xxxx"){
            tmdbID = tmdbResults[0]["id"]
            tmdbBackdropUrl = tmdbResults[0]["backdrop_path"]
            tmdbReleaseDate = tmdbResults[0]["release_date"]
            break;
          }
          if(tmdbResults[i]["release_date"].includes(extractMovieYear)){
            tmdbID = tmdbResults[i]["id"]
            tmdbBackdropUrl = tmdbResults[i]["backdrop_path"];
            break;
          }
        }

        // Get Movie Detail from TMDB API using tmdbID..
        movieCard.num = movies[index].num
        movieCard.name = extractMovieName;
        movieCard.streamId = movies[index].stream_id
        movieCard.cardImg = tmdbBackdropUrl;
        movieCard.categoryId = movies[index].category_id;
        movieCard.tmdbID = tmdbID;
        movieCards.push(movieCard)
      })
    } catch(e){
      console.log(e)
    } finally{
      return movieCards
    }
  }

  public getFavLiveTVs(livetvs) {
    // Return the favorite LiveTVs...
    return null;
  }

  public extractLiveTVCards(livetvs: LiveTV[]) {
    // Return the cards of the Live TVs
    return null;
  }



  public extractSerieCards(series: Serie[]) {
    if (series.length > 0) {
      let serieCards: SerieCard[] = [];
      series.forEach((serie, index) => {
        let serieCard: SerieCard = new SerieCard()
        serieCard.num = serie.num;
        serieCard.name = serie.name;
        serieCard.seriesId = serie.series_id;
        serieCard.cardImg = serie.backdrop_path[0];
        serieCards[index] = serieCard;
      });
      return serieCards;
    }
    return null;
  }

  public getFavRadios(radios: Radio[], count: number) {
    // Return of the favorite Radio...
    return null;
  }

  public extractRadioCards(radios: Radio[]) {
    // Return the cards of the radio
    return null;
  }

  public sortMovies(){
    let movieCategories = this.categories["vod_categories"]
    console.log("Movie Categories =>", movieCategories)
    movieCategories.forEach((category, index) => {
      this.xcAPIService.sendVodStreamByCategoryIDRequest(this.currentUser["username"], this.currentUser["password"], category["category_id"])
          .subscribe((data)=>{
            this.sortedMovies[category["category_name"]] = data
            this.sortedMovieCards[category["category_name"]] = this.extractMovieCards(data)
        })

    })
  }
}
