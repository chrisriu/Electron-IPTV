import { Injectable, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movies';
import { LiveTV } from '../models/livetvs';
import { Series } from '../models/series';

@Injectable()
export class ShareService {
    @Output() sideBarPosX: EventEmitter<any> = new EventEmitter();
    public selectedUsername: any;
    public selectedUserpass: any;
    public categories: any;
    public movies: any;
    public tvchannels: any;
    public series: any;
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