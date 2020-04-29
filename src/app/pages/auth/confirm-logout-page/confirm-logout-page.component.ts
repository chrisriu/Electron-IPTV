import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'app-confirm-logout-page',
  templateUrl: './confirm-logout-page.component.html',
  styleUrls: ['./confirm-logout-page.component.css']
})
export class ConfirmLogoutPageComponent implements OnInit {

  constructor( private router: Router, private shareService: ShareService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('currentUser')
    this.router.navigate(['/logout'])
  }

  exit(){
    this.shareService.closeApp()
  }
}
