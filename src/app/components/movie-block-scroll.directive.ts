import { Directive, ElementRef, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';
import { ShareService } from '../services';
@Directive({
  selector: '[appMovieBlockScroll]'
})
export class MovieBlockScrollDirective {

  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();

  constructor(private shareService: ShareService) { }

  @HostListener('click') click(){
  	console.log("Movie Cards Block clicked")
  }

  @HostListener('mousewheel', ['$event']) mousewheel(){
  	this.mouseWheelFunc(event)
  }

  mouseWheelFunc(event:any){
  	var e = window.event ;
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if(delta > 0) {
        this.mouseWheelUp.emit(event)
    } else if(delta < 0) {
        this.mouseWheelDown.emit(e);
    }
  }
}
