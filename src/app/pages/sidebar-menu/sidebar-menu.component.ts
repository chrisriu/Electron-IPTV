import { Component, OnInit } from '@angular/core';
import jQuery from 'jquery';
import { ResizedEvent } from 'angular-resize-event';
import { Router } from '@angular/router'
import { AuthService, ShareService } from '../../services';
import { TestService } from '../../services/test.service'
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
    private authService: AuthService,
    private shareService: ShareService,
    private testService: TestService,
  ) { }

  ngOnInit(): void {
    var self = this;
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
    // this.categories = this.shareService.categories
    this.categories = this.testService.categories
  }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    if (this.width < 200) {
      this.doSlideAnimation(82)
    } else {
      this.doSlideAnimation(280)
    }
  }

  doSlideAnimation(x) {
    if (x < 83) {
      const header_titles = document.getElementsByClassName('header_title')

      var i
      for (i = 0; i < header_titles.length; i++) {
        header_titles[i].classList.add('d-none')
      }

      const opened_sub_category = document.getElementsByClassName('sub_Menu')
      for (i = 0; i < opened_sub_category.length; i++) {
        opened_sub_category[i].classList.remove('opened')
        opened_sub_category[i].classList.add('d-none')
      }

      const brand_logo_text = document.getElementById("brand_text")
      brand_logo_text.classList.add("d-none")
      this.shareService.setSlideCardTitlePosX(82)
    } else {
      const header_titles = document.getElementsByClassName('header_title')

      var i;
      for (i = 0; i < header_titles.length; i++) {
        header_titles[i].classList.remove("d-none")
      }

      const opened_sub_category = document.getElementsByClassName('sub_Menu')
      for (i = 0; i < opened_sub_category.length; i++) {
        opened_sub_category[i].classList.remove('d-none')
      }

      const brand_logo_text = document.getElementById("brand_text")
      brand_logo_text.classList.remove("d-none")
      this.shareService.setSlideCardTitlePosX(280)
    }
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/login'])
  }
}