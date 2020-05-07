import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
    LiveTV, LiveTVCard, Movie, MovieCard, Radio, RadioCard, Serie, SerieCard
} from '../../models';
import { ShareService, TestService } from '../../services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchForm: FormGroup;

  lastMovieCards: MovieCard[];
  favLiveTVCards: LiveTVCard[];
  lastSerieCards: SerieCard[];
  favRadioCards: RadioCard[];

  movie_title = "Latest Added Movies";
  livetv_title = "Favorite TV Channels";
  series_title: "Latest Added TV Series";
  radio_title: "Latest Added Radio";

  constructor(
    private formBuilder: FormBuilder,
    private shareService: ShareService,
  ) {

    this.lastMovieCards = this.shareService.lastMovieCards
    this.favLiveTVCards = this.shareService.favLiveTVCards
    this.lastSerieCards = this.shareService.lastSerieCards
    this.favRadioCards = this.shareService.favRadioCards


  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({});
  }
}
