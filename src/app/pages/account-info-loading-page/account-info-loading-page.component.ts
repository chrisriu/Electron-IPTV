import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XtreamCodeAPIService } from '../../services/xtreamcode-api.service';
import { HttpEventType } from '@angular/common/http';
import { ShareService } from '../../services/share.service';
@Component({
    selector: 'app-account-info-loading-page',
    templateUrl: './account-info-loading-page.component.html',
    styleUrls: ['./account-info-loading-page.component.css']
})
export class AccountInfoLoadingPageComponent implements OnInit {

    @Input() progress_value: number = 0

    username: string = null
    passwword: string = null
    progress: number = 0
    totaltime: number = 0

    categories: Object = {}

    constructor(private xtreamcodesAPIService: XtreamCodeAPIService, private sharedService: ShareService, private activedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.username = this.activedRoute.snapshot.queryParamMap.get('username')
        this.passwword = this.activedRoute.snapshot.queryParamMap.get('password')
        this.downloadCategories(this.username, this.passwword)

    }

    downloadCategories(username: string, password: string) {
        this.xtreamcodesAPIService.getCategories(username, password, "livetv").subscribe(
            event => {
                if (event.type == HttpEventType.DownloadProgress) {
                    if (event.total == null) {
                        this.totaltime += event.loaded
                        console.log(this.totaltime);
                        for (var i = 1; i <= 33; i++) {
                            setTimeout(() => {
                                console.log("abc i", i);
                                this.progress_value += 1
                                console.log("abc progress", this.progress_value);

                            }, 100);
                        }

                    } else {
                        this.progress_value += Math.round(event.loaded / event.total * 100)
                    }
                } else if (event.type == HttpEventType.Response) {
                    this.categories['live'] = event.body
                }
            }
        )

        this.xtreamcodesAPIService.getCategories(username, password, "vod").subscribe(
            event => {
                if (event.type == HttpEventType.DownloadProgress) {
                    if (event.total == null) {
                        this.totaltime += event.loaded
                        for (var i = 1; i <= 33; i++) {
                            setTimeout(() => {
                                console.log("abc i", i);
                                this.progress_value += 1
                                console.log("abc progress", this.progress_value);

                            }, 100);
                        }
                    } else {
                        this.progress_value += Math.round(event.loaded / event.total * 100)
                    }
                } else if (event.type == HttpEventType.Response) {
                    this.categories['vod'] = event.body
                }
            }
        )

        this.xtreamcodesAPIService.getCategories(username, password, "series").subscribe(
            event => {
                if (event.type == HttpEventType.DownloadProgress) {
                    if (event.total == null) {
                        this.totaltime += event.loaded
                        for (var i = 1; i <= 34; i++) {
                            setTimeout(() => {
                                console.log("abc i", i);
                                this.progress_value += 1
                                console.log("abc progress", this.progress_value);

                            }, 100);
                        }
                    } else {
                        this.progress_value += Math.round(event.loaded / event.total * 100)
                    }
                } else if (event.type == HttpEventType.Response) {
                    this.categories['series'] = event.body
                }
            }
        )
        let interval = setInterval(() => {
            console.log(this.categories)
            this.sharedService.categories = this.categories
            this.router.navigate(['/account-confirm-page'], { queryParams: { categories: this.categories } })
        }, 2000);

        setInterval(() => {
            clearInterval(interval)
        }, 2100)

    }



}
