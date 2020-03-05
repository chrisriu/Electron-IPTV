import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account-info-loading';
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // this.authenticationService.login(this.f.username.value, this.f.password.value);

        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(data => {
                console.log(data);
                // Convert Current date to milliseoncds...
                const current_milis = new Date().getTime();
                if (current_milis > data['exp_date'].concat('000')) {
                    this.router.navigate(['/login-failed'], { queryParams: { case: "expired" } });
                } else if (data['active_cons'] >= data['max_connections']) {
                    this.router.navigate(['/login-failed'], { queryParams: { case: "device_limited" } });
                } else if (data['is_trial'] != 0) {
                    this.router.navigate(['/login-failed'], { queryParams: { case: "trial_limited" } });
                } else if (data['status'] != 'Active') {
                    this.router.navigate(['/login-failed'], { queryParams: { case: "disabled_account" } });
                } else {
                    this.router.navigate(['/account-info-loading']);
                }

            },
                error => {
                    this.error = error;
                    this.loading = false;
                }
            )
    }
}
