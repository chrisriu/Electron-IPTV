import { Component, OnInit, Input } from '@angular/core';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';
import { MovieCard } from '../../models';
import { ShareService } from '../../services/share.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-movie-card-slider',
  templateUrl: './movie-card-slider.component.html',
  styleUrls: ['./movie-card-slider.component.css']
})
export class MovieCardSliderComponent implements OnInit {

  @Input() cards: MovieCard[];
  sliderTitlePosX: number;
  subscription: any;
  playIcon = faPlay
  starIcon = faStar
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {

    (function ($) {
      $(document).ready(
        function () {
          Flickity.setJQuery($);
          jQueryBridget('flickity', Flickity, $);

          var $imagesCarousel = $('#large_moviecard_slider .carouselOfImages').flickity({
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
            $('#large_moviecard_slider .carouselOfImages .carouselImage').css('margin-left', '0px');
            $('#large_moviecard_slider .carouselOfImages .carouselImage').removeClass("nextToSelected");
            $('#large_moviecard_slider .carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelected");
            $('#large_moviecard_slider .carouselOfImages .carouselImage').eq($current - 1).css('margin-left', '-35px');
            if ($current + 1 == $length) {
              var $endCell = "0"
            } else {
              var $endCell_num = $current + 1;
              var $endCell: string = $endCell_num.toString();
            }
            $('#large_moviecard_slider .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
            $('#large_moviecard_slider .carouselOfImages .carouselImage').eq($endCell).css('margin-left', '35px');
            $('#large_moviecard_slider .flickity-button.flickity-prev-next-button.previous').css('left', '114px');
            $('#large_moviecard_slider .flickity-button.flickity-prev-next-button.next').css('right', '84px');
            $('#large_moviecard_slider .flickity-prev-next-button').css('width', '50px');
            $('#large_moviecard_slider .flickity-prev-next-button').css('height', '50px');
            $('#large_moviecard_slider .flickity-viewport').css('height', '631px')
          };
          resizeCells();
          $imagesCarousel.on('scroll.flickity', function () {
            resizeCells();
          });
          $("#large_moviecard_slider .carouselImage img").click(function () {
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
