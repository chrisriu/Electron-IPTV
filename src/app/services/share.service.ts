import { Injectable, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movies';

@Injectable()
export class ShareService {
    @Output() sideBarPosX: EventEmitter<any> = new EventEmitter();
    public categories: any;
    public lastAddedMovies: Movie[]
    public setSlideCardTitlePosX(posx){
        if(posx == 82){
            this.sideBarPosX.emit(82)
        }else {
            this.sideBarPosX.emit(280)
        }
    }

    public getEmittedPosX(){
        return this.sideBarPosX
    }
}