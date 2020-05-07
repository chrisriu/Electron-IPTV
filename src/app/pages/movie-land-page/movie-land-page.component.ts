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

    categories: Object = {};

    lastMovieCards: MovieCard[];



    constructor(private formBuilder: FormBuilder, private shareService: ShareService, private testService: TestService) {
      this.lastMovieCards = this.shareService.lastMovieCards
    }

    ngOnInit(): void {
      this.searchForm = this.formBuilder.group({});
      this.categories = this.shareService.categories["vod_categories"];
    }


}
