import { Component, OnInit, Input } from '@angular/core';
import { XtreamCodeAPIService } from '../../../services/xtreamcode-api.service';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../../services/share.service';
import jQuery from 'jquery';

declare var $: any;
@Component({
    selector: 'app-account-info-loading-page',
    templateUrl: './account-info-loading-page.component.html',
    styleUrls: ['./account-info-loading-page.component.css']
})
export class AccountInfoLoadingPageComponent implements OnInit {
    @Input() progress_value: number = 0
    username: string = null
    password: string = null
    categories: Object = {}
    totalData: Object = {}
    constructor(private xtreamcodesAPIService: XtreamCodeAPIService,
        private sharedService: ShareService,
        private http: HttpClient) { }

    ngOnInit(): void {
        this.username = this.sharedService.selectedUsername
        this.password = this.sharedService.selectedUserpass
        const promise_vod_data = new Promise((resolve, reject) => {
            this.http.get('http://hd.qicktech.com:2095/player_api.php?username=SuperDev&password=SuperDev&action=get_vod_streams')
                .subscribe(data => {
                    this.totalData["vod_data"] = data
                })
            this.http.get('http://hd.qicktech.com:2095/player_api.php?username=SuperDev&password=SuperDev&action=get_live_streams')
                .subscribe(data => {
                    this.totalData["live_data"] = data
                })
            this.http.get('http://hd.qicktech.com:2095/player_api.php?username=SuperDev&password=SuperDev&action=get_series')
                .subscribe(data => {
                    this.totalData["series"] = data
                })
            this.http.get('http://hd.qicktech.com:2095/player_api.php?username=SuperDev&password=SuperDev&action=get_live_categories')
                .subscribe(data => {
                    this.totalData["live_categories"] = data
                })
            this.http.get('http://hd.qicktech.com:2095/player_api.php?username=SuperDev&password=SuperDev&action=get_vod_categories')
                .subscribe(data => {
                    this.totalData["vod_categories"] = data
                })
            this.http.get('http://hd.qicktech.com:2095/player_api.php?username=SuperDev&password=SuperDev&action=get_series_categories')
                .subscribe(data => {
                    this.totalData["series_categories"] = data
                })
            setTimeout(() => {
                resolve(this.totalData)
            }, 7000);
        })

        promise_vod_data.then(values => {
            console.log("total data", values)
        });

        (function ($) {
            $(document).ready(function () {
                console.log("This is the function")
                var size = 0;
                var interval = setInterval(function () {
                    if (size > 91){
                        size = 100
                    }else {
                        size += Math.random() * 9
                    }
                    
                    $('.inner_bar').css('width', size + '%')
                    if (size >= 100) {
                        clearInterval(interval)
                    }
                }, 700)
            })
        })(jQuery)
    }
}
