import { IpcRenderer } from 'electron';

import { EventEmitter, Injectable, Output } from '@angular/core';

import { LiveTV, LiveTVCard, Movie, MovieCard, Serie, SerieCard } from '../models';

@Injectable()
export class ShareService {

  public currentUser: any;
  public currentServer: any;

  public categories: Object = {}
  public livetvs: LiveTV[]
  public movies: Movie[]
  public series: Serie[]

  public lastMovies: Movie[]
  public lastSeries: Serie[]

  private ipc: IpcRenderer

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer
      } catch (error) {
        throw error
      }
    } else {
      console.warn('Could not load electron ipc')
    }
  }

  @Output() sideBarPosX: EventEmitter<any> = new EventEmitter();


  // Sliders title change position with sidebar Resize Event...
  public setSlideCardTitlePosX(posx) {
    if (posx == 82) {
      this.sideBarPosX.emit(82)
    } else {
      this.sideBarPosX.emit(280)
    }
  }

  public getEmittedPosX() {
    return this.sideBarPosX
  }

  public closeApp() {
    this.ipc.send("closeApp")
  }
  public extractName(name_Year) {
    var name_Year_Array = name_Year.split(" - ")
    var name = "";
    name_Year_Array.forEach((element, index) => {
      if (index != name_Year_Array.length - 1) {
        name += element + " "
      }
    });

    if (name.substr(name.length - 1) == " ") {
      return name.substring(0, name.length - 1)
    }
    return name
  }

  public extractYear(name_Year) {
    var name_Year_Array = name_Year.split(" - ")
    var year = "";
    year = name_Year_Array[name_Year_Array.length - 1]
    return year
  }

  public getLastMovies(movies: Movie[], count: number) {
    var i, j;
    var maxIndex, maxDate
    var tmp: Movie;
    let result_Object: Movie[] = []
    for (i = 0; i < count; i++) {
      maxIndex = i
      maxDate = movies[i].added
      for (j = i + 1; j < movies.length; j++) {
        if (movies[j].added > maxDate) {
          maxIndex = j
          maxDate = movies[j].added
          tmp = movies[i]
          movies[i] = movies[maxIndex]
          movies[maxIndex] = tmp
        }
      }
      result_Object[i] = movies[i]
    }

    return result_Object
  }

  public extractMovieCards(videos) {
    if (videos.length > 0) {
      if (typeof (videos[0] == Movie)) {
        let movieCards: MovieCard[] = []

        videos.forEach((video, index) => {
          var movieCard: MovieCard = {
            num: 0,
            name: "example",
            streamId: 0,
            categoryId: "0",
            cardImg: ""
          };
          // Movie Card Init

          movieCard.num = video.num
          movieCard.name = this.extractName(video.name)
          movieCard.streamId = video.stream_id
          movieCard.categoryId = video.category_id
          movieCard.cardImg = video.stream_icon

          movieCards[index] = movieCard
        });
        return movieCards
      }
    }
    return null
  }

  public getFavLiveTVs(livetvs: LiveTV[], count: number) {
    var i, j;
    var maxIndex, maxDate
    var tmp: LiveTV;
    let tmp_Object: LiveTV[] = []
    for (i = 0; i < count; i++) {
      maxIndex = i
      maxDate = livetvs[i].added
      for (j = i + 1; j < livetvs.length; j++) {
        if (livetvs[j].added > maxDate) {
          maxIndex = j
          maxDate = livetvs[j].added
          tmp = livetvs[i]
          livetvs[i] = livetvs[maxIndex]
          livetvs[maxIndex] = tmp
        }
      }
    }
    var coount = 0;
    for (var k = 0; k < livetvs.length; k++) {

      if (livetvs[k].stream_icon != null) {
        tmp_Object[k] = livetvs[k]
        coount++;
      }
      if (coount == 10) {
        break;
      }
    }
    return tmp_Object
  }

  public getLastSeries(series: Serie[], count: number) {
    var i, j;
    var maxIndex, maxDate
    var tmp: Serie;
    let resultObjects: Serie[] = []
    count = series.length < count ? series.length : count
    for (i = 0; i < count; i++) {
      maxIndex = i
      maxDate = series[i].releaseDate
      for (j = i + 1; j < series.length; j++) {
        if (series[j].releaseDate > maxDate) {
          maxIndex = j
          maxDate = series[j].releaseDate
          tmp = series[i]
          series[i] = series[maxIndex]
          series[maxIndex] = tmp
        }
      }
      resultObjects[i] = series[i]
    }
    return resultObjects
  }

  public extractLiveTVCards(videos) {
    if (videos.length > 0) {
      if (typeof (videos[0] == LiveTV)) {
        let liveTVCards: LiveTVCard[] = []
        videos.forEach((video, index) => {
          var liveTVCard: LiveTVCard = {
            num: 0,
            name: "example",
            streamId: 0,
            cardImg: "",
            epg_channel_id: null,
            category_id: "0",
          }
          liveTVCard.num = video.num;
          liveTVCard.name = video.name;
          liveTVCard.cardImg = video.stream_icon;
          liveTVCard.streamId = video.stream_id;
          liveTVCard.epg_channel_id = video.epg_channel_id;
          liveTVCard.category_id = video.category_id;

          liveTVCards[index] = liveTVCard
        });
        return liveTVCards
      }
    }
    return null
  }



  public extractSerieCards(series) {
    if (series.length > 0) {
      if (typeof (series[0] == Serie)) {
        let serieCards: SerieCard[] = []
        series.forEach((video, index) => {
          var serieCard: SerieCard = {
            num: 0,
            name: "example",
            seriesId: 0,
            cardImg: "",
            categoryId: ""
          }

          serieCard.num = video.num
          serieCard.name = video.name
          serieCard.seriesId = video.series_id
          serieCard.cardImg = video.cover

          serieCards[index] = serieCard
        });
        return serieCards
      }
    }
    return null
  }
}
