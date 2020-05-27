import { ShareService, XtreamCodeAPIService } from "src/app/services";
import jQuery from "jquery";

import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LiveTV, Movie, Serie, Radio, User } from "../../../models";

declare var $: any;
@Component({
  selector: "app-account-info-loading-page",
  templateUrl: "./account-info-loading-page.component.html",
  styleUrls: ["./account-info-loading-page.component.css"],
})
export class AccountInfoLoadingPageComponent implements OnInit {
  progress_value: number = 0;
  selectedUser: User = null;
  categoryData: Object = {};
  livetvStream: LiveTV[] = [];
  vodStream: Movie[] = [];
  serieStream: Serie[] = [];
  radioStream: Radio[] = [];
  public size;
  constructor(
    private router: Router,
    private xcService: XtreamCodeAPIService,
    private shareService: ShareService
  ) {

  }
  async ngOnInit(){
    this.size = 0;
    let interval = setInterval(()=>{
      if(this.size<87){
        this.size += Math.random()*20
      } else {
        this.size = 99.9
      }

    }, 400)

    const currentUser = this.shareService.currentUser;
    const currentUsername = currentUser["username"];
    const currentPassword = currentUser["password"];

    let categoriesData = await this.getCategories(currentUsername, currentPassword)
    this.shareService.categories = categoriesData


    const streams = await this.getStreams(currentUsername, currentPassword)
    this.shareService.livetvs = streams[0]["livetv"]
    this.shareService.radios = streams[0]["radio"]
    this.shareService.movies = streams[1]
    this.shareService.series = streams[2]
    this.shareService.lastMovies = this.shareService.getLastVods(streams[1], 10)
    this.shareService.lastSeries = this.shareService.getLastSeries(streams[2], 10)

    /* Get the favorite LiveTVs and Radios*/


    /* Extract the cards of Videos */
    this.shareService.movieCards = await this.shareService.extractMovieCards(this.shareService.movies)
    this.shareService.lastMovieCards = await this.shareService.extractMovieCards(this.shareService.lastMovies)

    this.shareService.serieCards = this.shareService.extractSerieCards(this.shareService.series)
    this.shareService.lastSerieCards = this.shareService.extractSerieCards(this.shareService.lastSeries)

    this.shareService.movieInfos = await this.shareService. extractMovieInfos(this.shareService.movieCards)
    this.shareService.movieCasts = await this.shareService.extractMovieCasts(this.shareService.movieCards)

    this.size = 100;
    clearInterval(interval)

    this.router.navigate(["/main/home"]);

  }

  async getCategories(username, password){
    let categories_type = [ "get_live_categories", "get_vod_categories", "get_series_categories" ];
    let categories = []
    categories_type.map((category_type, index) => {
      categories.push(this.xcService.sendCategoryRequestUsingPromise(username, password, category_type))
    } )
    await Promise.all(categories)
    categories = categories.map(m=>m.__zone_symbol__value)
    return categories
  }

  async getLiveStreams(username, password){
    return await this.xcService.sendLiveTVStreamRequestUsingPromise(username, password)
  }

  async getVodStreams(username, password){
    return await this.xcService.sendVodStreamRequestUsingPromise(username, password)
  }

  async getSerieStreams(username, password){
    return await this.xcService.sendSerieStreamRequestUsingPromise(username, password)
  }

  async getStreams(username, password){
    let streams = []

    let stream_promises = [];
    stream_promises.push(this.xcService.sendLiveTVStreamRequestUsingPromise(username, password));
    stream_promises.push(this.xcService.sendVodStreamRequestUsingPromise(username, password));
    stream_promises.push(this.xcService.sendSerieStreamRequestUsingPromise(username, password));

    await Promise.all(stream_promises)
    streams = stream_promises.map(m=>m.__zone_symbol__value)
    return streams
  }


}
