import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieCard, LiveTVCard, SerieCard, RadioCard, LiveTV, Movie, Serie, Radio } from '../../models';
import { ShareService, TestService, TMDbAPIService, UtilService, XtreamCodeAPIService } from '../../services';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchForm: FormGroup;

  last_movies: Movie[]
  movieCards: MovieCard[];

  fav_livetvs: LiveTV[]
  liveTVCards: LiveTVCard[];

  last_series: Serie[];
  serieCards: SerieCard[];

  fav_radios: Radio[];
  radioCards: RadioCard[];

  movie_title = "Latest Added Movies";
  livetv_title = "Favorite TV Channels";
  series_title: "Latest Added TV Series";
  radio_title: "Latest Added Radio";

  constructor(
    private formBuilder: FormBuilder,
    private testService: TestService,
    private shareService: ShareService,
    private xcService: XtreamCodeAPIService,
  ) {
    this.last_movies = this.shareService.getLastMovies(this.testService.movies, 10)
    this.movieCards = this.shareService.extractMovieCards(this.last_movies)

    this.fav_livetvs = this.shareService.getFavLiveTVs(this.testService.livetvs, 10)
    this.liveTVCards = this.shareService.extractLiveTVCards(this.fav_livetvs)

    this.last_series = this.shareService.getLastSeries(this.testService.series, 10)
    console.log("serie", this.last_series)
    this.serieCards = this.shareService.extractSerieCards(this.last_series)
    console.log("seriecards", this.serieCards)

  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({});
  }
}
