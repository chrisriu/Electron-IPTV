import { Injectable, Output, EventEmitter } from '@angular/core';
import { LiveTV, Movie, Serie } from '../models' 
@Injectable()
export class ShareService {
  public currentUser: any;
  public currentServer: any;
  public categories: Object = {}
  public livetvStreams: LiveTV[] 
  public vodStreams: Movie[]
  public serieStreams: Serie[]

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

}