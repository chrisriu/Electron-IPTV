import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jQuery from 'jquery';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { XtreamCodeAPIService } from 'src/app/services';
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
    selectedUser: User = null
    constructor(
        private http: HttpClient,
        private router: Router,
        private userService: UserService,
        private xcService: XtreamCodeAPIService
    ) { }
    ngOnInit(): void {
        // Get Selected User info...
        this.selectedUser = this.userService.currentUser;
        // Create this variable for using typescript methods in jQuery...
        var self = this

        // Fetching Data from XC API...
        const promise_data = new Promise((resolve, reject) => {

            let actions = ['get_live_categories', 'get_vod_categories', 'get_series_categories', 'get_live_streams', 'get_vod_streams', 'get_series']
            let params = ['live_category', 'vod_category', 'serie_category', 'live_stream', 'vod_stream', 'serie_stream']
            actions.forEach((action, index) => {
                this.xcService.sendRequest(this.selectedUser.username, this.selectedUser.password, action).subscribe(data =>{
                    this.totalData[params[index]] = data                   
                })
            })

            setTimeout(() => {
                resolve(this.totalData)
            }, 7000);
        })

        promise_data.then(values => {
            console.log("total data", values)
        });

        (function ($) {
            $(document).ready(function () {
                console.log("This is the function")
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
