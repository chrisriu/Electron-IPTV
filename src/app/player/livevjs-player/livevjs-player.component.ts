import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
@Component({
  selector: 'app-livevjs-player',
  templateUrl: './livevjs-player.component.html',
  styleUrls: ['./livevjs-player.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LivevjsPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  live_player: videojs.Player;
  constructor(private elementRef: ElementRef,) { }

  ngOnInit(): void {
    this.live_player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
    this.live_player.width(960);
    this.live_player.height(540);
  }
  ngOnDestroy(): void{
    // destroy player
    if (this.live_player) {
      this.live_player.dispose();
    }
  }
}
