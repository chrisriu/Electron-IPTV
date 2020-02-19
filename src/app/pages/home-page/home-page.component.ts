import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { User } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Card } from '../../models/card';
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

    movieCards: Card[];

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x)

        this.movieCards = [
            {title: "The Black Man In San Francisco", imgPath:"assets/img/tmg-article_tall.jpg"},
            {title: "Dark Waters", imgPath:"assets/img/tmg-article_tall(3).jpg"},
            {title: "Ash is Purest White", imgPath:"assets/img/tmg-article_tall(10).jpg"},
            {title: "Parasite", imgPath:"assets/img/tmg-article_tall(11).jpg"},
            {title: "Peterloo", imgPath:"assets/img/tmg-article_tall(9).jpg"},
            {title: "Transit", imgPath:"assets/img/tmg-article_tall(4).jpg"},
            {title: "Ad Astra", imgPath:"assets/img/tmg-article_tall(5).jpg"},
            {title: "Little Woman", imgPath:"assets/img/tmg-article_tall(6).jpg"},
            {title: "The Nightingale", imgPath:"assets/img/tmg-article_tall(7).jpg"},
            {title: "Parabellum", imgPath:"assets/img/tmg-article_tall(8).jpg"}
        ];
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({});
        
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
