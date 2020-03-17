import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../services/share.service'

@Component({
    selector: 'app-account-confirm-page',
    templateUrl: './account-confirm-page.component.html',
    styleUrls: ['./account-confirm-page.component.css']
})
export class AccountConfirmPageComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit(): void {
    }

    mainPage() {
        this.router.navigate(['/main/home']);
    }

}
