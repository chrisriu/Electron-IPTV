import { Component, OnInit } from '@angular/core';
import jQuery from 'jquery';
import { ResizedEvent } from 'angular-resize-event';
declare var $: any;

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

    width: number;
    height: number;
    constructor() { }

    ngOnInit(): void {
        (function ($) {
            console.log("This is the a");
            $(".components a").on('click', function () {
                console.log("a tage is clicked");
                $('.components').find('li.active').removeClass('active');
                $(this).parent('li').addClass('active');
            });
        })(jQuery);
    }

    onResized(event: ResizedEvent) {
        this.width = event.newWidth;
        if (this.width < 160) {
            const category_home_title = document.getElementById("home_category_title");
            category_home_title.classList.add("d-none");
            const category_livetv_title = document.getElementById("livetv_category_title");
            category_livetv_title.classList.add("d-none");
            const category_movie_title = document.getElementById("movie_category_title");
            category_movie_title.classList.add("d-none");
            const category_tvseries_title = document.getElementById("tvseries_category_title");
            category_tvseries_title.classList.add("d-none");
            const category_radio_title = document.getElementById("radio_category_title");
            category_radio_title.classList.add("d-none");
            const category_recording_title = document.getElementById("recording_category_title");
            category_recording_title.classList.add("d-none");
            const category_favorite_title = document.getElementById("favorite_category_title");
            category_favorite_title.classList.add("d-none");
            const brand_logo_img = document.getElementById("brand_logo_img");
            brand_logo_img.classList.add("notext-logo");
        } else {
            const category_home_title = document.getElementById("home_category_title");
            category_home_title.classList.remove("d-none");
            const category_livetv_title = document.getElementById("livetv_category_title");
            category_livetv_title.classList.remove("d-none");
            const category_movie_title = document.getElementById("movie_category_title");
            category_movie_title.classList.remove("d-none");
            const category_tvseries_title = document.getElementById("tvseries_category_title");
            category_tvseries_title.classList.remove("d-none");
            const category_radio_title = document.getElementById("radio_category_title");
            category_radio_title.classList.remove("d-none");
            const category_recording_title = document.getElementById("recording_category_title");
            category_recording_title.classList.remove("d-none");
            const category_favorite_title = document.getElementById("favorite_category_title");
            category_favorite_title.classList.remove("d-none");
            const brand_logo_img = document.getElementById("brand_logo_img");
            brand_logo_img.classList.remove("notext-logo");
        }

        
    }

}
