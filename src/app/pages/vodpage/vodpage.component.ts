import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import {MovieCard, MovieInfo, MovieCast } from '../../models';
import {ShareService, TMDbAPIService, UtilService} from '../../services';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import jQuery from 'jquery';
declare var $: any;

@Component({
  selector: 'app-vodpage',
  templateUrl: './vodpage.component.html',
  styleUrls: ['./vodpage.component.css']
})
export class VODPageComponent implements OnInit {
  selected_movie_num: number;
  movieCard: MovieCard;
  movieInfo: MovieInfo;
  movieCast: MovieCast;

  playIcon = faPlay;
  starIcon = faStar;
  videoIcon = faVideo;

  casts: any = [];
  swatches: any;

  gradientBackImg: any;

  darkVibrantColor: any;
  lightVibrantColor: any;

  constructor(private activeRouter: ActivatedRoute, private shareService: ShareService, private utilService: UtilService, private router:Router) { }

  async ngOnInit() {
    this.selected_movie_num = this.activeRouter.snapshot.params.movie_id
    console.log("Selected Movie Number", this.selected_movie_num)

    const totalMovieCards = this.shareService.movieCards;

    for(var i=0; i<totalMovieCards.length; i++){
      if(totalMovieCards[i].num == this.selected_movie_num) {
        this.movieCard = totalMovieCards[i];
        break;
      }
    }

    const totalMovieInfos = this.shareService.movieInfos;
    for(var j=0; j<totalMovieInfos.length; j++){
      if(totalMovieInfos[j].tmdbID == this.movieCard.tmdbID){
        this.movieInfo = totalMovieInfos[j];
        break;
      }
    }

    const totalMovieCasts = this.shareService.movieCasts;
    for(var k=0; k<totalMovieCasts.length; k++){
      if(totalMovieCasts[k].tmdbID == this.movieCard.tmdbID){
        this.movieCast = totalMovieCasts[k];
        break;
      }
    }

    // Gradient Bg Image

    // Source of the image is movieCard.cardImg

    var image = "https://image.tmdb.org/t/p/original/"+this.movieCard.cardImg;

    this.swatches = await this.getVibrant(image)
    console.log(this.swatches)

    this.darkVibrantColor = this.utilService.convertRGBtoHEX(Math.round(this.swatches["DarkMuted"]._rgb[0]),Math.round(this.swatches["DarkMuted"]._rgb[1]),Math.round(this.swatches["DarkMuted"]._rgb[2]))
    this.lightVibrantColor = this.utilService.convertRGBtoHEX(Math.round(this.swatches["LightMuted"]._rgb[0]),Math.round(this.swatches["LightMuted"]._rgb[1]),Math.round(this.swatches["LightMuted"]._rgb[2]))


    // Cut 6 of casts from movieCasts
    for(var i = 0; i < 6; i++){
      this.casts.push(this.movieCast.casts[i])
    }
    console.log(this.casts)


    var self = this;
    (function ($) {
      $(document).ready(
        function () {
          console.log("Self Vibrant Color", self.lightVibrantColor)
          console.log("This Vibrant Color", this.lightVibrantColor)
          console.log("linear-gradient(to right top,"
                      +self.lightVibrantColor +", "
                      +self.lightVibrantColor +"15%,"
                      +self.darkVibrantColor  +"70%,"
                      +self.darkVibrantColor +"35%)")
          $(".gradient_bg").css({
            background: "linear-gradient(to right top,"+ self.lightVibrantColor +", "+self.lightVibrantColor+" 15%,"+ self.darkVibrantColor+ " 70%,"+ self.darkVibrantColor +" 35%)",
            opacity: 0.6
          })
        }
      );
    })(jQuery);

  }

  getVibrant(imageURL){
    const vibrant = require('node-vibrant')
    return new Promise((resolve,reject) => {
      vibrant.from(imageURL).getSwatches((err, palette) => {
        resolve(palette)
      })
    })
  }

  playMovie(){
    console.log("Play Movie");
    console.log(this.movieCard.num)
    this.router.navigate(['/play'], { queryParams: { movie_id: this.movieCard.num } })
  }
}
