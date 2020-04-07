import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieCard, LiveTVCard, SerieCard, RadioCard, LiveTV, Movie, Serie } from '../../models';
import { ShareService, TestService, TMDbAPIService, UtilService, XtreamCodeAPIService } from '../../services';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchForm: FormGroup;

  last_videos: Movie[]

  movieCards: MovieCard[];
  liveTVCards: LiveTVCard[];
  serieCards: SerieCard[];
  radioCards: RadioCard[];

  movie_title = "Latest Added Movies";
  tvchannel_title = "Favorite TV Channels";
  series_title: "Latest Added TV Series";
  radio_title: "Latest Added Radio";

  constructor(
    private formBuilder: FormBuilder,
    private testService: TestService,
    private shareService: ShareService,
    private xcService: XtreamCodeAPIService,
  ) {
    // this.last_videos = this.shareService.getLastMovies(this.testService.movies, 10)
    // this.movieCards = this.shareService.extractCards(this.last_videos)
    
    this.xcService.sendVodStreamRequest("SuperDev", "SuperDev").subscribe(data=>{
      this.last_videos = this.shareService.getLastMovies(data, 10)
      this.movieCards = this.shareService.extractCards(this.last_videos)
    })

    
    
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({});
  }
}
