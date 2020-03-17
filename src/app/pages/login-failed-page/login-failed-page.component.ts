import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-login-failed-page',
    templateUrl: './login-failed-page.component.html',
    styleUrls: ['./login-failed-page.component.css']
})
export class LoginFailedPageComponent implements OnInit {
    case: string = null;
    pstring: string = null;
    constructor(private router: Router, private activedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.case = this.activedRoute.snapshot.queryParamMap.get('case');
        if (this.case == 'invalid_credit') {
            this.pstring = "INCORRECT USERNAME OR PASSWORD";
        } else if (this.case == 'expired') {
            this.pstring = "YOUR ACCOUNT HAS EXPIRED. PLEASE REVIEW NOW.";
        } else if (this.case == 'device_limited') {
            this.pstring = "NOT ALLOWED, MAXIUM CONNECTIONS PERMITTED ACHIVED.";
        } else if (this.case == 'trial_limited') {
            this.pstring = "YOUR TRIAL HAS FINISHED. PLEASE UPGRADE OR ORDER NEW SERVICE";
        } else if (this.case == 'disabled_account') {
            this.pstring = "YOUR ACCOUNT HAS BEEN SUSPENDED. PLEASE CONTACT YOUR SERVICE PROVIDER";
        }

    }
    go_login() {
        this.router.navigate(['/login']);
    }

}
