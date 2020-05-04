import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Category, Movie, MovieCard } from '../../models';
import {ShareService, TestService} from '../../services';

@Component({
    selector: 'app-movie-land-page',
    templateUrl: './movie-land-page.component.html',
    styleUrls: ['./movie-land-page.component.css']
})
export class MovieLandPageComponent implements OnInit {
    searchForm: FormGroup;
    movie_title = "Latest Added Movies";

    last_movies: Movie[]
    movieCards: MovieCard[];

    categories: Object = {};

    constructor(private formBuilder: FormBuilder, private shareService: ShareService, private testService: TestService) {
      this.last_movies = this.shareService.getLastMovies(this.testService.movies, 10)
      this.movieCards = this.shareService.extractMovieCards(this.last_movies)
    }

    ngOnInit(): void {
      this.searchForm = this.formBuilder.group({});
      this.categories = this.shareService.categories["vod_categories"];
    }


}
