import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Card } from '../../models/card';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    searchForm: FormGroup;

    movieCards: Card[];
    tvchannelCards: Card[];
    serieCards: Card[];
    radioCards: Card[];

    movie_title = "Latest Added Movies";
    tvchannel_title = "Favorite TV Channels";
    series_title: "Latest Added TV Series";
    radio_title: "Latest Added Radio";

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.movieCards = [
            { title: "The Black Man In San Francisco", imgPath: "assets/img/tmg-article_tall.jpg" },
            { title: "Dark Waters", imgPath: "assets/img/tmg-article_tall(3).jpg" },
            { title: "Ash is Purest White", imgPath: "assets/img/tmg-article_tall(10).jpg" },
            { title: "Parasite", imgPath: "assets/img/tmg-article_tall(11).jpg" },
            { title: "Peterloo", imgPath: "assets/img/tmg-article_tall(9).jpg" },
            { title: "Transit", imgPath: "assets/img/tmg-article_tall(4).jpg" },
            { title: "Ad Astra", imgPath: "assets/img/tmg-article_tall(5).jpg" },
            { title: "Little Woman", imgPath: "assets/img/tmg-article_tall(6).jpg" },
            { title: "The Nightingale", imgPath: "assets/img/tmg-article_tall(7).jpg" },
            { title: "Parabellum", imgPath: "assets/img/tmg-article_tall(8).jpg" }
        ];

        this.tvchannelCards = [
            { title: "HBO 2 HD", imgPath: "assets/img/HBO2_HD.png" },
            { title: "PRO TV HD", imgPath: "assets/img/protv_hd.png" },
            { title: "AXN Black 4K", imgPath: "assets/img/axn_black_png.png" },
            { title: "FILM NOW HD", imgPath: "assets/img/filmnowhd.png" },
            { title: "BBC Earth HD", imgPath: "assets/img/bbc_earth_hd.png" },
            { title: "TRAVEL CHANNEL", imgPath: "assets/img/travel_channel.png" },
            { title: "HBO 2 HD", imgPath: "assets/img/HBO2_HD.png" },
            { title: "PRO TV HD", imgPath: "assets/img/protv_hd.png" },
            { title: "AXN Black 4K", imgPath: "assets/img/axn_black_png.png" },
            { title: "TRAVEL CHANNEL", imgPath: "assets/img/travel_channel.png" }
        ];

        this.serieCards = [
            { title: "The Black Man In San Francisco", imgPath: "assets/img/right_series.png" },
            { title: "Dark Waters", imgPath: "assets/img/left_movie.png" },
            { title: "Ash is Purest White", imgPath: "assets/img/left_series.png" },
            { title: "Parasite", imgPath: "assets/img/right_movie.png" },
            { title: "Peterloo", imgPath: "assets/img/series_2.png" },
            { title: "Transit", imgPath: "assets/img/right_series.png" },
            { title: "Ad Astra", imgPath: "assets/img/left_movie.png" },
            { title: "Little Woman", imgPath: "assets/img/left_series.png" },
            { title: "The Nightingale", imgPath: "assets/img/right_movie.png" },
            { title: "Parabellum", imgPath: "assets/img/series_2.png" }
        ];

        this.radioCards = [
            { title: "", imgPath: "assets/img/clubmix_Radio.png" },
            { title: "", imgPath: "assets/img/kissfm.png" },
            { title: "", imgPath: "assets/img/one_fm_.png" },
            { title: "", imgPath: "assets/img/radio_deea.png" },
            { title: "", imgPath: "assets/img/radio21.png" },
            { title: "", imgPath: "assets/img/virgin_Radio.png" },
            { title: "", imgPath: "assets/img/clubmix_Radio.png" }
        ];
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({});

    }


}
