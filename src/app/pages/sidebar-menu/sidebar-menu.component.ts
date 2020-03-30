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
            var $menu = $('.header_Menu')
            $menu.find('a').each(function () {
                $(this).off('click')
                if ($(this).siblings('.sub_Menu').length) {
                    $(this).on('click', function (event) {
                        event.preventDefault()
                        if (!$(this).siblings('.sub_Menu').hasClass('opened')) {
                            $menu.find('.opened').slideToggle()
                            $menu.find('.opened').removeClass('opened')
                            $menu.find('.active').removeClass('active')

                            $(this).siblings('.sub_Menu').slideToggle()
                            $(this).siblings('.sub_Menu').addClass('opened')
                            $(this).parent('li').addClass('active')
                        } else {
                            $(this).siblings('.sub_Menu').removeClass('opened')
                            $(this).siblings('.sub_Menu').slideToggle()
                        }

                    })
                }
            })
        })(jQuery)
        this.categories = this.shareService.categories
    }

    onResized(event: ResizedEvent) {
        this.width = event.newWidth;
        if (this.width < 180) {
            const category_title_components = document.getElementsByClassName("category_title");
            var i
            for (i = 0; i < category_title_components.length; i++) {
                category_title_components[i].classList.add("d-none")
            }
            const brand_logo_img = document.getElementById("brand_logo_img")
            brand_logo_img.classList.add("notext-logo")
            this.shareService.setSlideCardTitlePosX(82)
        } else {
            const category_title_components = document.getElementsByClassName("category_title")
            var i;
            for (i = 0; i < category_title_components.length; i++) {
                category_title_components[i].classList.remove("d-none")
            }
            const brand_logo_img = document.getElementById("brand_logo_img")
            brand_logo_img.classList.remove("notext-logo")
            this.shareService.setSlideCardTitlePosX(280)
        }
    }

    logout() {
        this.authenticationService.logout();
        this.route.navigate(['/login'])
    }
}