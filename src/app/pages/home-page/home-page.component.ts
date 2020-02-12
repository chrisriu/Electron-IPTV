import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { User } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    currentUser: User;
    searchForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({});
        
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
