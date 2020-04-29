import { Component, OnInit, Input} from '@angular/core';
import { MovieCard, LiveTVCard, SerieCard } from '../../models';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';
import { ShareService } from '../../services/share.service';
declare var $: any;
@Component({
  selector: 'app-last-added-tvseries',
  templateUrl: './last-added-tvseries.component.html',
  styleUrls: ['./last-added-tvseries.component.css']
})
export class LastAddedTVSeriesComponent implements OnInit {

  @Input() cards: SerieCard[];
  @Input() slider_title: string;
  sliderTitlePosX: number;
  subscription: any;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(
        function () {
          Flickity.setJQuery($);
          jQueryBridget('flickity', Flickity, $);

          var $imagesCarousel = $('#last_tvseries .carouselOfImages').flickity({
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
            $('#last_tvseries .carouselOfImages .carouselImage').css('margin-left', '0px');
            $('#last_tvseries .carouselOfImages .carouselImage').removeClass("nextToSelected");
            $('#last_tvseries .carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelected");
            $('#last_tvseries .carouselOfImages .carouselImage').eq($current - 1).css('margin-left', '-35px');
            if ($current + 1 == $length) {
              var $endCell = "0"
            } else {
              var $endCell_num = $current + 1;
              var $endCell: string = $endCell_num.toString();
            }
            $('#last_tvseries .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
            $('#last_tvseries .carouselOfImages .carouselImage').eq($endCell).css('margin-left', '35px');
            $('#last_tvseries .flickity-prev-next-button').css('width', '50px');
            $('#last_tvseries .flickity-prev-next-button').css('height', '50px');
            $('#last_tvseries .flickity-button.flickity-prev-next-button.previous').css('left', '114px');
            $('#last_tvseries .flickity-button.flickity-prev-next-button.next').css('right', '34px');
            $('#last_tvseries .flickity-viewport').css('height', '400px')
          };
          resizeCells();
          $imagesCarousel.on('scroll.flickity', function () {
            resizeCells();
          });
          $("#last_tvseries .carouselImage img").click(function () {
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
