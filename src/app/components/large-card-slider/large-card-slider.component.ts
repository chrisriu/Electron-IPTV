import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';

declare var $: any;
@Component({
    selector: 'app-large-card-slider',
    templateUrl: './large-card-slider.component.html',
    styleUrls: ['./large-card-slider.component.css']
})
export class LargeCardSliderComponent implements OnInit {

    @Input() cards: Card[];
    @Input() slider_title: string;
    constructor() { }

    ngOnInit(): void {
        (function ($) {
            $(document).ready(
                function () {
                    Flickity.setJQuery($);
                    jQueryBridget('flickity', Flickity, $);

                    var $imagesCarousel = $('#large .carouselOfImages').flickity({
                        contain: true,
                        autoPlay: 1500,
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
                        $('#large .carouselOfImages .carouselImage').removeClass("nextToSelected");
                        $('#large .carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelected");
                        if ($current + 1 == $length) {
                            var $endCell = "0"
                        } else {
                            var $endCell_num = $current + 1;
                            var $endCell: string = $endCell_num.toString();
                        }
                        $('#large .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
                    };
                    resizeCells();
                    $imagesCarousel.on('scroll.flickity', function () {
                        resizeCells();
                    });
                    $("#large .carouselImage img").click(function () {
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
