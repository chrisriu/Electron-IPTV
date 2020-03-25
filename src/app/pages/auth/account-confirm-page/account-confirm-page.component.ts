import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../services/share.service'
import { XtreamCodeAPIService } from 'src/app/services';
import { HttpEventType } from '@angular/common/http';

@Component({
    selector: 'app-account-confirm-page',
    templateUrl: './account-confirm-page.component.html',
    styleUrls: ['./account-confirm-page.component.css']
})
export class AccountConfirmPageComponent implements OnInit {
    username: string = null
    password: string = null
    currentUser: any
    currentUserObj: Object = {}
    categories: Object = {}
    movies: Object = null;
    tvchannels: Object = null
    series: Object = null
    constructor(private router: Router, private xtreamcodesAPIService: XtreamCodeAPIService, private shareService: ShareService) { }
    ngOnInit(): void {
        this.currentUser = localStorage.getItem("currentUser")
        this.currentUserObj = JSON.parse(this.currentUser)
        this.username = this.currentUserObj["username"]
        this.password = this.currentUserObj["password"]
        this.xtreamcodesAPIService.getCategories(this.username, this.password, "livetv").subscribe((event) => {
            if(event.type == HttpEventType.Response){
                this.categories["livetv"] = event.body
            }
        })
        this.xtreamcodesAPIService.getCategories(this.username, this.password, "vod").subscribe((event)=>{
            if(event.type == HttpEventType.Response){
                this.categories["vod"] = event.body
            }
        })

        this.xtreamcodesAPIService.getCategories(this.username, this.password, "series").subscribe((event)=>{
            if(event.type == HttpEventType.Response){
                this.categories["series"] = event.body
            }
        })

        this.xtreamcodesAPIService.getContextbyType(this.username, this.password, "get_live_streams").subscribe((event)=>{
            if(event.type == HttpEventType.Response){
                this.tvchannels = event.body
            }
        })

        this.xtreamcodesAPIService.getContextbyType(this.username, this.password, "get_vod_streams").subscribe((event)=>{
            if(event.type == HttpEventType.Response){
                this.movies = event.body
                console.log("body",event.body)
                console.log("movie", this.movies)
            }
        })

        this.xtreamcodesAPIService.getContextbyType(this.username, this.password, "get_series").subscribe((event)=>{
            if(event.type == HttpEventType.Response){
                this.series = event.body
            }
        })
        
        if(this.shareService.categories == null || undefined ){
            this.shareService.categories = this.categories
        }

        if(this.shareService.movies == null || undefined){
            this.shareService.movies = this.movies;
            
        }

        if(this.shareService.tvchannels == null || undefined){
            this.shareService.tvchannels = this.tvchannels
        }

        if(this.shareService.series == null || undefined){
            this.shareService.series = this.series
        }
    }

    mainPage() {
        this.router.navigate(['/main/home']);
    }
}
