import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    currentUser: User;


    submitted = false;
    returnUrl: string;
    error = '';
    constructor(
        private router: Router,
        private authService: AuthService,
    ) {
        this.authService.currentUser.subscribe(x => this.currentUser = x)
    }

    ngOnInit(): void {
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
