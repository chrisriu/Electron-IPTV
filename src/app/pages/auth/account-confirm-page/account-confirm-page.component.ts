import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../services/share.service'

@Component({
    selector: 'app-account-confirm-page',
    templateUrl: './account-confirm-page.component.html',
    styleUrls: ['./account-confirm-page.component.css']
})
export class AccountConfirmPageComponent implements OnInit {
    currentUser: any
    categories: any
    constructor(private router: Router) { }
    ngOnInit(): void {
        this.currentUser = localStorage.getItem("currentUser")
        this.makeShareData(this.currentUser["username"], this.currentUser["password"])
        console.log("currentUser", this.currentUser)
    }

    makeShareData(username: string, password:string){
                
    }

    mainPage() {
        
        this.router.navigate(['/main/home']);
    }

}
