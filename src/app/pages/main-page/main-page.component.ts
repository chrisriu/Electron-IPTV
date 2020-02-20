import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { User } from '../../models';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    currentUser: User;

    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
    }

    ngOnInit(): void {
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
