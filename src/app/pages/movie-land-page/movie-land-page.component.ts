import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieCard, LiveTVCard, SerieCard } from '../../models';
@Component({
    selector: 'app-movie-land-page',
    templateUrl: './movie-land-page.component.html',
    styleUrls: ['./movie-land-page.component.css']
})
export class MovieLandPageComponent implements OnInit {
    searchForm: FormGroup;

    movieCards: MovieCard[];
    actionMovieCards: MovieCard[];
    epicMovieCards: MovieCard[];
    comedyMovieCards: MovieCard[];
    primeMovieCards: MovieCard[];

    movie_title: string;
    actionMovieCardsTitle: string;
    epicMovieCardsTitle: string;
    comedyMovieCardsTitle: string;
    primeMovieCardsTitle: string;



    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({});

        this.movie_title = "Latest Added Movies";
        this.actionMovieCardsTitle = "Action";
        this.epicMovieCardsTitle = "Epic/History";
        this.comedyMovieCardsTitle = "Comedy";
        this.primeMovieCardsTitle = "Prime";

        // this.movieCards = [
        //     { title: "The Black Man In San Francisco", imgPath: "assets/img/tmg-article_tall.jpg" },
        //     { title: "Dark Waters", imgPath: "assets/img/tmg-article_tall(3).jpg" },
        //     { title: "Ash is Purest White", imgPath: "assets/img/tmg-article_tall(10).jpg" },
        //     { title: "Parasite", imgPath: "assets/img/tmg-article_tall(11).jpg" },
        //     { title: "Peterloo", imgPath: "assets/img/tmg-article_tall(9).jpg" },
        //     { title: "Transit", imgPath: "assets/img/tmg-article_tall(4).jpg" },
        //     { title: "Ad Astra", imgPath: "assets/img/tmg-article_tall(5).jpg" },
        //     { title: "Little Woman", imgPath: "assets/img/tmg-article_tall(6).jpg" },
        //     { title: "The Nightingale", imgPath: "assets/img/tmg-article_tall(7).jpg" },
        //     { title: "Parabellum", imgPath: "assets/img/tmg-article_tall(8).jpg" }
        // ];

        // this.actionMovieCards = [
        //     { title: "The Black Man In San Francisco", imgPath: "assets/img/tmg-article_tall.jpg" },
        //     { title: "Dark Waters", imgPath: "assets/img/tmg-article_tall(3).jpg" },
        //     { title: "Ash is Purest White", imgPath: "assets/img/tmg-article_tall(10).jpg" },
        //     { title: "Parasite", imgPath: "assets/img/tmg-article_tall(11).jpg" },
        //     { title: "Peterloo", imgPath: "assets/img/tmg-article_tall(9).jpg" },
        //     { title: "Transit", imgPath: "assets/img/tmg-article_tall(4).jpg" },
        //     { title: "Ad Astra", imgPath: "assets/img/tmg-article_tall(5).jpg" },
        //     { title: "Little Woman", imgPath: "assets/img/tmg-article_tall(6).jpg" },
        //     { title: "The Nightingale", imgPath: "assets/img/tmg-article_tall(7).jpg" },
        //     { title: "Parabellum", imgPath: "assets/img/tmg-article_tall(8).jpg" }
        // ];

        // this.epicMovieCards = [
        //     { title: "The Black Man In San Francisco", imgPath: "assets/img/tmg-article_tall.jpg" },
        //     { title: "Dark Waters", imgPath: "assets/img/tmg-article_tall(3).jpg" },
        //     { title: "Ash is Purest White", imgPath: "assets/img/tmg-article_tall(10).jpg" },
        //     { title: "Parasite", imgPath: "assets/img/tmg-article_tall(11).jpg" },
        //     { title: "Peterloo", imgPath: "assets/img/tmg-article_tall(9).jpg" },
        //     { title: "Transit", imgPath: "assets/img/tmg-article_tall(4).jpg" },
        //     { title: "Ad Astra", imgPath: "assets/img/tmg-article_tall(5).jpg" },
        //     { title: "Little Woman", imgPath: "assets/img/tmg-article_tall(6).jpg" },
        //     { title: "The Nightingale", imgPath: "assets/img/tmg-article_tall(7).jpg" },
        //     { title: "Parabellum", imgPath: "assets/img/tmg-article_tall(8).jpg" }
        // ];

        // this.comedyMovieCards = [
        //     { title: "The Black Man In San Francisco", imgPath: "assets/img/tmg-article_tall.jpg" },
        //     { title: "Dark Waters", imgPath: "assets/img/tmg-article_tall(3).jpg" },
        //     { title: "Ash is Purest White", imgPath: "assets/img/tmg-article_tall(10).jpg" },
        //     { title: "Parasite", imgPath: "assets/img/tmg-article_tall(11).jpg" },
        //     { title: "Peterloo", imgPath: "assets/img/tmg-article_tall(9).jpg" },
        //     { title: "Transit", imgPath: "assets/img/tmg-article_tall(4).jpg" },
        //     { title: "Ad Astra", imgPath: "assets/img/tmg-article_tall(5).jpg" },
        //     { title: "Little Woman", imgPath: "assets/img/tmg-article_tall(6).jpg" },
        //     { title: "The Nightingale", imgPath: "assets/img/tmg-article_tall(7).jpg" },
        //     { title: "Parabellum", imgPath: "assets/img/tmg-article_tall(8).jpg" }
        // ];

        // this.primeMovieCards = [
        //     { title: "The Black Man In San Francisco", imgPath: "assets/img/tmg-article_tall.jpg" },
        //     { title: "Dark Waters", imgPath: "assets/img/tmg-article_tall(3).jpg" },
        //     { title: "Ash is Purest White", imgPath: "assets/img/tmg-article_tall(10).jpg" },
        //     { title: "Parasite", imgPath: "assets/img/tmg-article_tall(11).jpg" },
        //     { title: "Peterloo", imgPath: "assets/img/tmg-article_tall(9).jpg" },
        //     { title: "Transit", imgPath: "assets/img/tmg-article_tall(4).jpg" },
        //     { title: "Ad Astra", imgPath: "assets/img/tmg-article_tall(5).jpg" },
        //     { title: "Little Woman", imgPath: "assets/img/tmg-article_tall(6).jpg" },
        //     { title: "The Nightingale", imgPath: "assets/img/tmg-article_tall(7).jpg" },
        //     { title: "Parabellum", imgPath: "assets/img/tmg-article_tall(8).jpg" }
        // ];
    }
}
