import Flickity from 'flickity';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';

import { Component, Input, OnInit } from '@angular/core';

import { MovieCard } from '../../models';
import { ShareService } from '../../services/share.service';

declare var $: any;
@Component({
  selector: 'app-last-added-movies',
  templateUrl: './last-added-movies.component.html',
  styleUrls: ['./last-added-movies.component.css']
})
export class LastAddedMoviesComponent implements OnInit {

  @Input() cards: MovieCard[];
  sliderTitlePosX: number;
  subscription: any;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(
        function () {
          Flickity.setJQuery($);
          jQueryBridget('flickity', Flickity, $);

          var $imagesCarousel = $('#last_movies .carouselOfImages').flickity({
            contain: true,
            autoplay: false,
            wrapAround: true,
            friction: 0.2,
            pageDots: false
          });
          function resizeCells() {
            var flkty = $imagesCarousel.data('flickity');
            var $current = flkty.selectedIndex;
            var $length = flkty.cells.length;
            if ($length <= '3') {
              $imagesCarousel.flickity('destroy');
            }
            $('#last_movies .carouselOfImages .carouselImage').css('margin-left', '0px');
            $('#last_movies .carouselOfImages .carouselImage').removeClass("nextToSelected");
            $('#last_movies .carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelected");
            $('#last_movies .carouselOfImages .carouselImage').eq($current - 1).css('margin-left', '-35px');
            if ($current + 1 == $length) {
              var $endCell = "0"
            } else {
              var $endCell_num = $current + 1;
              var $endCell: string = $endCell_num.toString();
            }
            $('#last_movies .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
            $('#last_movies .carouselOfImages .carouselImage').eq($endCell).css('margin-left', '35px');
            $('#last_movies .flickity-button.flickity-prev-next-button.previous').css('left', '114px');
            $('#last_movies .flickity-button.flickity-prev-next-button.next').css('right', '34px');
            $('#last_movies .flickity-prev-next-button').css('width', '50px');
            $('#last_movies .flickity-prev-next-button').css('height', '50px');
            $('#last_movies .flickity-viewport').css('height', '400px')
          };
          resizeCells();
          $imagesCarousel.on('scroll.flickity', function () {
            resizeCells();
          });
          $("#last_movies .carouselImage img").click(function () {
            var $this = $(this);
            var imageID = $this.attr('data-tab');
            var imageSrc = $this.attr('src');

            $('.' + imageID).removeClass('hide');
            $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
          });
          $('.product-detail-close,.product-detail').on('click', function () {
            $('.product-detail').addClass('hide');
          });
          $('.modal-video').on('hidden.bs.modal', function (e) {
            $('.modal-video iframe').attr('src', $('.modal-video iframe').attr('src'));
          });

          autoPlayYouTubeModal();
          function autoPlayYouTubeModal() {
            var trigger = $("body").find('[data-the-video]');
            trigger.click(function () {
              var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-the-video"),
                videoSRCauto = videoSRC + "&autoplay=1";
              $(theModal + ' iframe').attr('src', videoSRCauto);
              $(theModal + ' button.close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
              });
              $('.modal-video').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
              });
            });
          }
          $(window).on('load resize', function () {
            var $window = $(window);
            $('.modal-fill-vert .modal-body > *').height(function () {
              return $window.height() - 60;
            });
          });
        }
      );

    })(jQuery);

    this.subscription = this.shareService.getEmittedPosX().subscribe((sidebarPosX) => {
      this.sliderTitlePosX = sidebarPosX + 10
    })
  }
  setSliderTitlePosX() {
    const styles = { 'margin-left': this.sliderTitlePosX + 'px' };
    return styles;
  }
}
