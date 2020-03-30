import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { XtreamCodeAPIService } from '../../../services/xtreamcode-api.service';
import { HttpEventType } from '@angular/common/http';
@Component({
    selector: 'app-account-confirm-page',
    templateUrl: './account-confirm-page.component.html',
    styleUrls: ['./account-confirm-page.component.css']
})
export class AccountConfirmPageComponent implements OnInit {
    username: string
    currentUser: any
    currentUserObj: Object = {}

    constructor(private router: Router, private userService: UserService, private xcService: XtreamCodeAPIService) { }
    ngOnInit(): void {
        this.currentUser = localStorage.getItem("currentUser")
        this.currentUserObj = JSON.parse(this.currentUser)
        
        // Present username from Current User Object data...
        this.username = this.currentUserObj['username']
    }

    mainPage() {
        // Store confirmed account info to currentUser of UserService...
        const promise = new Promise((resolve, reject) => {
            this.xcService.sendRequest(this.currentUserObj['username'], this.currentUserObj['password']).subscribe(event=>{
                if (event.type == HttpEventType.Response){
                    this.userService.currentUser = event.body['user_info']
                    console.log("User Service Data ", this.userService.currentUser)
                }
            })
            setTimeout(()=>{
                resolve(this.userService.currentUser)
            },1250)
        })
        promise.then((value)=>{
            if (value){
                this.router.navigate(['/account-info-loading']);    
            } else {
                this.router.navigate(['/login-failed'], { queryParams: { case: "login-failed" } })
            }
        })
        

        
    }
}
