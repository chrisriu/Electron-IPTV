import { Injectable } from '@angular/core'
import { DatePipe } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UtilService {
  public TStoDate(timestamps: number) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(timestamps, 'EEEE, MMMM d');
  }
}