import { AuthService, ShareService, XtreamCodeAPIService } from 'src/app/services';

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router,
    private authService: AuthService,
    private xcAPIService: XtreamCodeAPIService,
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.logout();
  }
  get form() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // Send Login Request...
    this.xcAPIService.sendLoginRequest(this.form.username.value, this.form.password.value).subscribe((data) => {

      // User Data...
      const userInfo = data['user_info']

      //Server Data...
      const serverInfo = data['server_info']

      const currentTSDate = new Date().getTime() / 1000
      if (currentTSDate > userInfo['exp_date']) {
        this.router.navigate(['/login-failed', { queryParams: { case: 'expired' } }])
      } else if (userInfo['active_cons'] >= userInfo['max_connections']) {
        this.router.navigate(['/login-failed'], { queryParams: { case: 'device_limited' } })
      } else if (userInfo['is_trial'] != 0) {
        this.router.navigate(['login-failed'], { queryParams: { case: 'trial_limited' } })
      } else if (userInfo['status'] != 'Active') {
        this.router.navigate(['login-failed'], { queryParams: { case: 'disabled_account' } })
      } else {

        this.shareService.currentUser = userInfo
        this.shareService.currentServer = serverInfo
        localStorage.setItem('currentUser', JSON.stringify(userInfo));
        this.router.navigate(['/account-info-loading']);

      }
    },(error) => {
      if(error instanceof HttpErrorResponse){
        this.router.navigate(['login-failed'], {queryParams: {case: 'wrong_credential_or_network_vpn'}})
      }
    })
  }
}
