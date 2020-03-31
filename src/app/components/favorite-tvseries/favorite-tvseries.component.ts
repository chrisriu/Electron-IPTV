import { Component, OnInit, Input } from '@angular/core';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';
import { Card } from '../../models/card';
import { ShareService } from '../../services/share.service';
declare var $: any;

@Component({
  selector: 'app-favorite-tvseries',
  templateUrl: './favorite-tvseries.component.html',
  styleUrls: ['./favorite-tvseries.component.css']
})
export class FavoriteTVSeriesComponent implements OnInit {
  @Input() cards: Card[];
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

          var $imagesCarousel = $('#fav_tvseries .carouselOfImages').flickity({
            contain: true,
            autoPlay: false,
            wrapAround: true,
            friction: 0.3,
            pageDots: false
          });
          function resizeCells() {
            var flkty = $imagesCarousel.data('flickity');
            var $current = flkty.selectedIndex;
            var $length = flkty.cells.length;
            if ($length <= '5') {
              $imagesCarousel.flickity('destroy');
            }
            $('#fav_tvseries .carouselOfImages .carouselImage').removeClass("nextToSelected");
            $('#fav_tvseries .carouselOfImages .carouselImage').eq($current - 3).addClass("nextToSelected");
            if ($current + 1 == $length) {
              var $endCell = "2"
            } else {
              var $endCell_num = $current + 3;
              var $endCell: string = $endCell_num.toString();
            }
            $('#fav_tvseries .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
          };
          resizeCells();
          $imagesCarousel.on('scroll.flickity', function () {
            resizeCells();
          });
          $("#fav_tvseries .carouselImage img").click(function () {
            var $this = $(this);
            var imageID = $this.attr('data-tab');
            var imageSrc = $this.attr('src');

            $('.' + imageID).removeClass('hide');
            $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
          });
          $('#fav_tvseries .product-detail-close,#fav_tvseries .product-detail').on('click', function () {
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
