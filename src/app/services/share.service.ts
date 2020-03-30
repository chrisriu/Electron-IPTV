import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ShareService {
  @Output() sideBarPosX: EventEmitter<any> = new EventEmitter();
  public movies: any;
  public tvchannels: any;
  public series: any;
  public totalVideos: any;
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

  public getCategories(type?: string) {
    let categories: Object
    categories = {
      'livetv': this.totalVideos['live_category'],
      'vod': this.totalVideos['vod_category'],
      'serie': this.totalVideos['serie_category']
    }
    if (!type) {
      return categories
    } else {
      return categories[type]
    }
  }

  public getStream(type?: string) {
    let streams: Object
    streams = {
      'livetv': this.totalVideos['live_stream'],
      'vod': this.totalVideos['vod_stream'],
      'serie': this.totalVideos['serie_stream']
    }
    if (!type) {
      return streams
    } else {
      return streams[type]
    }
  }

  public getLastAddedLiveTV(videos?: Object){
    return Object.keys(videos).length
    
  }

}