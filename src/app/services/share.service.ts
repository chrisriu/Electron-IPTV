import { IpcRenderer } from "electron";

import {
  EventEmitter,
  Injectable,
  Output,
  ɵSWITCH_COMPILE_INJECTABLE__POST_R3__,
} from "@angular/core";

import {
  LiveTV,
  LiveTVCard,
  Movie,
  MovieCard,
  Serie,
  SerieCard,
  Radio,
  RadioCard,
} from "../models";
import { TMDbAPIService } from "./tmdb-api.service";
@Injectable()
export class ShareService {
  public currentUser: any;
  public currentServer: any;

  public categories: Object = {};
  public livetvs: LiveTV[];
  public movies: Movie[];
  public series: Serie[];
  public radios: Radio[];

  public livetvCards: LiveTVCard[];
  public movieCards: MovieCard[];
  public serieCards: SerieCard[];
  public radioCards: RadioCard[];

  public lastMovies: Movie[];
  public lastSeries: Serie[];
  public favLiveTVs: LiveTV[];
  public favRadios: Radio[];

  public lastMovieCards: MovieCard[];
  public lastSerieCards: SerieCard[];
  public favLiveTVCards: LiveTVCard[];
  public favRadioCards: RadioCard[];

  private ipc: IpcRenderer;

  constructor(private tmdbAPIService: TMDbAPIService) {
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
    var name_Year_Array = name_Year.split(" - ");
    var name = "";
    name_Year_Array.forEach((element, index) => {
      if (index != name_Year_Array.length - 1) {
        name += element + " ";
      }
    });

    if (name.substr(name.length - 1) == " ") {
      return name.substring(0, name.length - 1);
    }
    return name;
  }

  public extractYear(name_Year) {
    var name_Year_Array = name_Year.split(" - ");
    var year = "";
    year = name_Year_Array[name_Year_Array.length - 1];
    return year;
  }

  public getLastMovies(movies: Movie[], count: number) {
    var i, j;
    var maxIndex, maxDate;
    var tmp: Movie;
    let result_Object: Movie[] = [];
    for (i = 0; i < count; i++) {
      maxIndex = i;
      maxDate = movies[i].added;
      for (j = i + 1; j < movies.length; j++) {
        if (movies[j].added > maxDate) {
          maxIndex = j;
          maxDate = movies[j].added;
          tmp = movies[i];
          movies[i] = movies[maxIndex];
          movies[maxIndex] = tmp;
        }
      }
      result_Object[i] = movies[i];
    }

    return result_Object;
  }

  public extractMovieCards(movies: Movie[]) {
    if (movies.length > 0) {
      let movieCards: MovieCard[] = [];
      movies.forEach((movie, index) => {
        var movieCard: MovieCard = {
          num: 0,
          name: "example",
          streamId: 0,
          categoryId: "0",
          cardImg: "",
          tmdbID: 0,
        };
        // Movie Card Init
        movieCard.num = movie.num;
        movieCard.name = this.extractName(movie.name);
        movieCard.streamId = movie.stream_id;
        movieCard.categoryId = movie.category_id;
        movieCard.cardImg = movie.stream_icon;
        if(movieCard.name != ""){
          this.tmdbAPIService
          .searchMovieByTitle(movieCard.name)
          .subscribe((data) => {
            var similarMovies = data["results"];
            similarMovies.forEach((similarMovie, index) => {
              movieCard.tmdbID = similarMovie["id"];
              if (
                similarMovie["release_date"].includes(
                  this.extractYear(movie.name)
                )
              ) {
                if (similarMovie["backdrop_path"] != null) {
                  movieCard.cardImg =
                    "https://image.tmdb.org/t/p/original/" +
                    similarMovie["backdrop_path"];
                } else {
                  movieCard.cardImg =
                    "https://image.tmdb.org/t/p/original/" +
                    similarMovie["poster_path"];
                }
              }
            });
          });
        }
        movieCards[index] = movieCard;
      });
      return movieCards;
    }
    return null;
  }

  public getFavLiveTVs(livetvs: LiveTV[], count: number) {
    // Return the favorite LiveTVs...
    return null;
  }

  public extractLiveTVCards(livetvs: LiveTV[]) {
    // Return the cards of the Live TVs
    return null;
  }

  public getLastSeries(series: Serie[], count: number) {
    var i, j;
    var maxIndex, maxDate;
    var tmp: Serie;
    let resultObjects: Serie[] = [];
    count = series.length < count ? series.length : count;
    for (i = 0; i < count; i++) {
      maxIndex = i;
      maxDate = series[i].releaseDate;
      for (j = i + 1; j < series.length; j++) {
        if (series[j].releaseDate > maxDate) {
          maxIndex = j;
          maxDate = series[j].releaseDate;
          tmp = series[i];
          series[i] = series[maxIndex];
          series[maxIndex] = tmp;
        }
      }
      resultObjects[i] = series[i];
    }
    return resultObjects;
  }

  public extractSerieCards(series: Serie[]) {
    if (series.length > 0) {
      let serieCards: SerieCard[] = [];
      series.forEach((serie, index) => {
        var serieCard: SerieCard = {
          num: 0,
          name: "example",
          seriesId: 0,
          cardImg: "",
          categoryId: "",
          tmdbID: 0,
        };
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
}
