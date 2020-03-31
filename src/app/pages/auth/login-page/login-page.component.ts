import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, ShareService, XtreamCodeAPIService } from 'src/app/services';
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
    private XCAPIService: XtreamCodeAPIService,
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
    this.XCAPIService.sendLoginRequest(this.form.username.value, this.form.password.value).subscribe(data => {
      const loginUser = data['user_info']
      const loginServer = data['server_info']
      const currentTSDate = new Date().getTime() / 1000
      if (currentTSDate > loginUser['exp_date']) {
        this.router.navigate(['/login-failed', { queryParams: { case: 'expired' } }])
      } else if (loginUser['active_cons'] >= loginUser['max_connections']) {
        this.router.navigate(['/login-failed'], { queryParams: { case: 'device_limited' } })
      } else if (loginUser['is_trial'] != 0) {
        this.router.navigate(['login-failed'], { queryParams: { case: 'trial_limited' } })
      } else if (loginUser['status'] != 'Active') {
        this.router.navigate(['login-failed'], { queryParams: { case: 'disabled_account' } })
      } else {
        this.shareService.currentUser = loginUser
        this.shareService.currentServer = loginServer
        this.router.navigate(['/account-info-loading']);
      }
    })
  }
}
