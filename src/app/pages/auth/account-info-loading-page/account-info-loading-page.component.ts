import jQuery from 'jquery';
import { ShareService, XtreamCodeAPIService } from 'src/app/services';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LiveTV, Movie, Serie, User } from '../../../models';

declare var $: any;
@Component({
  selector: 'app-account-info-loading-page',
  templateUrl: './account-info-loading-page.component.html',
  styleUrls: ['./account-info-loading-page.component.css']
})
export class AccountInfoLoadingPageComponent implements OnInit {
  @Input() progress_value: number = 0
  selectedUser: User = null
  categoryData: Object = {}
  livetvStream: LiveTV[]
  vodStream: Movie[]
  serieStream: Serie[]

  constructor(
    private router: Router,
    private xcService: XtreamCodeAPIService,
    private shareService: ShareService
  ) { }
  ngOnInit(): void {

    // Get Selected User info...
    this.selectedUser = this.shareService.currentUser;

    // Create this variable for using typescript methods in jQuery...
    var self = this

    // Fetching Data from XC API...
    const promise_data = new Promise((resolve) => {
      let categories = ['get_live_categories', 'get_vod_categories', 'get_series_categories']
      let category_params = ['live_categories', 'vod_categories', 'serie_categories']
      categories.forEach((category, index) => {
        this.xcService.sendCategoryRequest(this.selectedUser.username, this.selectedUser.password, category).subscribe((data) => {
          this.categoryData[category_params[index]] = data
        })
      })

      this.xcService.sendLiveTVStreamRequest(this.selectedUser.username, this.selectedUser.password).subscribe(data=>{
        this.livetvStream = data
      })

      this.xcService.sendVodStreamRequest(this.selectedUser.username, this.selectedUser.password).subscribe(data=>{
        this.vodStream = data
      })

      this.xcService.sendSerieStreamRequest(this.selectedUser.username, this.selectedUser.password).subscribe(data=>{
        this.serieStream = data
      })

      setTimeout(() => {
        var success = false
        if (this.categoryData&&this.livetvStream&&this.vodStream&&this.serieStream){
          success = true
          this.shareService.categories = this.categoryData
          this.shareService.livetvs = this.livetvStream
          this.shareService.movies = this.vodStream
          this.shareService.series = this.serieStream
          this.shareService.lastMovies = this.shareService.getLastMovies(this.shareService.movies, 10)
          this.shareService.lastSeries = this.shareService.getLastSeries(this.shareService.series, 10)
        }
        resolve(success)
      }, 7000);
    })

    promise_data.then(values => {
      console.log(values)
    });

    (function ($) {
      $(document).ready(function () {
        var size = 0;
        var interval = setInterval(function () {
          if (size > 91) {
            size = 100
          } else {
            size += Math.random() * 9
          }
          $('.inner_bar').css('width', size + '%')
          if (size >= 100) {
            self.directToMain()
            clearInterval(interval)
          }
        }, 700)
      })
    })(jQuery)
  }
  directToMain() {
    this.router.navigate(['/main/home'])
  }
}
