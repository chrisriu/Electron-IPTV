import { Component, OnInit } from '@angular/core';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';

declare var $: any;
@Component({
    selector: 'app-multi-tv-channel-slider',
    templateUrl: './multi-tv-channel-slider.component.html',
    styleUrls: ['./multi-tv-channel-slider.component.css']
})
export class MultiTvChannelSliderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        (function ($) {
            $(document).ready(
                function () {
                    Flickity.setJQuery($);
                    jQueryBridget('flickity', Flickity, $);

                    var $imagesCarousel = $('#tv_channel .carouselOfImages').flickity({
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
                        $('#tv_channel .carouselOfImages .carouselImage').removeClass("nextToSelected");
                        $('#tv_channel .carouselOfImages .carouselImage').eq($current - 3).addClass("nextToSelected");
                        if ($current + 1 == $length) {
                            var $endCell = "2"
                        } else {
                            var $endCell_num = $current + 3;
                            var $endCell: string = $endCell_num.toString();
                        }
                        $('#tv_channel .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
                    };
                    resizeCells();
                    $imagesCarousel.on('scroll.flickity', function () {
                        resizeCells();
                    });
                    $("#tv_channel .carouselImage img").click(function () {
                        var $this = $(this);
                        var imageID = $this.attr('data-tab');
                        var imageSrc = $this.attr('src');

                        $('.' + imageID).removeClass('hide');
                        $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
                    });
                    $('#tv_channel .product-detail-close,#tv_channel .product-detail').on('click', function () {
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
