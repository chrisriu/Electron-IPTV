import { Component, OnInit } from '@angular/core';
import jQuery from 'jquery';
import { ResizedEvent } from 'angular-resize-event';
import { Router } from '@angular/router'
import { AuthenticationService, ShareService } from '../../services';
declare var $: any;

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

    width: number
    height: number
    categories: any
    constructor(
        private route: Router,
        private authenticationService: AuthenticationService,
        private shareService: ShareService
    ) { }

    ngOnInit(): void {
        (function ($) {
            $(".components a").on('click', function () {
                if ($('.components').find('li.active') !== $(this).parent('li')) {
                    $('.components').find('li.active').find('a').attr('aria-expanded', 'false')
                    $('.components').find('li.active').find('ul').removeClass('show')
                    $('.components').find('li.active').removeClass('active')
                }
                $(this).parent('li').addClass('active')
            });
        })(jQuery);

        this.categories = this.shareService.categories
        console.log(this.categories)
    }

    onResized(event: ResizedEvent) {
        this.width = event.newWidth;
        if (this.width < 180) {
            const category_title_components = document.getElementsByClassName("category_title");
            var i;
            for (i = 0; i < category_title_components.length; i++) {
                category_title_components[i].classList.add("d-none");
            }
            const brand_logo_img = document.getElementById("brand_logo_img");
            brand_logo_img.classList.add("notext-logo");
        } else {
            const category_title_components = document.getElementsByClassName("category_title");
            var i;
            for (i = 0; i < category_title_components.length; i++) {
                category_title_components[i].classList.remove("d-none");
            }
            const brand_logo_img = document.getElementById("brand_logo_img");
            brand_logo_img.classList.remove("notext-logo");
        }
    }

    logout() {
        this.authenticationService.logout();
        this.route.navigate(['/login']);
    }
}