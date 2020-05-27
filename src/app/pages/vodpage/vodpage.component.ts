import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {MovieCard, MovieInfo, MovieCast } from '../../models';
import {ShareService, TMDbAPIService} from '../../services';
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
  constructor(private activeRouter: ActivatedRoute, private shareService: ShareService, private tmdbAPIService: TMDbAPIService) { }

  async ngOnInit() {
    this.selected_movie_num = this.activeRouter.snapshot.params.movie_id
    console.log("Selected Movie Number", this.selected_movie_num)

    const totalMovieCards = this.shareService.movieCards;

    totalMovieCards.forEach((movieCard) => {
      if(movieCard.num == this.selected_movie_num){
        this.movieCard = movieCard
      }
    })

    var tempMovieDetail = await this.tmdbAPIService.getMovieDetailById(this.movieCard.tmdbID.toString())
    var tempMovieCasts = await this.tmdbAPIService.getMovieCastsById(this.movieCard.tmdbID.toString())


    console.log("Movie Detail", tempMovieDetail);
    console.log("Movie Casts =>", tempMovieCasts);
  }
}
