import { Injectable, Output, EventEmitter } from '@angular/core';
import { LiveTV, Movie, Serie } from '../models'
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

  public closeApp(){
    console.log("this is close")
    this.ipc.send("closeApp")
  }

}