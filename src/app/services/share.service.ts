import { Injectable, Output, EventEmitter } from '@angular/core';
import { LiveTV, Movie, Serie, MovieCard, LiveTVCard } from '../models'
import { IpcRenderer } from 'electron';
@Injectable()
export class ShareService {

  public currentUser: any;
  public currentServer: any;
  public categories: Object = {}
  public livetvStreams: LiveTV[]
  public vodStreams: Movie[]
  public serieStreams: Serie[]

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
    let tmp_Object: Movie[] = []
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
    }
    var coount = 0;
    for (var k = 0; k < movies.length; k++) {

      if (movies[k].stream_icon != null) {
        tmp_Object[k] = movies[k]
        coount++;
      }
      if (coount == 10) {
        break;
      }
    }
    return tmp_Object
  }

  public extractMovieCards(videos) {
    if (videos.length > 0) {
      if (typeof (videos[0] == Movie)) {
        let movieCards: MovieCard[] = []

        videos.forEach((video, index) => {
          var movieCard: MovieCard = {
            num: 0,
            name: "example",
            streamType: "Movie",
            streamId: "0",
            categoryId: "0",
            rating: "0.0",
            releaseYear: "00-00-0000",
            posterImg: "",
            backdropImg: ""
          };
          // Movie Card Init
          movieCard.num = video.num
          movieCard.name = this.extractName(video.name)
          movieCard.releaseYear = this.extractYear(video.name)
          movieCard.streamType = video.stream_type
          movieCard.streamId = video.stream_id
          movieCard.posterImg = video.stream_icon
          movieCard.rating = video.rating
          movieCard.categoryId = video.category_id
          movieCards[index] = movieCard
        });
        return movieCards
      }
    }
    return null
  }



  public getLastLiveTVs(livetvs: LiveTV[], count: number) {
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

  public extractLiveTVCards(videos) {
    if (videos.length > 0) {
      if (typeof (videos[0] == LiveTV)) {
        let liveTVCards: LiveTVCard[] = []
        videos.forEach((video, index) => {
          var liveTVCard: LiveTVCard = {
            num: 0,
            name: "example",
            streamType: 'LiveTV',
            streamId: "0",
            streamIcon: null,
            epg_channel_id: null,
            category_id: "0",
            tv_archive_duration: 0
          }
          liveTVCard.num = video.num;
          liveTVCard.name = video.name;
          liveTVCard.streamType = video.stream_type;
          liveTVCard.streamIcon = video.stream_icon;
          liveTVCard.streamId = video.stream_id;
          liveTVCard.epg_channel_id = video.epg_channel_id;
          liveTVCard.category_id = video.category_id;
          liveTVCard.tv_archive_duration = video.tv_archive_duration;
          liveTVCards[index] = liveTVCard
        });
        return liveTVCards
      }
    }
    return null
  }


}