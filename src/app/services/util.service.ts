import { Injectable } from '@angular/core'
import { DatePipe } from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {Movie, Serie, LiveTV, Radio, MovieCard, SerieCard, LiveTVCard, RadioCard} from '../models';
@Injectable({ providedIn: 'root' })
export class UtilService {
  constructor(private domSanitizer: DomSanitizer){

  }
  /** Convert timestamps to date */
  public TStoDate(timestamps: number) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(timestamps, 'EEEE, MMMM d');
  }

  /** Convert string to query String for title */
  public convertTitleToQuery(title: string) {
    title.replace(" ", "%20")
    title.replace(":", "%3A")
    return title
  }

  /** Convert RGB to Hex */
  public convertRGBtoHEX(r: number, g: number, b: number)
  {
    let r_hex;
    let g_hex;
    let b_hex;

    if(r>16){
      r_hex = r.toString(16);
    }else {
      r_hex = "0"+r.toString(16);
    }

    if(g>16){
      g_hex = g.toString(16);
    }else {
      g_hex = "0"+g.toString(16);
    }

    if(b>16){
      b_hex = b.toString(16);
    }else {
      b_hex = "0"+b.toString(16);
    }
    return "#"+r_hex+g_hex+b_hex;
  }


  /** Transform Style */

  transform(style){
    return this.domSanitizer.bypassSecurityTrustStyle(style)
  }
}
