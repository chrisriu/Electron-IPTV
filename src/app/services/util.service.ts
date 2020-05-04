import { Injectable } from '@angular/core'
import { DatePipe } from '@angular/common';
import {Movie, Serie, LiveTV, Radio, MovieCard, SerieCard, LiveTVCard, RadioCard} from '../models';
@Injectable({ providedIn: 'root' })
export class UtilService {

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

}
