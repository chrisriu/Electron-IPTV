import { Component, OnInit } from '@angular/core';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';

declare var $: any;

@Component({
    selector: 'app-multi-series-slider',
    templateUrl: './multi-series-slider.component.html',
    styleUrls: ['./multi-series-slider.component.css']
})
export class MultiSeriesSliderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        (function ($) {
            $(document).ready(
                function () {
                    Flickity.setJQuery($);
                    jQueryBridget('flickity', Flickity, $);

                    var $imagesCarousel = $('#tv_series .carouselOfImages').flickity({
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
                        if ($length <= '3') {
                            $imagesCarousel.flickity('destroy');
                        }
                        $('#tv_series .carouselOfImages .carouselImage').removeClass("nextToSelected");
                        $('#tv_series .carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelected");
                        if ($current + 1 == $length) {
                            var $endCell = "0"
                        } else {
                            var $endCell_num = $current + 1;
                            var $endCell: string = $endCell_num.toString();
                        }
                        $('#tv_series .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
                    };
                    resizeCells();
                    $imagesCarousel.on('scroll.flickity', function () {
                        resizeCells();
                    });
                    $("#tv_series .carouselImage img").click(function () {
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
    }

}
