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

        if(this.shareService.categories == null || undefined ){
            this.shareService.categories = this.categories
        }
        
    }

    mainPage() {
        this.router.navigate(['/main/home']);
    }
}
