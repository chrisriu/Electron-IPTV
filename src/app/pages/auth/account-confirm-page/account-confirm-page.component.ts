import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService, UserService, XtreamCodeAPIService } from '../../../services';
@Component({
  selector: 'app-account-confirm-page',
  templateUrl: './account-confirm-page.component.html',
  styleUrls: ['./account-confirm-page.component.css']
})
export class AccountConfirmPageComponent implements OnInit {
  username: string
  currentUser: any
  currentUserObj: Object = {}

  constructor(private router: Router, private shareService: ShareService,  private userService: UserService, private xcService: XtreamCodeAPIService) { }
  ngOnInit(): void {
    this.currentUser = localStorage.getItem("currentUser")
    this.currentUserObj = JSON.parse(this.currentUser)

    // Present username from Current User Object data...
    this.username = this.currentUserObj['username']
  }

  mainPage() {
    // Store confirmed account info to currentUser of UserService...
    const promise = new Promise((resolve, reject) => {
      let user_info;
      let server_info;
      this.xcService.sendLoginRequest(this.currentUserObj['username'], this.currentUserObj['password']).subscribe(data => {
        user_info = data['user_info']
        server_info = data['server_info']
      })
      setTimeout(() => {
        var success = false
        if(user_info && server_info){
          this.shareService.currentUser = user_info
          this.shareService.currentServer = server_info
          success = true
        }
      }, 1250)
    })
    promise.then((value) => {
      if (value) {
        this.router.navigate(['/account-info-loading']);
      } else {
        this.router.navigate(['/login-failed'], { queryParams: { case: "login-failed" } })
      }
    })
  }
}
