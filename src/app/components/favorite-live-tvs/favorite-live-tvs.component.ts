import Flickity from 'flickity';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';

import { Component, Input, OnInit } from '@angular/core';

import { LiveTVCard } from '../../models';
import { ShareService } from '../../services';

declare var $: any;

@Component({
  selector: 'app-favorite-live-tvs',
  templateUrl: './favorite-live-tvs.component.html',
  styleUrls: ['./favorite-live-tvs.component.css']
})
export class FavoriteLiveTVsComponent implements OnInit {

  @Input() cards: LiveTVCard[];
  @Input() slider_title: string;
  sliderTitlePosX: number;
  subscription: any;
  constructor(public shareService: ShareService) { }

  ngOnInit(): void {

      (function ($) {
        $(document).ready(
          function () {
            Flickity.setJQuery($);
            jQueryBridget('flickity', Flickity, $);

            var $imagesCarousel = $('#fav_livetvs .carouselOfImages').flickity({
              contain: true,
              autoPlay: false,
              wrapAround: true,
              friction: 0.3,
              pageDots: false
            });
            function resizeCells() {
              var flkty = $imagesCarousel.data('flickity');
              if( flkty != undefined){
                var $current = flkty.selectedIndex;
                var $length = flkty.cells.length;
                if ($length <= '5') {
                  $imagesCarousel.flickity('destroy');
                }

                $('#fav_livetvs .carouselOfImages .carouselImage').css('margin-left', '0px');
                $('#fav_livetvs .carouselOfImages .carouselImage').removeClass("nextToSelected");
                $('#fav_livetvs .carouselOfImages .carouselImage').eq($current - 3).addClass("nextToSelected");
                $('#fav_livetvs .carouselOfImages .carouselImage').eq($current - 1).css('margin-left', '-20px');
                $('#fav_livetvs .carouselOfImages .carouselImage').eq($current - 2).css('margin-left', '-40px');
                $('#fav_livetvs .carouselOfImages .carouselImage').eq($current - 3).css('margin-left', '-60px');

                if ($current + 1 == $length) {
                  var $endCell = "2"
                } else {
                  var $endCell_num = ($current + 3)%10;
                  var $endCell: string = $endCell_num.toString();
                }

                $('#fav_livetvs .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
                $('#fav_livetvs .carouselOfImages .carouselImage').eq(Number($endCell)).css('margin-left', '60px');
                $('#fav_livetvs .carouselOfImages .carouselImage').eq(Number($endCell) - 1).css('margin-left', '40px');
                $('#fav_livetvs .carouselOfImages .carouselImage').eq(Number($endCell) - 2).css('margin-left', '20px');
                $('#fav_livetvs .flickity-prev-next-button').css('width', '50px');
                $('#fav_livetvs .flickity-prev-next-button').css('height', '50px');
                $('#fav_livetvs .flickity-prev-next-button').css('top', '40%');
                $('#fav_livetvs .flickity-button.flickity-prev-next-button.previous').css('left', '114px');
                $('#fav_livetvs .flickity-button.flickity-prev-next-button.next').css('right', '34px');
                $('#fav_livetvs .flickity-viewport').css('height', '205px')
              }

            };
            resizeCells();
            $imagesCarousel.on('scroll.flickity', function () {
              resizeCells();
            });
            $("#fav_livetvs .carouselImage img").click(function () {
              var $this = $(this);
              var imageID = $this.attr('data-tab');
              var imageSrc = $this.attr('src');

              $('.' + imageID).removeClass('hide');
              $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
            });
            $('#fav_livetvs .product-detail-close,#fav_livetvs .product-detail').on('click', function () {
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
